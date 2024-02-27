"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Book = void 0;
class Book {
    constructor(ISBN, author, title, publisher, publicationDate, pageCount, inStock) {
        this.ISBN = ISBN;
        this.author = author;
        this.title = title;
        this.publisher = publisher;
        this.publicationDate = publicationDate;
        this.pageCount = pageCount;
        this.inStock = inStock;
    }
    toString() {
        return `Book { ISBN: ${this.ISBN}, author: ${this.author}, title: ${this.title}, publisher: ${this.publisher}, publicationDate: ${this.publicationDate}, pageCount: ${this.pageCount}, inStock: ${this.inStock} }`;
    }
}
exports.Book = Book;
