import { Component, Injectable, OnInit } from '@angular/core';
import { UsersService } from '../Services/users.service';
import { HttpClientModule } from '@angular/common/http';
import { User } from '../models/user';
import { RouterLink } from '@angular/router';
import { UserComponent } from './user/user.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HttpClientModule, RouterLink, UserComponent],
  providers: [UsersService],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  users: User[] = [];
  constructor(public myservice: UsersService) { }
  ngOnInit(): void {
    this.myservice.getUsers().subscribe({
      next: (value) => {
        //console.log(value)
        this.users = value;
      },
      error: (err) => { console.log(err) }
    })
  }
  onDelete(id: number) {
    console.log(id)
    this.myservice.deleteUsers(id).subscribe();
    this.myservice.getUsers().subscribe({
      next: (value) => {
        //console.log(value)
        this.users = value;
      },
      error: (err) => { console.log(err) }
    });
  }
}
