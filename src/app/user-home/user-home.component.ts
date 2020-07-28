import { Component, OnInit } from '@angular/core';
import { Category, MyserviceService } from '../myservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.css']
})
export class UserHomeComponent implements OnInit {

  cat: Category[];
  category:string;
  constructor(private myservice: MyserviceService,private router: Router) { }

  ngOnInit(): any {
    this.myservice.getCategory().subscribe(

      response => this.handleSuccessfulResponse(response),
    );
  }
  handleSuccessfulResponse(response) {
    this.cat = response;
    console.log(this.cat);
  }
  Category(id:number){
     this.router.navigate(['books',id]);
  }
  display(){
    
  }

}
