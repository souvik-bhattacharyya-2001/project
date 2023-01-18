import { Component, OnInit } from '@angular/core';
import { NewservicesService } from 'src/app/ser/newservices.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(private prod: NewservicesService) {}
  product!: any;

  searchedText:string=''


  ngOnInit(): void {
    this.product = this.prod.users;
  }

  onSearchTextEnter(searchvalue:string){
    this.searchedText=searchvalue
    // console.log(this.searchedText);
    
  }
}
