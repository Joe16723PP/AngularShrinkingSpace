import { Component } from '@angular/core';
import {MatSelectChange} from "@angular/material/select";
import {checkIsFibonacci, checkIsPrimeNumber} from "./utils/helper";

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
      this.condition = checkIsPrimeNumber(userInt)
    } else {
      this.condition = checkIsFibonacci(userInt)
    }
  }

  onSelection(e: MatSelectChange) {
    this.selectedOpt = e.value
  }
}
