import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AbstractControl, EmailValidator, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';

import { GlobalConstrants } from '../common/global-constrants';

import { User } from '../model/User';
import { UserService } from '../services/user.service';
import { DialogUserCreated } from '../dialog-user-created/dialog-user-created.component';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'exads-users-create',
  templateUrl: './users-create.component.html',
  styleUrls: ['./users-create.component.scss']
})
export class UsersCreateComponent implements OnInit {

  user = new User();

  spinner = false;

  constructor(
    private userService: UserService,
    private router: Router,
    private dialog: MatDialog
    ) { }

  ngOnInit() {
  
  }

  registerForm = new FormGroup({
    username: new FormControl('', 
      [Validators.required, Validators.minLength(3), 
        Validators.maxLength(20), Validators.pattern(/^[^\{\}\"\[\]\.\!]*$/)]),
    firstname: new FormControl('', [Validators.required]),
    lastname: new FormControl(''),
    email: new FormControl('', [Validators.required, Validators.email]),
  });

  onSubmit(): void {
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
          this.router.navigate([GlobalConstrants.users_endpoint]);
        });
      },
      error: error => {
        this.spinner = false;
        console.log(error.message);
      }
    });
  }

  onCancelUserClick() {
    this.router.navigate([GlobalConstrants.users_endpoint]);
  }

  userValidator(control: FormControl) { 
    let username = control.value;
    if (username && username.length >= 3 && username.length <= 20) {
      return this.userService.findByUsername(username).subscribe(data => {
        if (data.data.count > 0) {
           return {message: "User already exists"};
        } else {
           return null;
        }
      })}
    return null;
  }

}
