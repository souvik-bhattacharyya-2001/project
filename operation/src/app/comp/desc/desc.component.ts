import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NewservicesService } from 'src/app/ser/newservices.service';

@Component({
  selector: 'app-desc',
  templateUrl: './desc.component.html',
  styleUrls: ['./desc.component.css'],
})
export class DescComponent implements OnInit {
  prodId: any | undefined;
  subId: any | undefined;
  subProd: any | undefined;
  single: any | undefined;
  constructor(
    private activeRoute: ActivatedRoute,
    private prodService: NewservicesService
  ) {}

  ngOnInit(): void {
    this.activeRoute.paramMap.subscribe((params) => {
      this.prodId = params.get('pid');
      this.subId = params.get('id');
      // console.log("submitted : ",this.prodId,this.subId);
      this.subProd = this.prodService.users.filter(
        (d: any) => d.prod_id == this.prodId
      );
      // console.log("mnbvf : ",this.subProd);
      this.single = this.subProd[0].sub_prod.filter(
        (x: any) => x.sub_id == this.subId
      );
      // console.log(this.single);
    });

  }
}
