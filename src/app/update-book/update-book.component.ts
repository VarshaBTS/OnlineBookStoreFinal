import { Component, OnInit } from '@angular/core';
import { MyserviceService, Book } from '../myservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-book',
  templateUrl: './update-book.component.html',
  styleUrls: ['./update-book.component.css']
})
export class UpdateBookComponent implements OnInit {

  obj1: any;
  constructor(private myservice: MyserviceService, private router: Router) { 
    this.obj1=this.myservice.updateMethod();
  }

  ngOnInit(): void {
  }
  update(book:Book){
    this.myservice.onUpdate(book).subscribe(data=>{
      
    });
  }

}
