import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserHomeComponent } from './user-home/user-home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ListOfCategoriesComponent } from './list-of-categories/list-of-categories.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { OrderByNamePipePipe } from './order-by-name-pipe.pipe';
import { CreatecategoryComponent } from './createcategory/createcategory.component';
import { UpdateCategoryComponent } from './update-category/update-category.component';
import { ListbooksComponent } from './listbooks/listbooks.component';
import { CreateBookComponent } from './create-book/create-book.component';
import { UpdateBookComponent } from './update-book/update-book.component';
import { AllBooksComponent } from './all-books/all-books.component';
import { BookByCategoryComponent } from './book-by-category/book-by-category.component';
import { AssignBookToCategoryComponent } from './assign-book-to-category/assign-book-to-category.component';
import { AdminPageComponent } from './admin-page/admin-page.component';


@NgModule({
  declarations: [
    AppComponent,
    UserHomeComponent,
    HeaderComponent,
    FooterComponent,
    ListOfCategoriesComponent,
    OrderByNamePipePipe,
    CreatecategoryComponent,
    UpdateCategoryComponent,
    ListbooksComponent,
    CreateBookComponent,
    UpdateBookComponent,
    AllBooksComponent,
    BookByCategoryComponent,
    AssignBookToCategoryComponent,
    AdminPageComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,HttpClientModule,
    FormsModule
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
