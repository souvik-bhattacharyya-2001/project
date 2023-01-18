import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NewservicesService } from 'src/app/ser/newservices.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  cid:any |undefined
  kip:any |undefined
  constructor(
    private activeRoute:ActivatedRoute,
    private res:NewservicesService) { }

    searchchedText:string=''

  ngOnInit(): void {
    this.activeRoute.paramMap.subscribe((params)=>{
      // console.log("col : ",params.get('id'));
      
      this.cid=params.get('id');
      // console.log("collected :" ,this.cid);
      this.kip=this.res.users.filter((data:any)=>data.prod_id==this.cid)
      // console.log("-----------",this.kip);
      
      
    })
    // this.cid=this.res.users
    // console.log(this.cid);
    
  }
  onSearchTextEnter(searchvalue:string){
    this.searchchedText=searchvalue
  }

}
