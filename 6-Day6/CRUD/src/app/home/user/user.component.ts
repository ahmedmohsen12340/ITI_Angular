import { Component, Input } from '@angular/core';
import { User } from '../../models/user';
import { RouterLink } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { UsersService } from '../../Services/users.service';
import { Router } from '@angular/router';
import { OverDirective } from '../../Directives/over.directive';
import { MrPipe } from '../../Pipes/mr.pipe';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-user',
  standalone: true,
  imports: [RouterLink, HttpClientModule, OverDirective, MrPipe, CommonModule],
  providers: [UsersService],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  delFlag = true;
  @Input() data: User = { name: '', age: '', email: '' }
  constructor(private myservice: UsersService, private router: Router) { }
  onDelete(id: number) {
    console.log(id)
    this.myservice.deleteUsers(id).subscribe({
      complete: () => { }
    });
    // this.router.navigate(['create'], {
    //   replaceUrl: false
    // }).then(() => {
    //   this.router.navigate([''])
    // });
    this.delFlag = false;
  }

}
