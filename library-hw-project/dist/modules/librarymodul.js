"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LibraryStock = void 0;
class LibraryStock {
    constructor() {
        this.books = new Map();
        this.usedIDs = new Set();
    }
    generateID() {
        let a = 20;
        let b = 60;
        return Math.floor((Math.random() * (b - a) + a)) * Math.floor((Math.random() * (b - a) + a));
    }
    generateUniqueId() {
        let id;
        do {
            id = this.generateID();
        } while (this.usedIDs.has(id));
        this.usedIDs.add(id);
        return id;
    }
    addNewBook(book) {
        const id = this.generateUniqueId();
        const bookWithId = Object.assign({}, book, { _libraryId: id });
        this.books.set(id, bookWithId);
    }
    listAllBooks() {
        return Array.from(this.books.values());
    }
    searchOneBook(identifier) {
        if (typeof identifier === "number") {
            for (const book of this.books.values()) {
                if (book.ISBN === identifier)
                    return book;
            }
        }
        else {
            for (const book of this.books.values()) {
                if (book.title === identifier) {
                    return book;
                }
            }
            return undefined;
        }
    }
    updateBook(identifier, updatedFields) {
        const bookToUpdate = this.searchOneBook(identifier);
        if (bookToUpdate !== undefined) {
            Object.assign(bookToUpdate, updatedFields);
            console.log("A könyv adatai sikeresen frissítve");
        }
        else {
            console.log(("A könyv nem található."));
        }
    }
    deleteFromStock(ISBN) {
        if (this.books.has(ISBN)) {
            this.books.delete(ISBN);
            return "A könyv sikeresen törölve az adatbázisból.";
        }
        else {
            return "Nincs ilyen könyv az adatbázisban.";
        }
    }
}
exports.LibraryStock = LibraryStock;
