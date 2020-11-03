import * as fs from 'fs';
import * as path from 'path';
import * as yaml from 'js-yaml';
export class CertManager {
  public static certManagerConfig(): any {
    let certManagerConfigManifest = yaml.safeLoadAll(fs.readFileSync(path.join(__dirname, '../cert/cert-manager.yaml')).toString());
    return certManagerConfigManifest;
  }
}