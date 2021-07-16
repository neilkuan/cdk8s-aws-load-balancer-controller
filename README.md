[![NPM version](https://badge.fury.io/js/cdk8s-aws-load-balancer-controller.svg)](https://badge.fury.io/js/cdk8s-aws-load-balancer-controller)
[![PyPI version](https://badge.fury.io/py/cdk8s-aws-load-balancer-controller.svg)](https://badge.fury.io/py/cdk8s-aws-load-balancer-controller)
![Release](https://github.com/neilkuan/cdk8s-aws-load-balancer-controller/workflows/Release/badge.svg)

![Downloads](https://img.shields.io/badge/-DOWNLOADS:-brightgreen?color=gray)
![npm](https://img.shields.io/npm/dt/cdk8s-aws-load-balancer-controller?label=npm&color=orange)
![PyPI](https://img.shields.io/pypi/dm/cdk8s-aws-load-balancer-controller?label=pypi&color=blue)

# cdk8s-aws-load-balancer-controller
> [cdk8s aws load balancer controller](https://github.com/kubernetes-sigs/aws-load-balancer-controller) constructs for cdk8s

This project was formerly known as "CDK AWS ALB Ingress Controller", I just rename it to be "CDK AWS Load Balancer Controller".

Basic implementation of a [aws load balancer controller](https://github.com/kubernetes-sigs/aws-load-balancer-controller) construct for cdk8s. Contributions are welcome!

## Before Usage need to install helm
```bash
curl -fsSL -o get_helm.sh https://raw.githubusercontent.com/helm/helm/master/scripts/get-helm-3
chmod 700 get_helm.sh
./get_helm.sh
```

## Usage
```bash
npm i cdk8s-aws-load-balancer-controller 
npm i cdk8s
or 
yarn add cdk8s-aws-load-balancer-controller
yarn add cdk8s
```

### AWS Load Balance Controller V1
```ts
import { App, Chart } from 'cdk8s';
import { Construct } from 'constructs';
import { AlbIngressController } from 'cdk8s-aws-load-balancer-controller';

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
```ts
import { App, Chart } from 'cdk8s';
import { AwsLoadBalancerController } from 'cdk8s-aws-load-balancer-controller';
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

### AWS Load Balance Controller V2 specific Namespace.
```ts
import { App, Chart } from 'cdk8s';
import { AwsLoadBalancerController } from 'cdk8s-aws-load-balancer-controller';
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
      namespace: 'kube-system',
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
import { AwsLoadBalancePolicy, VersionsLists } from 'cdk8s-aws-load-balancer-controller';
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
import { AwsLoadBalancePolicy, VersionsLists } from 'cdk8s-aws-load-balancer-controller';
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

Also can see [example repo 1](https://github.com/neilkuan/cdk8s-cdk-example)
or [example repo 2](https://github.com/neilkuan/eks-mgng-tagging-name.git) work with aws cdk.
## License

Distributed under the [Apache 2.0](./LICENSE) license.