import { Model ,TodoItems} from './model';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {

  model = new Model();

  getName(){
    return this.model.user;
  }

  getItems(){
    return this.model.items.filter(item=> !item.action);
  }

  addItem(value:any){
    if (value!= "") {
      this.model.items.push(new TodoItems(value,false));
    }
    console.log(this.model.items);

  }
}
