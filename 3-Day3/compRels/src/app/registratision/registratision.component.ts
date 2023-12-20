import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-registratision',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './registratision.component.html',
  styleUrl: './registratision.component.css'
})
export class RegistratisionComponent {
  @Output() myEvent = new EventEmitter();
  invalidName: boolean | null = false;
  invalidAge: boolean | null = false;
  onAdd(name: HTMLInputElement, age: HTMLInputElement) {
    this.invalidName = false;
    this.invalidAge = false;
    let myObj: { Name: string, Age: string } = { Name: '', Age: '' };
    myObj.Name = name.value;
    myObj.Age = age.value;
    if (myObj.Name.length < 3) {
      this.invalidName = true;
      name.value = ''
    }
    if (+myObj.Age < 20 || +myObj.Age > 30) {
      this.invalidAge = true;
      age.value = ''
    }
    if (this.invalidName === false && this.invalidAge === false) {
      this.myEvent.emit(myObj)
      name.value = '';
      age.value = '';
      this.invalidName = null;
      this.invalidAge = null;
    }
  }
}
