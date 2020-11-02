# API Reference

**Classes**

Name|Description
----|-----------
[AlbIngressController](#cdk8s-aws-alb-ingress-controller-albingresscontroller)|Generate alb-ingress-controller config yaml.
[AwsLoadBalancePolicy](#cdk8s-aws-alb-ingress-controller-awsloadbalancepolicy)|awsLoadBalancePolicy class ,help you add policy to your Iam Role for service account.
[AwsLoadBalancerController](#cdk8s-aws-alb-ingress-controller-awsloadbalancercontroller)|Generate aws-load-balancer-controller config yaml.
[CertManager](#cdk8s-aws-alb-ingress-controller-certmanager)|*No description*


**Structs**

Name|Description
----|-----------
[AlbIngressControllerOptions](#cdk8s-aws-alb-ingress-controller-albingresscontrolleroptions)|*No description*
[AwsLoadBalancerControllerOptions](#cdk8s-aws-alb-ingress-controller-awsloadbalancercontrolleroptions)|*No description*
[EnvVar](#cdk8s-aws-alb-ingress-controller-envvar)|*No description*


**Enums**

Name|Description
----|-----------
[VersionsLists](#cdk8s-aws-alb-ingress-controller-versionslists)|*No description*



## class AlbIngressController  <a id="cdk8s-aws-alb-ingress-controller-albingresscontroller"></a>

Generate alb-ingress-controller config yaml.

see https://github.com/kubernetes-sigs/aws-alb-ingress-controller/blob/master/docs/examples

__Implements__: [IConstruct](#constructs-iconstruct)
__Extends__: [Construct](#constructs-construct)

### Initializer




```ts
new AlbIngressController(scope: Construct, id: string, options: AlbIngressControllerOptions)
```

* **scope** (<code>[Construct](#constructs-construct)</code>)  *No description*
* **id** (<code>string</code>)  *No description*
* **options** (<code>[AlbIngressControllerOptions](#cdk8s-aws-alb-ingress-controller-albingresscontrolleroptions)</code>)  *No description*
  * **clusterName** (<code>string</code>)  Kubernetes Cluster Name for alb-ingress-controller. 
  * **args** (<code>Array<string></code>)  Another Args for alb-ingress-controller. __*Default*__: None
  * **env** (<code>Array<[EnvVar](#cdk8s-aws-alb-ingress-controller-envvar)></code>)  Another Args for alb-ingress-controller. __*Default*__: None
  * **image** (<code>string</code>)  Default image for alb-ingress-controller. __*Default*__: docker.io/amazon/aws-alb-ingress-controller:v1.1.9
  * **labels** (<code>Map<string, string></code>)  Extra labels to associate with resources. __*Default*__: none
  * **namespace** (<code>string</code>)  Default Namespace for alb-ingress-controller. __*Default*__: kube-system
  * **replicas** (<code>number</code>)  Replicas for alb-ingress-controller. __*Default*__: 1
  * **serviceAccountName** (<code>string</code>)  Default Service Account Name for alb-ingress-controller. __*Default*__: alb-ingress-controller



### Properties


Name | Type | Description 
-----|------|-------------
**clusterName** | <code>string</code> | Kubernetes Cluster Name for alb-ingress-controller.
**deploymentName** | <code>string</code> | Kubernetes Deployment Name for alb-ingress-controller.
**namespace** | <code>string</code> | Namespace for alb-ingress-controller.
**serviceAccountName** | <code>string</code> | Service Account Name for alb-ingress-controller.



## class AwsLoadBalancePolicy  <a id="cdk8s-aws-alb-ingress-controller-awsloadbalancepolicy"></a>

awsLoadBalancePolicy class ,help you add policy to your Iam Role for service account.


### Initializer




```ts
new AwsLoadBalancePolicy()
```



### Methods


#### *static* addPolicy(version, role) <a id="cdk8s-aws-alb-ingress-controller-awsloadbalancepolicy-addpolicy"></a>



```ts
static addPolicy(version: string, role: any): any
```

* **version** (<code>string</code>)  *No description*
* **role** (<code>any</code>)  *No description*

__Returns__:
* <code>any</code>



## class AwsLoadBalancerController  <a id="cdk8s-aws-alb-ingress-controller-awsloadbalancercontroller"></a>

Generate aws-load-balancer-controller config yaml.

see https://github.com/kubernetes-sigs/aws-aws-load-balancer-controller/blob/master/docs/install/v2_0_0_full.yaml

__Implements__: [IConstruct](#constructs-iconstruct)
__Extends__: [Construct](#constructs-construct)

### Initializer




```ts
new AwsLoadBalancerController(scope: Construct, id: string, options: AwsLoadBalancerControllerOptions)
```

* **scope** (<code>[Construct](#constructs-construct)</code>)  *No description*
* **id** (<code>string</code>)  *No description*
* **options** (<code>[AwsLoadBalancerControllerOptions](#cdk8s-aws-alb-ingress-controller-awsloadbalancercontrolleroptions)</code>)  *No description*
  * **clusterName** (<code>string</code>)  Kubernetes Cluster Name for aws-load-balancer-controller. 
  * **args** (<code>Array<string></code>)  Another Args for aws-load-balancer-controller. __*Default*__: None
  * **env** (<code>Array<[EnvVar](#cdk8s-aws-alb-ingress-controller-envvar)></code>)  Another Args for aws-load-balancer-controller. __*Default*__: None
  * **image** (<code>string</code>)  Default image for aws-load-balancer-controller. __*Default*__: docker.io/amazon/aws-aws-load-balancer-controller:v1.1.9
  * **labels** (<code>Map<string, string></code>)  Extra labels to associate with resources. __*Default*__: none
  * **namespace** (<code>string</code>)  Default Namespace for aws-load-balancer-controller. __*Default*__: kube-system
  * **replicas** (<code>number</code>)  Replicas for aws-load-balancer-controller. __*Default*__: 1
  * **serviceAccountName** (<code>string</code>)  Default Service Account Name for aws-load-balancer-controller. __*Default*__: aws-load-balancer-controller



### Properties


Name | Type | Description 
-----|------|-------------
**clusterName** | <code>string</code> | Kubernetes Cluster Name for aws-load-balancer-controller.
**deploymentName** | <code>string</code> | Kubernetes Deployment Name for aws-load-balancer-controller.
**namespace** | <code>string</code> | Namespace for aws-load-balancer-controller.
**serviceAccountName** | <code>string</code> | Service Account Name for aws-load-balancer-controller.



## class CertManager  <a id="cdk8s-aws-alb-ingress-controller-certmanager"></a>




### Initializer




```ts
new CertManager()
```



### Methods


#### *static* certManagerConfig() <a id="cdk8s-aws-alb-ingress-controller-certmanager-certmanagerconfig"></a>



```ts
static certManagerConfig(): any
```


__Returns__:
* <code>any</code>



## struct AlbIngressControllerOptions  <a id="cdk8s-aws-alb-ingress-controller-albingresscontrolleroptions"></a>






Name | Type | Description 
-----|------|-------------
**clusterName** | <code>string</code> | Kubernetes Cluster Name for alb-ingress-controller.
**args**? | <code>Array<string></code> | Another Args for alb-ingress-controller.<br/>__*Default*__: None
**env**? | <code>Array<[EnvVar](#cdk8s-aws-alb-ingress-controller-envvar)></code> | Another Args for alb-ingress-controller.<br/>__*Default*__: None
**image**? | <code>string</code> | Default image for alb-ingress-controller.<br/>__*Default*__: docker.io/amazon/aws-alb-ingress-controller:v1.1.9
**labels**? | <code>Map<string, string></code> | Extra labels to associate with resources.<br/>__*Default*__: none
**namespace**? | <code>string</code> | Default Namespace for alb-ingress-controller.<br/>__*Default*__: kube-system
**replicas**? | <code>number</code> | Replicas for alb-ingress-controller.<br/>__*Default*__: 1
**serviceAccountName**? | <code>string</code> | Default Service Account Name for alb-ingress-controller.<br/>__*Default*__: alb-ingress-controller



## struct AwsLoadBalancerControllerOptions  <a id="cdk8s-aws-alb-ingress-controller-awsloadbalancercontrolleroptions"></a>






Name | Type | Description 
-----|------|-------------
**clusterName** | <code>string</code> | Kubernetes Cluster Name for aws-load-balancer-controller.
**args**? | <code>Array<string></code> | Another Args for aws-load-balancer-controller.<br/>__*Default*__: None
**env**? | <code>Array<[EnvVar](#cdk8s-aws-alb-ingress-controller-envvar)></code> | Another Args for aws-load-balancer-controller.<br/>__*Default*__: None
**image**? | <code>string</code> | Default image for aws-load-balancer-controller.<br/>__*Default*__: docker.io/amazon/aws-aws-load-balancer-controller:v1.1.9
**labels**? | <code>Map<string, string></code> | Extra labels to associate with resources.<br/>__*Default*__: none
**namespace**? | <code>string</code> | Default Namespace for aws-load-balancer-controller.<br/>__*Default*__: kube-system
**replicas**? | <code>number</code> | Replicas for aws-load-balancer-controller.<br/>__*Default*__: 1
**serviceAccountName**? | <code>string</code> | Default Service Account Name for aws-load-balancer-controller.<br/>__*Default*__: aws-load-balancer-controller



## struct EnvVar  <a id="cdk8s-aws-alb-ingress-controller-envvar"></a>






Name | Type | Description 
-----|------|-------------
**name** | <code>string</code> | Name of the environment variable.
**value**? | <code>string</code> | Variable references $(VAR_NAME) are expanded using the previous defined environment variables in the container and any service environment variables.<br/>__*Default*__: .



## enum VersionsLists  <a id="cdk8s-aws-alb-ingress-controller-versionslists"></a>



Name | Description
-----|-----
**AWS_LOAD_BALANCER_CONTROLLER_POLICY_V1** |
**AWS_LOAD_BALANCER_CONTROLLER_POLICY_V2** |


