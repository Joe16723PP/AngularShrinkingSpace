import { Component } from '@angular/core';
import {MatSelectChange} from "@angular/material/select";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularShrinkingSpace';
  userInput = 0;
  optionList: string[] = ["isPrime", "isFibonacci"];
  selectedOpt = "isPrime"
  condition = false;

  onChangeInput(user: HTMLInputElement) {
    let userInt = parseFloat(user.value)
    if (userInt <= 0) {
      userInt = 0
    }
    this.userInput = Math.round(userInt)
    if (this.selectedOpt === this.optionList[0]) {
      this.condition = this.checkIsPrimeNumber(userInt)
    } else {
      this.condition = this.checkIsFibonacci(userInt)
    }
  }

  onSelection(e: MatSelectChange) {
    this.selectedOpt = e.value
  }

  checkIsPrimeNumber(n: number) {
    let isPrime = true;
    if (n > 1) {
      // check is prime or not, range 2 to num -1
      for (let i = 2; i < n; i++) {
        if (n % i == 0) {
          isPrime = false;
          break;
        }
      }
    } else {
      isPrime = false
    }
    return isPrime
  }

  checkIsFibonacci(n: number) {
    return this.isPerfectSquare(5 * n * n + 4) ||
      this.isPerfectSquare(5 * n * n - 4);
  }

  isPerfectSquare(x: number) {
    let s = Math.sqrt(x)
    return (s * s == x);
  }
}
