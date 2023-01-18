import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  enteredSearchValue:string=''
  constructor() { }
  
  @Output()val:EventEmitter<any>=new EventEmitter<any>()
  ngOnInit(): void {
  }
  

  onSearchTextChange(){
    this.val.emit(this.enteredSearchValue)
  }

  

}
