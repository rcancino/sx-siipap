export interface Authenticate {
  username: string;
  password: string;
  returnUrl?: string;
}

export class User {

  constructor(
    public userName: string,
    public roles: Array<string>
  ) {}

  hasRole(role: string): boolean {
    return this.roles.find( r => r === role) !== null;
  }
}
