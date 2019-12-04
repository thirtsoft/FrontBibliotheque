import { Mail } from './../models/mail';
import { SimpleLoan } from './../models/simple-loan';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Loan } from '../models/loan';

@Injectable({
  providedIn: 'root'
})
export class LoanService {

  constructor(private http: HttpClient) { }
  /**
   * Save a new simpleLoan object in the Backend server database
   * @param simpleLoan 
   */
  saveLoan(simpleLoan: SimpleLoan): Observable<Loan> {
    return this.http.post<Loan>('/library/rest/loan/api/addLoan', simpleLoan);
  }
  /**
   * close an existing loan object in the Backend server database
   * @param simpleLoan 
   */
  closeLoan(simpleLoan: SimpleLoan): Observable<Boolean> {
    return this.http.post<Boolean>('/library/rest/loan/api/closeLoan/', simpleLoan);
  }
  /**
   * Search Loans by email
   * @param email
   */
  searchLoansByEmail(email: string): Observable<Loan[]> {
    return this.http.get<Loan[]>('/library/rest/loan/api/customerLoans?email='+email); 
  }  
  /**
   * Search Loans by maximum date
   * @param maxDate 
   */
  searchLoansByMaximumDate(maxDate: Date): Observable<Loan[]> {
    let month: string = maxDate.getMonth() < 10 ? '0'+(maxDate.getMonth()+1): ''+(maxDate.getMonth()+1);
    let dayOfMonth: string = maxDate.getDate() < 10 ? '0'+maxDate.getDate(): ''+maxDate.getDate();
    let maxDateStr: string = maxDate.getFullYear() + '-' + month + '-' + dayOfMonth;
    return this.http.get<Loan[]>('/library/rest/loan/api/maxEndDate?date='+maxDateStr);
  }
  
  sendEmaim(mail: Mail) : Observable<Boolean> {
    //let headers = new HhhtHeaders();
    //headers.append('responseType',)
    return this.http.put<Boolean>('/library/rest/customer/api/sendEmailToCustomer', mail);
  }
  
}
