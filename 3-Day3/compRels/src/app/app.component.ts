import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { RegistratisionComponent } from './registratision/registratision.component';
import { StudentsComponent } from './students/students.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RegistratisionComponent, StudentsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  myObj: { Name: string, Age: string }[] = [];
  onAdd(val: any) {
    this.myObj.push(val);
    console.log(this.myObj)
  }
}
