import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  displaySecret = false;
  clicksArray = [];

  handleClick() {
    this.displaySecret = !this.displaySecret;
    
    var item = this.clicksArray.length + 1 + ': ' + Date.now();
    this.clicksArray.push(item);
  }
}
