import { Component, OnInit } from '@angular/core';
import { MyserviceService, Book } from '../myservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-assign-book-to-category',
  templateUrl: './assign-book-to-category.component.html',
  styleUrls: ['./assign-book-to-category.component.css']
})
export class AssignBookToCategoryComponent implements OnInit {

  categoryId:number;
  obj1: any;
  book_id:number;
  constructor(private myservice: MyserviceService,private router: Router) {
    this.obj1=this.myservice.assignBtoCMethod();
   }

  ngOnInit(): void {
  }
  
  flag:boolean;
  error:string;
  onSubmit(b:Book){
    this.myservice.assignbookTocategory(this.categoryId,this.obj1.book_id).subscribe(data=>{
     
    },
    error => { 
      if(error.status==500){
       this.error="categoryId doesn't exists"
      this.flag=false;
     }
     else{
       this.flag=true;
       
     }
    }
    
      );
     // this.router.navigate(['/ListBooks']);

  }

}
