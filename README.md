[![NPM version](https://badge.fury.io/js/cdk8s-aws-alb-ingress-controller.svg)](https://badge.fury.io/js/cdk8s-aws-alb-ingress-controller)
[![PyPI version](https://badge.fury.io/py/cdk8s-aws-alb-ingress-controller.svg)](https://badge.fury.io/py/cdk8s-aws-alb-ingress-controller)
![Release](https://github.com/guan840912/cdk8s-aws-alb-ingress-controller/workflows/Release/badge.svg)

![Downloads](https://img.shields.io/badge/-DOWNLOADS:-brightgreen?color=gray)
![npm](https://img.shields.io/npm/dt/cdk8s-aws-alb-ingress-controller?label=npm&color=orange)
![PyPI](https://img.shields.io/pypi/dm/cdk8s-aws-alb-ingress-controller?label=pypi&color=blue)

# cdk8s-aws-alb-ingress-controller
> [aws alb ingress controller](https://github.com/kubernetes-sigs/aws-alb-ingress-controller) constructs for cdk8s

Basic implementation of a [aws alb ingress controller](https://github.com/kubernetes-sigs/aws-alb-ingress-controller) construct for cdk8s. Contributions are welcome!

## Usage
### AWS Load Balance Controller V1
```ts
import { App, Chart } from 'cdk8s';
import { Construct } from 'constructs';
import { AlbIngressController } from 'cdk8s-aws-alb-ingress-controller';

export class MyChart extends Chart {
  constructor(scope: Construct, name: string) {
    super(scope, name);
    new AlbIngressController(this, 'albingresscntroller', {
      clusterName: 'EKScluster',
    });
  }
}
const app = new App();
new MyChart(app, 'testcdk8s');
app.synth();
```

### AWS Load Balance Controller V2
#### only support install in default namespace now!!!
```ts
import { App, Chart } from 'cdk8s';
import { AwsLoadBalancerController } from 'cdk8s-aws-alb-ingress-controller';
import * as constructs from 'constructs';

export interface MyChartProps {
  readonly clusterName: string;
}

export class MyChart extends Chart {
  readonly deploymentName: string;
  readonly deploymentNameSpace: string;
  constructor(scope: Construct, name: string, props: MyChartProps) {
    super(scope, name);
    const alb = new AwsLoadBalancerController(this, 'alb', {
      clusterName: props.clusterName,
      createServiceAccount: false,
    });
    this.deploymentName = alb.deploymentName;
    this.deploymentNameSpace = alb.namespace;
  }
}
const app = new App();
new MyChart(app, 'testcdk8s');
app.synth();
```


# Featrue For Add IAM Policy.
- For IRSA add IAM Policy version 1. 
```ts
// CDK APP like eks_cluster.ts
import { AwsLoadBalancePolicy, VersionsLists } from 'cdk8s-aws-alb-ingress-controller';
import * as eks from '@aws-cdk/aws-eks';
    const cluster = new eks.Cluster(this, 'MyK8SCluster', {
      defaultCapacity: 0,
      mastersRole: clusterAdmin,
      version: eks.KubernetesVersion.V1_18,
    });

    const albServiceAccount = cluster.addServiceAccount('alb-ingress-controller', {
      name: 'alb-ingress-controller',
      namespace: 'kube-system',
    });
    // will help you add policy to IAM Role .
    AwsLoadBalancePolicy.addPolicy(VersionsLists.AWS_LOAD_BALANCER_CONTROLLER_POLICY_V1, albServiceAccount);
```

- For IRSA add IAM Policy version 2. 
```ts
// CDK APP like eks_cluster.ts
import { AwsLoadBalancePolicy, VersionsLists } from 'cdk8s-aws-alb-ingress-controller';
import * as eks from '@aws-cdk/aws-eks';
    const cluster = new eks.Cluster(this, 'MyK8SCluster', {
      defaultCapacity: 0,
      mastersRole: clusterAdmin,
      version: eks.KubernetesVersion.V1_18,
    });

    const sa = new eks.ServiceAccount(this, 'albserviceaccount', {
      cluster: cluster,
      name: 'aws-load-balancer-controller',
    });
    AwsLoadBalancePolicy.addPolicy(VersionsLists.AWS_LOAD_BALANCER_CONTROLLER_POLICY_V2, sa );

```

Also can see [example repo](https://github.com/guan840912/cdk8s-cdk-example)
## License

Distributed under the [Apache 2.0](./LICENSE) license.