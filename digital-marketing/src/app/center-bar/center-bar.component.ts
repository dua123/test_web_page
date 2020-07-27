import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-center-bar',
  templateUrl: './center-bar.component.html',
  styleUrls: ['./center-bar.component.css']
})
export class CenterBarComponent implements OnInit {

@Input() public total: any;
@Input() public centername: any;
@Output() public eventE = new EventEmitter<string>(); 

  constructor() { }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }


// tslint:disable-next-line: typedef
onclick(event, value){
  //console.log(event);
  // console.log(value);
  this.centername = value;
  this.eventE.emit(this.centername);
}





}
