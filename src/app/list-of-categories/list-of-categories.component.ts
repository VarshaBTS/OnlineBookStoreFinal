import { Component, OnInit } from '@angular/core';
import { Category, MyserviceService } from '../myservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-of-categories',
  templateUrl: './list-of-categories.component.html',
  styleUrls: ['./list-of-categories.component.css']
})
export class ListOfCategoriesComponent implements OnInit {

  mess: string;
  message: string
  cat: Category[];
  constructor(private myservice: MyserviceService, private router: Router) { }

  ngOnInit(): any {
    this.myservice.getCategory().subscribe(

      response => this.handleSuccessfulResponse(response),
    );

  }
  handleSuccessfulResponse(response) {
    this.cat = response;
    console.log(this.cat);
  }

  update(cid: number) {
    this.myservice.updateCategory(cid);
    this.router.navigate(['/UpdateCategory', cid]); 
    console.log('end of list all test update button')
  }
  delete(categoryId: number) {
    var retval = confirm("Are you sure want to delete the Category with ID: " + categoryId + " ?");
    if (retval == true) {
      this.myservice.removeCategory(categoryId).subscribe(

        (result) => {

          if (result != null) {
            this.cat = this.cat.filter(category => category.categoryId != categoryId)
          }
        },
        (err) => {
          this.message = err.message;
        }

      );
    }
    else {
      return false;
    }
  }


}
