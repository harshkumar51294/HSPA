import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {

  registerationForm :FormGroup;
  constructor(private fb: FormBuilder,) { }

  ngOnInit(): void {
    this.createRegisterationForm()
  }
  createRegisterationForm() {
    this.registerationForm =  this.fb.group({
        userName: [null, Validators.required],
        email: [null, [Validators.required, Validators.email]],
        password: [null, [Validators.required, Validators.minLength(8)]],
        confirmPassword: [null, Validators.required],
        mobile: [null, [Validators.required, Validators.maxLength(10)]]
    }, {validators: this.passwordMatchingValidator});
}

  passwordMatchingValidator(fg :FormGroup):Validators {

    return fg.get('password')?.value === fg.get('confirmPassword')?.value ? null as any :
     {
      notmatched :true
      } ;
    }
    // if (fg.get('password')?.value === fg.get('confirmPassword')){
    //   return null as any;
    // }

get userName(){
  return this.registerationForm.get('userName') as FormControl
}
get email()
{
  return this.registerationForm.get('email') as FormControl
}
get password(){
  return this.registerationForm.get('password') as FormControl
}
get confirmPassword(){
  return this.registerationForm.get('confirmPassword') as FormControl
}
get mobile(){
  return this.registerationForm.get('mobile') as FormControl
}
  onSubmit(){
console.log(this.registerationForm)
  }

}
