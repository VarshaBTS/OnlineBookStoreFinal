import { Component, OnInit } from '@angular/core';
import { MyserviceService, Book } from '../myservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-book',
  templateUrl: './create-book.component.html',
  styleUrls: ['./create-book.component.css']
})
export class CreateBookComponent implements OnInit {

  Book:any={};
  constructor(private myservice: MyserviceService, private router: Router) { }

  ngOnInit(): void {
  }
  onCreateBook(book:Book):any{
    this.myservice.CreateBook(book).subscribe(
      data=>{
      this.Book=data;
      console.log(Book);
      
      this.router.navigate(['/ListBooks']);
    }
    );
  }

}
