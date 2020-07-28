import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MyserviceService, Category } from '../myservice.service';

@Component({
  selector: 'app-update-category',
  templateUrl: './update-category.component.html',
  styleUrls: ['./update-category.component.css']
})
export class UpdateCategoryComponent implements OnInit {

  cid:number;
  private sub:any;
  constructor(private myservice: MyserviceService, private router: Router,private route:ActivatedRoute) { }

  ngOnInit(): any {
    let sub=this.route.params.subscribe(
      params=>{
        this.cid=+params['id'];
      }
    )
    console.log(sub);
    console.log(this.cid);
  }
  onUpdateCat(uc:Category):any{
    console.log(this.cid);
    console.log(uc.categoryName);
    this.myservice.onUpdateCategory(this.cid,uc.categoryName).subscribe(_data=>{
      return this.router.navigate(['/ListCategories']);
    },
    (_err) => {
      
      alert("Category Name already exists!!");
    }
    );
    
  }

}
