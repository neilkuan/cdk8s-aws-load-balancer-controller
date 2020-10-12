import { App, Chart } from 'cdk8s';
import { Construct } from 'constructs';
import { AlbIngressController } from './index';

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
    });
  }
}
const app = new App();
new MyChart(app, 'testcdk8s');
app.synth();