
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Customer } from '../models/customer';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http: HttpClient) { }
  /**
   * Save a new customer object in the Backend server database
   * @param customer 
   */
  saveCustomer(customer: Customer): Observable<Customer> {
    return this.http.post<Customer>('/library/rest/customer/api/addCustomer', customer);
  }
  /**
   * Update an existing Customer object in the Backend server database
   * @param customer 
   */
  updateCustomer(customer: Customer): Observable<Customer> {
    return this.http.put<Customer>('/library/rest/customer/api/updateCustomer', customer);
  } 
  /**
   * Delete an existing Customer object in the Backend server database
   * @param customer 
   */
  deleteCustomer(customer: Customer): Observable<string> {
    return this.http.delete<string>('/library/rest/customer/api/deleteCustomer/'+customer.id);
  } 
  /**
   * Search customer by email
   * @param email
   */
  searchCustomerByEmail(email: string): Observable<string> {
    return this.http.get<string>('/library/rest/customer/api/searchByEmail?email='+email);
  }
  /**
   * Search books by pagination
   * @param beginPage
   * @param endPage,
   */
  searchCustomerByLastName(lastName: string): Observable<Customer[]> {
    return this.http.get<Customer[]>('/library/rest/customer/api/searchByLastName?lastName='+lastName);
  }
}
