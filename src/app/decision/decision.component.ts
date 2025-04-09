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
    if (this.item.trim()) {
      this.options.push(this.item);
      this.item = ``
    }
  };

  randomize() {
    const resultIndex = Math.floor(Math.random() * this.options.length);
    this.result = this.options[resultIndex]

  };

  deleteItem() {
    const itemIndex = this.options.indexOf(this.item);
    this.options.splice(itemIndex, 1);
  };

  deleteResults() {
    const resultIndex = this.resultList.indexOf(this.result);
    this.resultList.splice(resultIndex, 1);
  };

  //Not sure how combine both delete functions since there isn't a key value I can use as an identifier, will think more on this or look this up later

  trackResult() {
    if (this.options.length > 0) {
      this.resultList.push(this.result)
    }
  };
}
