export interface EnvVar {
  /**
   * Name of the environment variable. Must be a C_IDENTIFIER.
   *
   * @schema io.k8s.api.core.v1.EnvVar#name
   */
  readonly name: string;

  /**
   * Variable references $(VAR_NAME) are expanded using the previous defined environment variables in the container and any service environment variables. If a variable cannot be resolved, the reference in the input string will be unchanged. The $(VAR_NAME) syntax can be escaped with a double $$, ie: $$(VAR_NAME). Escaped references will never be expanded, regardless of whether the variable exists or not. Defaults to "".
   *
   * @default .
   * @schema io.k8s.api.core.v1.EnvVar#value
   */
  readonly value?: string;
}