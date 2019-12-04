import { Book } from './../models/book';
import { Category } from './../models/category';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http: HttpClient) { }
  /*
  * Get all books categories as reference data from Backend server
  */
  loadCategories(): Observable<Category[]>{ 
    let headers = new HttpHeaders();
    headers.append('content-type', 'application/json');
    headers.append('accept', 'application/json');
    return this.http.get<Category[]>('/library/rest/category/api/allCategories',
    {headers:headers});
  }

  /**
   * Save a new book object in the Backend server database.
   * @param book
   */
  saveBook(book: Book): Observable<Book> {
    return this.http.post<Book>('/library/rest/api/addBook', book);
  }

  /**
   * Update an existing Book object in the Backend server database.
   * @param book
   */
  updateBook(book: Book): Observable<Book> {
    return this.http.put<Book>('/library/rest/book/api/updateBook', book);
  }
  /**
   * Delete an existing Book object in the Backend server database
   * @param book 
   */
  deleteBook(book: Book): Observable<String> {
    return this.http.delete<String>('/library/rest/book/api/deleteBook/'+book.id);
  } 
  /**
   * Search books by isbn
   * @param isbn 
   */
  searchBookByIsbn(isbn: string): Observable<Book> {
    return this.http.get<Book>('/library/rest/book/api/searchByIsbn?isbn='+isbn);
  }

  searchBookByTitle(title: string): Observable<Book[]> {
    return this.http.get<Book[]>('/library/rest/book/api/searchByTitle?title='+title);
  }  
  
}
