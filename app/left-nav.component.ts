import { Component , EventEmitter, Output} from '@angular/core';
import {USER_DATA, USER } from './json/user';
@Component({
  selector: 'my-left-nav',
  templateUrl: './dist/view/left-nav.component.html'
})
export class LeftNavComponent {
@Output() changeBtn = new EventEmitter<boolean>();
constructor() {
  this.addIteam();
 }


 itemSelected(showButton: boolean,event:any) {
    this.changeBtn.emit(showButton);
    for(var i=0;i<event.target.parentNode.children.length;i++){
        event.target.parentNode.children[i].className="collection-item";
    }
    event.target.setAttribute("class", "pan_collection_active");
  }


  private iteamArray  = [
  {'name':'item1'}
  ];
  private iteamCount  = 0;
  addIteam(): void {
    for(let i=this.iteamCount; i< this.iteamCount+20; i++){
      this.iteamArray.push({'name':`item `+i});
    }
    this.iteamCount = this.iteamCount+20;
  }
  onScroll () {
       this.addIteam();
   }
}
