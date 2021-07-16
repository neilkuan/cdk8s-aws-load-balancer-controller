# API Reference <a name="API Reference"></a>

## Constructs <a name="Constructs"></a>

### AlbIngressController <a name="cdk8s-aws-load-balancer-controller.AlbIngressController"></a>

Generate alb-ingress-controller config yaml.

see https://github.com/kubernetes-sigs/aws-alb-ingress-controller/blob/master/docs/examples

#### Initializer <a name="cdk8s-aws-load-balancer-controller.AlbIngressController.Initializer"></a>

```typescript
import { AlbIngressController } from 'cdk8s-aws-load-balancer-controller'

new AlbIngressController(scope: Construct, id: string, options: AlbIngressControllerOptions)
```

##### `scope`<sup>Required</sup> <a name="cdk8s-aws-load-balancer-controller.AlbIngressController.parameter.scope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

---

##### `id`<sup>Required</sup> <a name="cdk8s-aws-load-balancer-controller.AlbIngressController.parameter.id"></a>

- *Type:* `string`

---

##### `options`<sup>Required</sup> <a name="cdk8s-aws-load-balancer-controller.AlbIngressController.parameter.options"></a>

- *Type:* [`cdk8s-aws-load-balancer-controller.AlbIngressControllerOptions`](#cdk8s-aws-load-balancer-controller.AlbIngressControllerOptions)

---



#### Properties <a name="Properties"></a>

##### `clusterName`<sup>Required</sup> <a name="cdk8s-aws-load-balancer-controller.AlbIngressController.property.clusterName"></a>

- *Type:* `string`

Kubernetes Cluster Name for alb-ingress-controller.

---

##### `deploymentName`<sup>Required</sup> <a name="cdk8s-aws-load-balancer-controller.AlbIngressController.property.deploymentName"></a>

- *Type:* `string`

Kubernetes Deployment Name for alb-ingress-controller.

---

##### `namespace`<sup>Required</sup> <a name="cdk8s-aws-load-balancer-controller.AlbIngressController.property.namespace"></a>

- *Type:* `string`
- *Default:* kube-system

Namespace for alb-ingress-controller.

---

##### `serviceAccountName`<sup>Required</sup> <a name="cdk8s-aws-load-balancer-controller.AlbIngressController.property.serviceAccountName"></a>

- *Type:* `string`

Service Account Name for alb-ingress-controller.

---


### AwsLoadBalancerController <a name="cdk8s-aws-load-balancer-controller.AwsLoadBalancerController"></a>

Generate aws-load-balancer-controller config yaml.

see https://github.com/kubernetes-sigs/aws-aws-load-balancer-controller/blob/master/docs/install/v2_0_0_full.yaml

#### Initializer <a name="cdk8s-aws-load-balancer-controller.AwsLoadBalancerController.Initializer"></a>

```typescript
import { AwsLoadBalancerController } from 'cdk8s-aws-load-balancer-controller'

new AwsLoadBalancerController(scope: Construct, id: string, options: AwsLoadBalancerControllerOptions)
```

##### `scope`<sup>Required</sup> <a name="cdk8s-aws-load-balancer-controller.AwsLoadBalancerController.parameter.scope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

---

##### `id`<sup>Required</sup> <a name="cdk8s-aws-load-balancer-controller.AwsLoadBalancerController.parameter.id"></a>

- *Type:* `string`

---

##### `options`<sup>Required</sup> <a name="cdk8s-aws-load-balancer-controller.AwsLoadBalancerController.parameter.options"></a>

- *Type:* [`cdk8s-aws-load-balancer-controller.AwsLoadBalancerControllerOptions`](#cdk8s-aws-load-balancer-controller.AwsLoadBalancerControllerOptions)

---



#### Properties <a name="Properties"></a>

##### `chartVersion`<sup>Required</sup> <a name="cdk8s-aws-load-balancer-controller.AwsLoadBalancerController.property.chartVersion"></a>

- *Type:* `string`
- *Default:* latest Helm Chart version.

Helm Chart Version for aws-load-balancer-controller.

---

##### `clusterName`<sup>Required</sup> <a name="cdk8s-aws-load-balancer-controller.AwsLoadBalancerController.property.clusterName"></a>

- *Type:* `string`

Kubernetes Cluster Name for aws-load-balancer-controller.

---

##### `deploymentName`<sup>Required</sup> <a name="cdk8s-aws-load-balancer-controller.AwsLoadBalancerController.property.deploymentName"></a>

- *Type:* `string`

Kubernetes Deployment Name for aws-load-balancer-controller.

---

##### `namespace`<sup>Required</sup> <a name="cdk8s-aws-load-balancer-controller.AwsLoadBalancerController.property.namespace"></a>

- *Type:* `string`
- *Default:* default

Namespace for aws-load-balancer-controller.

---

##### `serviceAccountName`<sup>Required</sup> <a name="cdk8s-aws-load-balancer-controller.AwsLoadBalancerController.property.serviceAccountName"></a>

- *Type:* `string`

Service Account Name for aws-load-balancer-controller.

---


## Structs <a name="Structs"></a>

### AlbIngressControllerOptions <a name="cdk8s-aws-load-balancer-controller.AlbIngressControllerOptions"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { AlbIngressControllerOptions } from 'cdk8s-aws-load-balancer-controller'

const albIngressControllerOptions: AlbIngressControllerOptions = { ... }
```

##### `clusterName`<sup>Required</sup> <a name="cdk8s-aws-load-balancer-controller.AlbIngressControllerOptions.property.clusterName"></a>

- *Type:* `string`
- *Default:* None

Kubernetes Cluster Name for alb-ingress-controller.

---

##### `args`<sup>Optional</sup> <a name="cdk8s-aws-load-balancer-controller.AlbIngressControllerOptions.property.args"></a>

- *Type:* `string`[]
- *Default:* None

Another Args for alb-ingress-controller.

---

##### `env`<sup>Optional</sup> <a name="cdk8s-aws-load-balancer-controller.AlbIngressControllerOptions.property.env"></a>

- *Type:* [`cdk8s-aws-load-balancer-controller.EnvVar`](#cdk8s-aws-load-balancer-controller.EnvVar)[]
- *Default:* None

Another Args for alb-ingress-controller.

---

##### `image`<sup>Optional</sup> <a name="cdk8s-aws-load-balancer-controller.AlbIngressControllerOptions.property.image"></a>

- *Type:* `string`
- *Default:* docker.io/amazon/aws-alb-ingress-controller:v1.1.9

Default image for alb-ingress-controller.

---

##### `labels`<sup>Optional</sup> <a name="cdk8s-aws-load-balancer-controller.AlbIngressControllerOptions.property.labels"></a>

- *Type:* {[ key: string ]: `string`}
- *Default:* none

Extra labels to associate with resources.

---

##### `namespace`<sup>Optional</sup> <a name="cdk8s-aws-load-balancer-controller.AlbIngressControllerOptions.property.namespace"></a>

- *Type:* `string`
- *Default:* kube-system

Default Namespace for alb-ingress-controller.

---

##### `replicas`<sup>Optional</sup> <a name="cdk8s-aws-load-balancer-controller.AlbIngressControllerOptions.property.replicas"></a>

- *Type:* `number`
- *Default:* 1

Replicas for alb-ingress-controller.

---

##### `serviceAccountName`<sup>Optional</sup> <a name="cdk8s-aws-load-balancer-controller.AlbIngressControllerOptions.property.serviceAccountName"></a>

- *Type:* `string`
- *Default:* alb-ingress-controller

Default Service Account Name for alb-ingress-controller.

---

### AwsLoadBalancerControllerOptions <a name="cdk8s-aws-load-balancer-controller.AwsLoadBalancerControllerOptions"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { AwsLoadBalancerControllerOptions } from 'cdk8s-aws-load-balancer-controller'

const awsLoadBalancerControllerOptions: AwsLoadBalancerControllerOptions = { ... }
```

##### `clusterName`<sup>Required</sup> <a name="cdk8s-aws-load-balancer-controller.AwsLoadBalancerControllerOptions.property.clusterName"></a>

- *Type:* `string`
- *Default:* None

Kubernetes Cluster Name for aws-load-balancer-controller.

---

##### `chartVersion`<sup>Optional</sup> <a name="cdk8s-aws-load-balancer-controller.AwsLoadBalancerControllerOptions.property.chartVersion"></a>

- *Type:* `string`
- *Default:* latest Helm Chart version.

Helm Chart Version for aws-load-balancer-controller.

---

##### `createServiceAccount`<sup>Optional</sup> <a name="cdk8s-aws-load-balancer-controller.AwsLoadBalancerControllerOptions.property.createServiceAccount"></a>

- *Type:* `boolean`
- *Default:* true

service account for aws-load-balancer-controller.

---

##### `namespace`<sup>Optional</sup> <a name="cdk8s-aws-load-balancer-controller.AwsLoadBalancerControllerOptions.property.namespace"></a>

- *Type:* `string`
- *Default:* default

Namespace for aws-load-balancer-controller.

---

### EnvVar <a name="cdk8s-aws-load-balancer-controller.EnvVar"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { EnvVar } from 'cdk8s-aws-load-balancer-controller'

const envVar: EnvVar = { ... }
```

##### `name`<sup>Required</sup> <a name="cdk8s-aws-load-balancer-controller.EnvVar.property.name"></a>

- *Type:* `string`

Name of the environment variable.

Must be a C_IDENTIFIER.

---

##### `value`<sup>Optional</sup> <a name="cdk8s-aws-load-balancer-controller.EnvVar.property.value"></a>

- *Type:* `string`
- *Default:* .

Variable references $(VAR_NAME) are expanded using the previous defined environment variables in the container and any service environment variables.

If a variable cannot be resolved, the reference in the input string will be unchanged. The $(VAR_NAME) syntax can be escaped with a double $$, ie: $$(VAR_NAME). Escaped references will never be expanded, regardless of whether the variable exists or not. Defaults to "".

---

## Classes <a name="Classes"></a>

### AwsLoadBalancePolicy <a name="cdk8s-aws-load-balancer-controller.AwsLoadBalancePolicy"></a>

awsLoadBalancePolicy class ,help you add policy to your Iam Role for service account.

#### Initializer <a name="cdk8s-aws-load-balancer-controller.AwsLoadBalancePolicy.Initializer"></a>

```typescript
import { AwsLoadBalancePolicy } from 'cdk8s-aws-load-balancer-controller'

new AwsLoadBalancePolicy()
```


#### Static Functions <a name="Static Functions"></a>

##### `addPolicy` <a name="cdk8s-aws-load-balancer-controller.AwsLoadBalancePolicy.addPolicy"></a>

```typescript
import { AwsLoadBalancePolicy } from 'cdk8s-aws-load-balancer-controller'

AwsLoadBalancePolicy.addPolicy(version: string, role: any)
```

###### `version`<sup>Required</sup> <a name="cdk8s-aws-load-balancer-controller.AwsLoadBalancePolicy.parameter.version"></a>

- *Type:* `string`

---

###### `role`<sup>Required</sup> <a name="cdk8s-aws-load-balancer-controller.AwsLoadBalancePolicy.parameter.role"></a>

- *Type:* `any`

---



### CertManager <a name="cdk8s-aws-load-balancer-controller.CertManager"></a>

#### Initializer <a name="cdk8s-aws-load-balancer-controller.CertManager.Initializer"></a>

```typescript
import { CertManager } from 'cdk8s-aws-load-balancer-controller'

new CertManager()
```


#### Static Functions <a name="Static Functions"></a>

##### `certManagerConfig` <a name="cdk8s-aws-load-balancer-controller.CertManager.certManagerConfig"></a>

```typescript
import { CertManager } from 'cdk8s-aws-load-balancer-controller'

CertManager.certManagerConfig()
```




## Enums <a name="Enums"></a>

### VersionsLists <a name="VersionsLists"></a>

#### `AWS_LOAD_BALANCER_CONTROLLER_POLICY_V1` <a name="cdk8s-aws-load-balancer-controller.VersionsLists.AWS_LOAD_BALANCER_CONTROLLER_POLICY_V1"></a>

---


#### `AWS_LOAD_BALANCER_CONTROLLER_POLICY_V2` <a name="cdk8s-aws-load-balancer-controller.VersionsLists.AWS_LOAD_BALANCER_CONTROLLER_POLICY_V2"></a>

---

