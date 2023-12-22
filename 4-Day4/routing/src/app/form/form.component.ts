import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class formComponent {
  myForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    age: new FormControl('', [Validators.min(20), Validators.max(30)]),
    email: new FormControl('', [Validators.pattern(/^.+@.+\..+$/)])
  })
  get invalidName() {
    return ((!this.myForm.controls.name.valid) && this.myForm.controls.name.touched)
  }
  get invalidAge() {
    return ((!this.myForm.controls.age.valid) && this.myForm.controls.age.touched)
  }
  get invalidEmail() {
    return ((!this.myForm.controls.email.valid) && this.myForm.controls.email.touched)
  }
  onSubmit() {
    console.log(this.myForm.value)
  }
}
