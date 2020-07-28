import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Category, MyserviceService } from '../myservice.service';

@Component({
  selector: 'app-createcategory',
  templateUrl: './createcategory.component.html',
  styleUrls: ['./createcategory.component.css']
})
export class CreatecategoryComponent implements OnInit {

  Category: any={};
  obj1: any;
 message: string;
  constructor(private myservice: MyserviceService, private router: Router) {
   
   }

  ngOnInit(): void {
  }
  onCreateCat(uc:Category):any{
    this.myservice.CreateCategory(uc).subscribe(
      data=>{
      this.Category=data;
      console.log(Category);
      
      this.router.navigate(['/ListCategories']);
    },
    (err) => {
      
      alert("Category Name aldready exists!!");
    }
    );
     
  }

}
