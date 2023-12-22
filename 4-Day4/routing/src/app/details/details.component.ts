import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent {
  id = 0;
  constructor(myActive: ActivatedRoute) {
    this.id = +myActive.snapshot.params['id'];
  }
}
