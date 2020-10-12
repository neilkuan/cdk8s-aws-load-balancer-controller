import * as kplus from 'cdk8s-plus';
import { Construct } from 'constructs';
import * as k8s from './imports/k8s';


export interface EnvVar {
  /**
   * Name of the environment variable. Must be a C_IDENTIFIER.
   *
   * @schema io.k8s.api.core.v1.EnvVar#name
   */
  readonly name: string;

  /**
   * Variable references $(VAR_NAME) are expanded using the previous defined environment variables in the container and any service environment variables. If a variable cannot be resolved, the reference in the input string will be unchanged. The $(VAR_NAME) syntax can be escaped with a double $$, ie: $$(VAR_NAME). Escaped references will never be expanded, regardless of whether the variable exists or not. Defaults to "".
   *
   * @default .
   * @schema io.k8s.api.core.v1.EnvVar#value
   */
  readonly value?: string;
}

export interface AlbIngressControllerOptions {
  /**
   * Extra labels to associate with resources.
   * @default - none
   */
  readonly labels?: { [name: string]: string };
  /**
   * Default Namespace for alb-ingress-controller.
   * @default - kube-system
   */
  readonly namespace?: string ;
  /**
   * Kubernetes Cluster Name for alb-ingress-controller.
   * @default - None
   */
  readonly clusterName: string ;
  /**
   * Default Service Account Name for alb-ingress-controller.
   * @default - alb-ingress-controller
   */
  readonly serviceAccountName?: string;
  /**
   * Default image for alb-ingress-controller.
   * @default - docker.io/amazon/aws-alb-ingress-controller:v1.1.9
   */
  readonly image?: string;
  /**
   * Another Args for alb-ingress-controller.
   * @default - None
   */
  readonly args?: string[];
  /**
   * Another Args for alb-ingress-controller.
   * @default - None
   */
  readonly env?: EnvVar[];
}
/**
 * Generate alb-ingress-controller config yaml.
 * see https://github.com/kubernetes-sigs/aws-alb-ingress-controller/blob/master/docs/examples
*/
export class AlbIngressController extends Construct {
  /**
   * Service Account Name for alb-ingress-controller.
   */
  readonly serviceAccountName: string;
  /**
   * Kubernetes Cluster Name for alb-ingress-controller.
   */
  readonly clusterName: string;
  constructor(scope: Construct, id: string, options: AlbIngressControllerOptions) {
    super(scope, id);
    this.serviceAccountName = options.serviceAccountName ?? 'alb-ingress-controller';
    this.clusterName = options.clusterName;
    new kplus.ServiceAccount(this, 'kplus-sa', {
      metadata: {
        name: this.serviceAccountName,
      },
    });
    new k8s.Deployment(this, 'alb-ingress-controller-deployment', {
      metadata: {
        labels: {
          'app.kubernetes.io/name': 'alb-ingress-controller',
          ...options.labels,
        },
        namespace: options?.namespace ?? 'kube-system',
      },
      spec: {
        selector: {
          matchLabels: {
            'app.kubernetes.io/name': 'alb-ingress-controller',
            ...options.labels,
          },
        },
        template: {
          metadata: {
            labels: {
              'app.kubernetes.io/name': 'alb-ingress-controller',
              ...options.labels,
            },
          },
          spec: {
            containers: [{
              name: 'alb-ingress-controller',
              image: options?.image ?? 'docker.io/amazon/aws-alb-ingress-controller:v1.1.9',
              args: this.argsFunc(options.args),
              env: this.envFunc(options.env),
            }],
            serviceAccountName: `${this.serviceAccountName}`,
          },
        },
      },
    });
  }
  private argsFunc(args?: string[]):string[] {
    const defaultArgs = ['--ingress-class=alb', `--cluster-name=${this.clusterName}`];
    if (args) {
      for (let i =0; i < args.length; i++) {
        defaultArgs.push(args[i]);
      }
    }
    return defaultArgs;
  }
  private envFunc(envSet?: EnvVar[] | undefined):EnvVar[] | undefined {
    return envSet;
  }
}