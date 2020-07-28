import { Component, OnInit } from '@angular/core';
import { MyserviceService, Book } from '../myservice.service';

@Component({
  selector: 'app-all-books',
  templateUrl: './all-books.component.html',
  styleUrls: ['./all-books.component.css']
})
export class AllBooksComponent implements OnInit {

  book:Book[];
  constructor(private myservice: MyserviceService) { }

  ngOnInit(): any {
    this.myservice.getBooks().subscribe(

      response => this.handleSuccessfulResponse(response),
    );

  }
  handleSuccessfulResponse(response) {
    this.book = response;
    console.log(this.book);
  }

}
