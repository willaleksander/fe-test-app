  import { AbstractControl, AsyncValidatorFn, ValidationErrors } from '@angular/forms';
  import { Observable } from 'rxjs';
  import { map } from 'rxjs/operators';
  import { UserService } from '../services/user.service';
  
  /*
  Async validator used to check remotely the existance of usernames
  */
  export class UsernameValidator {
    static createValidator(userService: UserService): AsyncValidatorFn {
      return (control: AbstractControl): Observable<ValidationErrors> => {
        return userService
          .findByUsername(control.value)
            .pipe(
                map((result: any) =>
                    result.data.count > 0 ? { usernameAlreadyExists: true } : null
                )
             );
      };
    }
  }