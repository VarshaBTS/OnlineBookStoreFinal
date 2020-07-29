import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserHomeComponent } from './user-home/user-home.component';

import { ListOfCategoriesComponent } from './list-of-categories/list-of-categories.component';
import { CreatecategoryComponent } from './createcategory/createcategory.component';
import { UpdateCategoryComponent } from './update-category/update-category.component';
import { ListbooksComponent } from './listbooks/listbooks.component';
import { CreateBookComponent } from './create-book/create-book.component';
import { UpdateBookComponent } from './update-book/update-book.component';
import { AllBooksComponent } from './all-books/all-books.component';
import { BookByCategoryComponent } from './book-by-category/book-by-category.component';
import { AssignBookToCategoryComponent } from './assign-book-to-category/assign-book-to-category.component';


const routes: Routes = [
  {path:'UserHome',component:UserHomeComponent},
  {path:'ListCategories',component:ListOfCategoriesComponent},
  {path:'CreateCategory',component:CreatecategoryComponent},
  {path:'UpdateCategory/:id',component:UpdateCategoryComponent},
  {path:'ListBooks',component:ListbooksComponent},
  {path:'CreateBook',component:CreateBookComponent},
  {path:'UpdateBook',component:UpdateBookComponent},
  {path:'AllBooks',component:AllBooksComponent},
  {path:'books/:id',component:BookByCategoryComponent},
  {path:'assign',component:AssignBookToCategoryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
