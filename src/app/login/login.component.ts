import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formdata : FormGroup;
uname;
password;
  constructor(private serv:LoginService) { }

   ngOnInit() {
      this.formdata = new FormGroup({
         username: new FormControl("angular@gmail.com"),
         pass: new FormControl("abcd1234")
      });
   }

   onClicklogin(data : FormGroup)
   {
   this.uname=data.value.username;
   this.password=data.value.pass;
   console.log(this.uname+" "+this.password);
   console.log(this.serv.getAnimals("cat","texas"));

   }

   clear()
   {
    this.formdata = new FormGroup({
      username: new FormControl(""),
      pass: new FormControl("")
   });
   }

  }


