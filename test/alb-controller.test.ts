import { Chart, Testing } from 'cdk8s';
import { AlbIngressController } from '../src';
test('AlbIngressController', () => {
  const app = Testing.app();
  const chart = new Chart(app, 'test');
  new AlbIngressController(chart, 'AlbIngressController', {
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
  expect(Testing.synth(chart)).toMatchSnapshot();
});