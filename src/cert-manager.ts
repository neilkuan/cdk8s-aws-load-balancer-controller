import * as fs from 'fs';
import * as yaml from 'js-yaml';
export class CertManager {
  public certManagerConfig(): any {
    let certManagerConfigManifest = yaml.safeLoadAll(fs.readFileSync('../cert/cert-manager.yaml').toString());
    return certManagerConfigManifest;
  }
}