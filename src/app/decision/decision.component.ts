import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-decision',
  imports: [CommonModule, FormsModule],
  templateUrl: './decision.component.html',
  styleUrl: './decision.component.css'
})
export class DecisionComponent {
  options: string[] = [];
  result: string = '';
  item: string = ``
  resultList: string[] = []

  addOption() {
    this.options.push(this.item);
    this.item = ``
  };

  randomize() {
    const resultIndex = Math.floor(Math.random() * this.options.length);
    this.result = this.options[resultIndex]
  }

  deleteItem(){
    const itemIndex = this.options.indexOf(this.item);
    this.options.splice(itemIndex, 1);
    const resultIndex = this.resultList.indexOf(this.result);
    this.resultList.splice(resultIndex, 1);
  }

  trackResult () {
    this.resultList.push(this.result)
  }

}
