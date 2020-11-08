import * as iam from '@aws-cdk/aws-iam';
export enum VersionsLists {
  /*
  * AWS Load Balancer Controller Policy Version 1 for version less version 2.0.0.
  */
  AWS_LOAD_BALANCER_CONTROLLER_POLICY_V1 = 'v1',
  /*
  * AWS Load Balancer Controller Policy Version 2 for version after version 2.0.0 (include 2.0.0).
  */
  AWS_LOAD_BALANCER_CONTROLLER_POLICY_V2 = 'v2',
}
const awsLoadBalancerControllerPolicyV1 = {
  actions: [
    'acm:DescribeCertificate',
    'acm:ListCertificates',
    'acm:GetCertificate',
    'ec2:AuthorizeSecurityGroupIngress',
    'ec2:CreateSecurityGroup',
    'ec2:CreateTags',
    'ec2:DeleteTags',
    'ec2:DeleteSecurityGroup',
    'ec2:DescribeAccountAttributes',
    'ec2:DescribeAddresses',
    'ec2:DescribeInstances',
    'ec2:DescribeInstanceStatus',
    'ec2:DescribeInternetGateways',
    'ec2:DescribeNetworkInterfaces',
    'ec2:DescribeSecurityGroups',
    'ec2:DescribeSubnets',
    'ec2:DescribeTags',
    'ec2:DescribeVpcs',
    'ec2:ModifyInstanceAttribute',
    'ec2:ModifyNetworkInterfaceAttribute',
    'ec2:RevokeSecurityGroupIngress',
    'elasticloadbalancing:AddListenerCertificates',
    'elasticloadbalancing:AddTags',
    'elasticloadbalancing:CreateListener',
    'elasticloadbalancing:CreateLoadBalancer',
    'elasticloadbalancing:CreateRule',
    'elasticloadbalancing:CreateTargetGroup',
    'elasticloadbalancing:DeleteListener',
    'elasticloadbalancing:DeleteLoadBalancer',
    'elasticloadbalancing:DeleteRule',
    'elasticloadbalancing:DeleteTargetGroup',
    'elasticloadbalancing:DeregisterTargets',
    'elasticloadbalancing:DescribeListenerCertificates',
    'elasticloadbalancing:DescribeListeners',
    'elasticloadbalancing:DescribeLoadBalancers',
    'elasticloadbalancing:DescribeLoadBalancerAttributes',
    'elasticloadbalancing:DescribeRules',
    'elasticloadbalancing:DescribeSSLPolicies',
    'elasticloadbalancing:DescribeTags',
    'elasticloadbalancing:DescribeTargetGroups',
    'elasticloadbalancing:DescribeTargetGroupAttributes',
    'elasticloadbalancing:DescribeTargetHealth',
    'elasticloadbalancing:ModifyListener',
    'elasticloadbalancing:ModifyLoadBalancerAttributes',
    'elasticloadbalancing:ModifyRule',
    'elasticloadbalancing:ModifyTargetGroup',
    'elasticloadbalancing:ModifyTargetGroupAttributes',
    'elasticloadbalancing:RegisterTargets',
    'elasticloadbalancing:RemoveListenerCertificates',
    'elasticloadbalancing:RemoveTags',
    'elasticloadbalancing:SetIpAddressType',
    'elasticloadbalancing:SetSecurityGroups',
    'elasticloadbalancing:SetSubnets',
    'elasticloadbalancing:SetWebAcl',
    'iam:CreateServiceLinkedRole',
    'iam:GetServerCertificate',
    'iam:ListServerCertificates',
    'cognito-idp:DescribeUserPoolClient',
    'waf-regional:GetWebACLForResource',
    'waf-regional:GetWebACL',
    'waf-regional:AssociateWebACL',
    'waf-regional:DisassociateWebACL',
    'tag:GetResources',
    'tag:TagResources',
    'waf:GetWebACL',
    'wafv2:GetWebACL',
    'wafv2:GetWebACLForResource',
    'wafv2:AssociateWebACL',
    'wafv2:DisassociateWebACL',
    'shield:DescribeProtection',
    'shield:GetSubscriptionState',
    'shield:DeleteProtection',
    'shield:CreateProtection',
    'shield:DescribeSubscription',
  ],
  resources: ['*'],
};


const awsLoadBalancerControllerPolicyV2 = [
  {
    Effect: 'Allow',
    Action: [
      'iam:CreateServiceLinkedRole',
      'ec2:DescribeAccountAttributes',
      'ec2:DescribeAddresses',
      'ec2:DescribeInternetGateways',
      'ec2:DescribeVpcs',
      'ec2:DescribeSubnets',
      'ec2:DescribeSecurityGroups',
      'ec2:DescribeInstances',
      'ec2:DescribeNetworkInterfaces',
      'ec2:DescribeTags',
      'elasticloadbalancing:DescribeLoadBalancers',
      'elasticloadbalancing:DescribeLoadBalancerAttributes',
      'elasticloadbalancing:DescribeListeners',
      'elasticloadbalancing:DescribeListenerCertificates',
      'elasticloadbalancing:DescribeSSLPolicies',
      'elasticloadbalancing:DescribeRules',
      'elasticloadbalancing:DescribeTargetGroups',
      'elasticloadbalancing:DescribeTargetGroupAttributes',
      'elasticloadbalancing:DescribeTargetHealth',
      'elasticloadbalancing:DescribeTags',
    ],
    Resource: '*',
  },
  {
    Effect: 'Allow',
    Action: [
      'cognito-idp:DescribeUserPoolClient',
      'acm:ListCertificates',
      'acm:DescribeCertificate',
      'iam:ListServerCertificates',
      'iam:GetServerCertificate',
      'waf-regional:GetWebACL',
      'waf-regional:GetWebACLForResource',
      'waf-regional:AssociateWebACL',
      'waf-regional:DisassociateWebACL',
      'wafv2:GetWebACL',
      'wafv2:GetWebACLForResource',
      'wafv2:AssociateWebACL',
      'wafv2:DisassociateWebACL',
      'shield:GetSubscriptionState',
      'shield:DescribeProtection',
      'shield:CreateProtection',
      'shield:DeleteProtection',
    ],
    Resource: '*',
  },
  {
    Effect: 'Allow',
    Action: [
      'ec2:AuthorizeSecurityGroupIngress',
      'ec2:RevokeSecurityGroupIngress',
    ],
    Resource: '*',
  },
  {
    Effect: 'Allow',
    Action: [
      'ec2:CreateSecurityGroup',
    ],
    Resource: '*',
  },
  {
    Effect: 'Allow',
    Action: [
      'ec2:CreateTags',
    ],
    Resource: 'arn:aws:ec2:*:*:security-group/*',
    Condition: {
      StringEquals: {
        'ec2:CreateAction': 'CreateSecurityGroup',
      },
      Null: {
        'aws:RequestTag/elbv2.k8s.aws/cluster': 'false',
      },
    },
  },
  {
    Effect: 'Allow',
    Action: [
      'ec2:CreateTags',
      'ec2:DeleteTags',
    ],
    Resource: 'arn:aws:ec2:*:*:security-group/*',
    Condition: {
      Null: {
        'aws:RequestTag/elbv2.k8s.aws/cluster': 'true',
        'aws:ResourceTag/elbv2.k8s.aws/cluster': 'false',
      },
    },
  },
  {
    Effect: 'Allow',
    Action: [
      'ec2:AuthorizeSecurityGroupIngress',
      'ec2:RevokeSecurityGroupIngress',
      'ec2:DeleteSecurityGroup',
    ],
    Resource: '*',
    Condition: {
      Null: {
        'aws:ResourceTag/elbv2.k8s.aws/cluster': 'false',
      },
    },
  },
  {
    Effect: 'Allow',
    Action: [
      'elasticloadbalancing:CreateLoadBalancer',
      'elasticloadbalancing:CreateTargetGroup',
    ],
    Resource: '*',
    Condition: {
      Null: {
        'aws:RequestTag/elbv2.k8s.aws/cluster': 'false',
      },
    },
  },
  {
    Effect: 'Allow',
    Action: [
      'elasticloadbalancing:CreateListener',
      'elasticloadbalancing:DeleteListener',
      'elasticloadbalancing:CreateRule',
      'elasticloadbalancing:DeleteRule',
    ],
    Resource: '*',
  },
  {
    Effect: 'Allow',
    Action: [
      'elasticloadbalancing:AddTags',
      'elasticloadbalancing:RemoveTags',
    ],
    Resource: [
      'arn:aws:elasticloadbalancing:*:*:targetgroup/*/*',
      'arn:aws:elasticloadbalancing:*:*:loadbalancer/net/*/*',
      'arn:aws:elasticloadbalancing:*:*:loadbalancer/app/*/*',
    ],
    Condition: {
      Null: {
        'aws:RequestTag/elbv2.k8s.aws/cluster': 'true',
        'aws:ResourceTag/elbv2.k8s.aws/cluster': 'false',
      },
    },
  },
  {
    Effect: 'Allow',
    Action: [
      'elasticloadbalancing:ModifyLoadBalancerAttributes',
      'elasticloadbalancing:SetIpAddressType',
      'elasticloadbalancing:SetSecurityGroups',
      'elasticloadbalancing:SetSubnets',
      'elasticloadbalancing:DeleteLoadBalancer',
      'elasticloadbalancing:ModifyTargetGroup',
      'elasticloadbalancing:ModifyTargetGroupAttributes',
      'elasticloadbalancing:DeleteTargetGroup',
    ],
    Resource: '*',
    Condition: {
      Null: {
        'aws:ResourceTag/elbv2.k8s.aws/cluster': 'false',
      },
    },
  },
  {
    Effect: 'Allow',
    Action: [
      'elasticloadbalancing:RegisterTargets',
      'elasticloadbalancing:DeregisterTargets',
    ],
    Resource: 'arn:aws:elasticloadbalancing:*:*:targetgroup/*/*',
  },
  {
    Effect: 'Allow',
    Action: [
      'elasticloadbalancing:SetWebAcl',
      'elasticloadbalancing:ModifyListener',
      'elasticloadbalancing:AddListenerCertificates',
      'elasticloadbalancing:RemoveListenerCertificates',
      'elasticloadbalancing:ModifyRule',
    ],
    Resource: '*',
  },
];

/**
 * awsLoadBalancePolicy class ,help you add policy to your Iam Role for service account.
 */
export class AwsLoadBalancePolicy {
  public static addPolicy(version: string, role: any) :any {
    if (version == 'v1') {
      role.addToPolicy(new iam.PolicyStatement( awsLoadBalancerControllerPolicyV1 ));
      return role;
    } if (version == 'v2') {
      awsLoadBalancerControllerPolicyV2.forEach(element => {
        role.addToPolicy(iam.PolicyStatement.fromJson(element));
      });
      return role;
    }
  }
};