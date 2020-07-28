import { Component, OnInit } from '@angular/core';
import { MyserviceService, Book } from '../myservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listbooks',
  templateUrl: './listbooks.component.html',
  styleUrls: ['./listbooks.component.css']
})
export class ListbooksComponent implements OnInit {

  book:Book[];
  constructor(private myservice: MyserviceService, private router: Router) { }

  ngOnInit(): any {
    this.myservice.getBooks().subscribe(

      response => this.handleSuccessfulResponse(response),
    );

  }
  handleSuccessfulResponse(response) {
    this.book = response;
    console.log(this.book);
  }
  delete(book_id:number){
    var retval = confirm("Are you sure want to delete the Book with ID: " + book_id + " ?");
    if (retval == true) {
      this.myservice.removeBook(book_id).subscribe(

        (result) => {

        }

      );
    }
    else {
      return false;
    }
  }
  update(book:Book){
    this.myservice.updateBook(book);
    this.router.navigate(['/UpdateBook']);
  }

}
