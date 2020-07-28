import { Component, OnInit } from '@angular/core';
import { Book, MyserviceService } from '../myservice.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-book-by-category',
  templateUrl: './book-by-category.component.html',
  styleUrls: ['./book-by-category.component.css']
})
export class BookByCategoryComponent implements OnInit {

  book: Book[];
  private sub:any;
  Cid:number;
  constructor(private myservice: MyserviceService,private route:ActivatedRoute) { }

  ngOnInit(){
    let sub=this.route.params.subscribe(
      params=>{
        this.Cid=+params['id'];
      }
    )
    console.log(this.Cid);
    this.myservice.getCategoryByID(this.Cid).subscribe(
      response => this.handleSuccessfulResponse(response),
    );
    console.log(this.Cid);
  }
  handleSuccessfulResponse(response) {
    this.book = response;
    console.log(this.book);
  }

}
