import { LibraryInterfaces } from "../services/interfaces";

export class BorrowedBook implements LibraryInterfaces.BorrowedBook{
    bookISBN: number;
    bookTitle: string;
    borrowingStartDate: Date;
    borrowingExpireDate: Date;

    constructor(bookISBN: number, bookTitle: string, borrowingStartDate: Date, borrowingExpireDate: Date){
        this.bookISBN = bookISBN;
        this.bookTitle = bookTitle;
        this.borrowingStartDate = borrowingStartDate;
        this.borrowingExpireDate = borrowingExpireDate;
    }    
}

export class Borrower implements LibraryInterfaces.Borrower {
    name: string;
    phoneNumber: string;
    email: string;
    borrowedBooks: LibraryInterfaces.BorrowedBook[];

    constructor(name: string, phoneNumber: string, email: string){
        this.name = name;
        this.phoneNumber = phoneNumber;
        this.email = email;
        this.borrowedBooks = [];
    }

    borrowBook(book: BorrowedBook){
        this.borrowedBooks.push(book);
        console.log(`${this.name} kikölcsönözte a könyvet: ${book.bookTitle}`);        
    }

    returnBook(book: BorrowedBook){
        this.borrowedBooks = this.borrowedBooks.filter(book => book.bookISBN !== book.bookISBN);
        console.log(`${this.name} visszahozta a könyvet: ${book.bookTitle}`);
        
    }
}