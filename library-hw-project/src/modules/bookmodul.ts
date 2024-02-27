import { LibraryInterfaces } from "../services/interfaces";


export class Book implements LibraryInterfaces.Book{
    ISBN: number;
    author: string;
    title: string;
    publisher: string;
    publicationDate: Date;
    pageCount: number;
    inStock: boolean;

    constructor(ISBN: number, author: string, title: string, publisher: string, publicationDate: Date, pageCount: number, inStock: boolean){
        this.ISBN = ISBN;
        this.author = author;
        this.title = title;
        this.publisher = publisher;
        this.publicationDate = publicationDate;
        this.pageCount = pageCount;
        this.inStock = inStock;
    }
    
    toString(): string {
        return `Book { ISBN: ${this.ISBN}, author: ${this.author}, title: ${this.title}, publisher: ${this.publisher}, publicationDate: ${this.publicationDate}, pageCount: ${this.pageCount}, inStock: ${this.inStock} }`;
    }
}


