import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { UsersService } from '../Services/users.service';
import { User } from '../models/user';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [HttpClientModule, RouterLink],
  providers: [UsersService],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent implements OnInit {
  id: string = '';
  data: User = { name: '', age: '', email: '' }
  constructor(myActive: ActivatedRoute, public details: UsersService, private readonly router: Router) {
    this.id = myActive.snapshot.params['id'];
  }
  ngOnInit(): void {
    this.details.getUserData(this.id).subscribe({
      next: value => {
        //console.log(value);
        this.data = value;
      },
      error: error => console.log(error)
    })
  }
  gotouserupdate() {
    this.router.navigateByUrl('/update/' + this.id)
  }
}
