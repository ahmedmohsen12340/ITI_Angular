import { Component } from '@angular/core';

@Component({
  selector: 'app-comp2',
  standalone: true,
  imports: [],
  templateUrl: './comp2.component.html',
  styleUrl: './comp2.component.css'
})
export class Comp2Component {
  interval: any = 0;
  counter = 1;
  url = `/assets/Imgs/${this.counter}.jpg`
  onNext() {
    if (this.counter != 5) {
      this.counter++;
      this.url = `/assets/Imgs/${this.counter}.jpg`
    }
  }
  onPrev() {
    if (this.counter != 1) {
      this.counter--;
      this.url = `/assets/Imgs/${this.counter}.jpg`
    }
  }
  onSlide() {
    clearInterval(this.interval)
    this.interval = setInterval(() => {
      if (this.counter != 5) {
        this.counter++;
        this.url = `/assets/Imgs/${this.counter}.jpg`
      }
      else {
        this.counter = 1;
        this.url = `/assets/Imgs/${this.counter}.jpg`
      }
    }, 1000)
  }
  onStop() {
    clearInterval(this.interval)
  }
}
