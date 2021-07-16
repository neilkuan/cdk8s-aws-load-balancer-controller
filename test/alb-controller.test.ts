import { Chart, Testing } from 'cdk8s';
import { AlbIngressController, AwsLoadBalancerController } from '../src/index';
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

test('AwsLoadBalancerController', () => {
  const app = Testing.app();
  const chart = new Chart(app, 'test');
  new AwsLoadBalancerController(chart, 'AwsLoadBalancerController', {
    clusterName: 'TestClusterName',
  });
  expect(Testing.synth(chart)).toMatchSnapshot();
});