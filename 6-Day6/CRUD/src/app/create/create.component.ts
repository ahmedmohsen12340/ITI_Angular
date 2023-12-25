import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UsersService } from '../Services/users.service';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-create',
  standalone: true,
  imports: [ReactiveFormsModule, HttpClientModule, JsonPipe],
  providers: [UsersService],
  templateUrl: './create.component.html',
  styleUrl: './create.component.css'
})
export class CreateComponent {
  constructor(private users: UsersService) { }
  createForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    age: new FormControl('', [Validators.required, Validators.min(15), Validators.max(100)]),
    email: new FormControl('', [Validators.required, Validators.pattern(/.+@.+\..+/)])
  })
  get inValidName() {
    return (!this.createForm.controls.name.valid && this.createForm.controls.name.touched && this.createForm.controls.name.dirty)
  }
  get inValidAge() {
    return (!this.createForm.controls.age.valid && this.createForm.controls.age.touched && this.createForm.controls.age.dirty)
  }
  get inValidEmail() {
    return (!this.createForm.controls.email.valid && this.createForm.controls.email.touched && this.createForm.controls.email.dirty)
  }
  onSubmit() {
    // console.log(this.createForm.value)
    this.users.postUsers({ name: this.createForm.value.name!, age: this.createForm.value.age!, email: this.createForm.value.email! }).subscribe();
    // this.Name = '';
    // this.age = '';
    // this.email = '';
    //this.createForm.controls.age.setValue('')
    this.createForm.reset()
  }
}
