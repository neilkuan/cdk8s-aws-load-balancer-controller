const { ConstructLibrary } = require('projen');
const PROJECT_DESCRIPTION = 'cdk8s-aws-alb-ingress-controller is an CDK8S construct library that provides AWS Alb Ingress Controller Deplyment Configure.';
const CDK_VERSION = '1.71.0';
const CDK8S_VERSION = '0.32.0';
const project = new ConstructLibrary({
  description: PROJECT_DESCRIPTION,
  authorAddress: "guan840912@gmail.com",
  authorName: "Neil Kuan",
  //cdk8sVersion: "0.30.0",
  name: "cdk8s-aws-alb-ingress-controller",
  repository: "https://github.com/guan840912/cdk8s-aws-alb-ingress-controller.git",
  keywords: ['aws', 'cdk8s', 'alb-ingress-controller'],
  defaultReleaseBranch: 'main',
  releaseBranches: ['main'],
  //compat: true,
  dependabot: false,
  catalog: {
    twitter: 'neil_kuan',
    announce: true,
  },
  python: {
    distName: 'cdk8s-aws-alb-ingress-controller',
    module: 'cdk8s_aws_alb_ingress_controller',
  },
  devDeps: [
    `cdk8s@^${CDK8S_VERSION}`,
    `cdk8s-plus@^${CDK8S_VERSION}`,
    'constructs@^3.2.7',
    `@aws-cdk/aws-iam@^${CDK_VERSION}`,
    `@aws-cdk/core@^${CDK_VERSION}`, 
  ],
  peerDeps: [
    `cdk8s@^${CDK8S_VERSION}`,
    `cdk8s-plus@^${CDK8S_VERSION}`,
    'constructs@^3.2.7',
    `@aws-cdk/aws-iam@^${CDK_VERSION}`,
    `@aws-cdk/core@^${CDK_VERSION}`, 
  ]
});


const common_exclude = ['cdk.out', 'cdk.context.json', 'image', 'yarn-error.log','coverage'];
project.gitignore.exclude(...common_exclude);

project.npmignore.exclude(...common_exclude);
project.synth();