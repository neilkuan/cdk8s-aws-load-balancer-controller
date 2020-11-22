import { App, Chart } from 'cdk8s';
import { Construct } from 'constructs';
import { AlbIngressController, AwsLoadBalancerController } from './index';

export class MyChart extends Chart {
  constructor(scope: Construct, name: string) {
    super(scope, name);
    new AlbIngressController(this, 'AlbIngressController', {
      clusterName: 'TestClusterName',
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
    new AwsLoadBalancerController(this, 'AwsLoadController', {
      clusterName: 'TestClusterName',
    });
  }
}
const app = new App();
new MyChart(app, 'test');
app.synth();