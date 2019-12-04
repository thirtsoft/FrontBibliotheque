import { Customer } from './customer';
import { Book } from './book';

export class Loan {
    
    bookDTO: Book = new Book();

    customerDTO: Customer = new Customer();

    loanBeginDate: Date;

    loanEndDate: Date;
}