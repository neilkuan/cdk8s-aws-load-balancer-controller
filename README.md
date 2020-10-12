# cdk8s-aws-alb-ingress-controller
> [aws alb ingress controller](https://github.com/kubernetes-sigs/aws-alb-ingress-controller) constructs for cdk8s

Basic implementation of a [aws alb ingress controller](https://github.com/kubernetes-sigs/aws-alb-ingress-controller) construct for cdk8s. Contributions are welcome!

## Usage

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

## License

Distributed under the [Apache 2.0](./LICENSE) license.