import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from '../Services/users.service';
import { User } from '../models/user';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [HttpClientModule],
  providers: [UsersService],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent implements OnInit {
  id: string = '';
  data: User = { name: '', age: '', email: '' }
  constructor(myActive: ActivatedRoute, public details: UsersService) {
    this.id = myActive.snapshot.params['id'];
  }
  ngOnInit(): void {
    this.details.getUserData(this.id).subscribe({
      next: value => {
        // console.log(value);
        this.data = value;
      },
      error: error => console.log(error)
    })
  }

}
