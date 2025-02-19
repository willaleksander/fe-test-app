import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AbstractControl, EmailValidator, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';

import { GlobalConstrants } from '../common/global-constrants';

import { User } from '../model/User';
import { UserService } from '../services/user.service';
import { DialogUserCreated } from '../dialog-user-created/dialog-user-created.component';
import { MatDialog } from '@angular/material';

import { UsernameValidator } from '../common/username.validator';

/**
 * create user page, form to be fulfilled and create user
 */
@Component({
  selector: 'exads-users-create',
  templateUrl: './users-create.component.html',
  styleUrls: ['./users-create.component.scss']
})
export class UsersCreateComponent implements OnInit {

  gc = GlobalConstrants;

  user = new User();

  // control loader 
  spinner = false;

  constructor(
    private userService: UserService,
    private router: Router,
    private dialog: MatDialog
    ) { }

  ngOnInit() {
  
  }

  // form to create user
  registerForm = new FormGroup({
    username: new FormControl(
        '', 
      [ Validators.required,
        Validators.minLength(3), 
        Validators.maxLength(20), 
        Validators.pattern(/^[^\{\}\"\[\]\.\!]*$/) ],
      [ UsernameValidator.createValidator(this.userService)]
        ),
    firstname: new FormControl('', [Validators.required]),
    lastname: new FormControl(''),
    email: new FormControl('', [Validators.required, Validators.email]),
  });

  // submit to create user
  onSubmit(): void {
    //show loader
    this.spinner = true;

    this.user.id_status = 1;

    this.userService.createUser(this.user).subscribe( {
      next: data => {
        this.spinner = false;

        const dialogRef = this.dialog.open(DialogUserCreated, {
          width: '250px',
          data: {name: data.data.user.username},
        });
    
        dialogRef.afterClosed().subscribe(result => {
          this.router.navigate([this.gc.users_endpoint]);
        });
      },
      error: error => {
        this.spinner = false;
        console.log(error.message);
      }
    });
  }

  /**
   * go back to users page
   */
  onCancelUserClick() {
    this.router.navigate([this.gc.users_endpoint]);
  }
}
