import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-head-bar',
  templateUrl: './head-bar.component.html',
  styleUrls: ['./head-bar.component.css']
})
export class HeadBarComponent implements OnInit {

  public name = 'Morais';
  @Input() public headName: any ;
  constructor() { }

  ngOnInit(): void {
  }

}
