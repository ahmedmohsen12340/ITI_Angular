import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from '../Services/users.service';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { User } from '../models/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update',
  standalone: true,
  imports: [HttpClientModule, ReactiveFormsModule],
  providers: [UsersService],
  templateUrl: './update.component.html',
  styleUrl: './update.component.css'
})
export class UpdateComponent implements OnInit {
  data: User = { name: '', age: '', email: '' };
  id: number = 1;
  updateUser = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    age: new FormControl('', [Validators.required, Validators.min(15), Validators.max(100)]),
    email: new FormControl('', [Validators.required, Validators.pattern(/.+@.+\..+/)])
  });
  constructor(myroute: ActivatedRoute, public http: UsersService, private router: Router) {
    //console.log(myroute.snapshot.params['id'])
    this.id = myroute.snapshot.params['id'];
  }
  ngOnInit(): void {
    this.http.getUserData(`${this.id}`).subscribe({
      next: value => {
        // console.log(value);
        this.data = value;
      },
      error: error => console.log(error)
    })

  }
  // this.updateUser.updateUserUser()
  get inValidName() {
    return (!this.updateUser.controls.name.valid && this.updateUser.controls.name.touched && this.updateUser.controls.name.dirty)
  }
  get inValidAge() {
    return (!this.updateUser.controls.age.valid && this.updateUser.controls.age.touched && this.updateUser.controls.age.dirty)
  }
  get inValidEmail() {
    return (!this.updateUser.controls.email.valid && this.updateUser.controls.email.touched && this.updateUser.controls.email.dirty)
  }
  onSubmit() {
    this.data = { id: this.id, name: this.updateUser.value.name!, age: this.updateUser.value.age!, email: this.updateUser.value.email! }
    //console.log(this.data);
    this.http.updateUser(this.data).subscribe();
    this.router.navigateByUrl('');
  }

}
