import { App, Chart } from 'cdk8s';
import { Construct } from 'constructs';
import { AlbIngressController, AwsLoadBalancerController } from './index';

export class MyChart extends Chart {
  constructor(scope: Construct, name: string) {
    super(scope, name);
    new AlbIngressController(this, 'albingresscntroller', {
      clusterName: 'EKScluster',
      args: [
        '--test=123',
      ],
      env: [
        {
          name: 'testEnv',
          value: '12345',
        },
      ],
      replicas: 0,
    });
  }
}

export class MyChartv2 extends Chart {
  constructor(scope: Construct, name: string) {
    super(scope, name);
    new AwsLoadBalancerController(this, 'awsloadbalancercontroller', {
      clusterName: 'pipelineDemo',
      args: [
        '--test=123',
      ],
      replicas: 0,
    });
  }
}
const app = new App();
new MyChart(app, 'test-v1');
new MyChartv2(app, 'test-v2');
app.synth();