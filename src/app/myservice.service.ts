import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class MyserviceService {

  
  cat : Category[];
  constructor(private httpService: HttpClient) { }

  public getCategory(){
    console.log("in service getCategory()");
    //const headers =new HttpHeaders().set('Content_Type', 'text/plain ;charset=utf-8');
    return this.httpService.get<Category>("http://localhost:8765/bookstore/GetAllCategory");
  }
  public getCategoryByID(id:number){
    console.log("in service getCategory()");
    //const headers =new HttpHeaders().set('Content_Type', 'text/plain ;charset=utf-8');
    return this.httpService.get<Book>("http://localhost:8765/bookstore/categoryID/"+id);
  }
id:number;
 // updateCat:Category;
  public updateCategory(categoryId: number) {
    //this.updateCat = updateCat;
    this.id=categoryId
  }
 // public updateCatMethod() {
 //   return this.updateCat;
 // }
 
 /*
  public onUpdateCategory(updateCat: Category) {
    console.log("ins service update");
    const headers =new HttpHeaders().set('Content_Type', 'text/plain ;charset=utf-8');
    return this.httpService.put("http://localhost:8765/bookstore/UpdateCategory", updateCat,  { headers, responseType: 'text'});
  }
  */
 
 public onUpdateCategory(cid:number,cname:string) {
  console.log("ins service update");
  const headers =new HttpHeaders().set('Content_Type', 'text/plain ;charset=utf-8');
  return this.httpService.put("http://localhost:8765/bookstore/UpdateCategory/"+cid+"/"+cname,  { headers, responseType: 'text'});
}

  public CreateCategory(createCat: Category) {
    console.log("ins service create");
    const headers =new HttpHeaders().set('Content_Type', 'text/plain ;charset=utf-8');
    return this.httpService.post("http://localhost:8765/bookstore/create", createCat,  { headers, responseType: 'text'});
  }

  public removeCategory(categoryId:number){
    console.log("delete category")
    const headers =new HttpHeaders().set('Content_Type', 'text/plain ;charset=utf-8');
        return this.httpService.delete("http://localhost:8765/bookstore/deleteCat/" + categoryId,  { headers, responseType: 'text'});
      
  }
  //-----------book-----
  public getBooks(){
    console.log("in service getCategory()");
    //const headers =new HttpHeaders().set('Content_Type', 'text/plain ;charset=utf-8');
    return this.httpService.get<Category>("http://localhost:8765/bookstore/GetAllBook");
  }

  public CreateBook(createBook: Book) {
    console.log("ins service create");
    const headers =new HttpHeaders().set('Content_Type', 'text/plain ;charset=utf-8');
    return this.httpService.post("http://localhost:8765/bookstore/createbook", createBook,  { headers, responseType: 'text'});
  }
  public removeBook(bookId:number){
    console.log("delete book")
    const headers =new HttpHeaders().set('Content_Type', 'text/plain ;charset=utf-8');
        return this.httpService.delete("http://localhost:8765/bookstore/deleteBook/" + bookId,  { headers, responseType: 'text'});
      
  }
  updateb:Book;
  public updateBook(updateb: Book) {
    this.updateb = updateb;
  }
  public updateMethod() {
    return this.updateb;
  }
  public onUpdate(updateBook: Book) {
    console.log("ins service update");
    console.log(updateBook);
    const headers =new HttpHeaders().set('Content_Type', 'text/plain ;charset=utf-8');
    return this.httpService.put("http://localhost:8765/bookstore/UpdateBook", updateBook,  { headers, responseType: 'text'});
  }

  
}
export class Category{
  categoryId:number;
  categoryName:string;
  Books:Book;
}
export class Book{
  book_id:number;
  title:string;
  author:string;
  description:string;
  ISBN:number;
  price:number;
  published_Date:Date;
  category:Category;
}
