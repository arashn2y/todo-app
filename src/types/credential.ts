export interface CredentialsType {
  email: string;
  password: string;
}

export enum LoginResult {
  BAD_CREDENTIALS,
  SUCCESS,
  NO_REGISTERED_PROFILE
}

/**
 * Class to handle the authentication
 */
export class CredentialService {
  private readonly CREDENTIALS_KEY = "login-data";

  /**
   * Attempt a login
   * @param credentials data for the login
   */
  async login(credentials: CredentialsType): Promise<LoginResult> {
    const registeredProfile = this.loadRegisteredCredentials();

    if(!registeredProfile) 
      return LoginResult.NO_REGISTERED_PROFILE;

    const clientHashedPassword = await this.digestMessage(credentials.password);
    if(registeredProfile.email === credentials.email && registeredProfile.password === clientHashedPassword) return LoginResult.SUCCESS;

    return LoginResult.BAD_CREDENTIALS;
  }

  logout() {

  }

  private loadRegisteredCredentials(): CredentialsType | undefined {
    const item = localStorage.getItem(this.CREDENTIALS_KEY);

    if(item) {
      return JSON.parse(item);
    }

    return undefined;
  }

  /**
   * Register the user that can use this application
   * @param credentials 
   */
  async register(credentials: CredentialsType) {
    let data = {...credentials};
    
    const res = await this.digestMessage(credentials.password);

    data.password = res;    // ANY PASSWORD MUST ALWAYS BE HASHED

    localStorage.setItem(this.CREDENTIALS_KEY, JSON.stringify(data));
  }

  /**
   * Generate sha256 has for the password
   * @param message 
   * @returns 
   */
  private async digestMessage(message: string): Promise<string> {
    const msgUint8 = new TextEncoder().encode(message); // encode as (utf-8) Uint8Array
    const hashBuffer = await window.crypto.subtle.digest("SHA-256", msgUint8); // hash the message
    const hashArray = Array.from(new Uint8Array(hashBuffer)); // convert buffer to byte array
    const hashHex = hashArray
      .map((b) => b.toString(16).padStart(2, "0"))
      .join(""); // convert bytes to hex string
    return hashHex;
  }
}