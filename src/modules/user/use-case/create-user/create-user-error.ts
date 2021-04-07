import UseCaseError from '../../../../common/ddd/use-case-error';

export namespace CreateUserError {
  export class EmailTakenError extends UseCaseError {
    constructor(email: string) {
      super(`The email ${email} is already taken`);
    }
  }

  export class InvalidPasswordError extends UseCaseError {
    constructor() {
      super('The provided password is not strong enough');
    }
  }
}
