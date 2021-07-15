const { ConstructLibrary } = require('projen');
const PROJECT_DESCRIPTION = 'cdk8s-aws-load-balancer-controller is an CDK8S construct library that provides AWS Alb Load Balancer Controller Configure.';
const CDK_VERSION = '1.113.0';
const CDK8S_VERSION = '1.0.0-beta.10';
const CONSTRCUTS_VERSION = '3.3.97';
const project = new ConstructLibrary({
  description: PROJECT_DESCRIPTION,
  authorAddress: 'guan840912@gmail.com',
  authorName: 'Neil Kuan',
  name: 'cdk8s-aws-load-balancer-controller',
  repository: 'https://github.com/neilkuan/cdk8s-aws-load-balancer-controller.git',
  keywords: ['aws', 'cdk8s', 'aws-load-balancer-controller'],
  defaultReleaseBranch: 'main',
  catalog: {
    twitter: 'neil_kuan',
    announce: true,
  },
  python: {
    distName: 'cdk8s-aws-load-balancer-controller',
    module: 'cdk8s_aws_load_balancer_controller',
  },
  peerDeps: [
    `constructs@${CONSTRCUTS_VERSION}`,
    `@aws-cdk/aws-iam@${CDK_VERSION}`,
    `@aws-cdk/core@${CDK_VERSION}`,
    `cdk8s@${CDK8S_VERSION}`,
  ],
  devDeps: [
    '@types/js-yaml@^3.12.5',
    'js-yaml@^3.14.0',
    `cdk8s@${CDK8S_VERSION}`,
    `constructs@${CONSTRCUTS_VERSION}`,
    `@aws-cdk/aws-iam@${CDK_VERSION}`,
    `@aws-cdk/core@${CDK_VERSION}`,
  ],
  bundledDeps: [
    '@types/js-yaml@^3.12.5',
    'js-yaml@^3.14.0',
  ],
});

const common_exclude = ['cdk.out', 'cdk.context.json', 'image', 'yarn-error.log', 'coverage'];
project.gitignore.exclude(...common_exclude);

project.npmignore.exclude(...common_exclude);
project.synth();