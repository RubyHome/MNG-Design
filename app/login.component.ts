import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import {USER_DATA, USER } from './json/user';

@Component({
  selector: 'login',
  templateUrl: './dist/view/login.component.html',
})

export class LoginComponent {
    public user_data:any = USER_DATA;
    username: string;
    password:string;

	constructor(private router:Router){
	}

	onLogin(){
        if(this.username=="admin" && this.password=="admin"){
            this.user_data.firstname = this.username;

    	    this.router.navigate(['/home']);
        }
	}
}
