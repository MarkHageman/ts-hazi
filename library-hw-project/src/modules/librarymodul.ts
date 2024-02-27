import { LibraryInterfaces } from "../services/interfaces";
import { Book } from "./bookmodul";
import { Borrower, BorrowedBook } from "./borrowmodule";

export class LibraryStock implements LibraryInterfaces.LibraryStock {
    private books: Map<number, Book> = new Map();
    usedIDs: Set<number> = new Set();

    private generateID(){
        let a = 20;
        let b = 60;
        return Math.floor((Math.random() * (b - a) + a)) * Math.floor((Math.random() * (b - a) + a));
    }

    private generateUniqueId(): number {
        let id: number;

        do {
            id = this.generateID();
        } while(this.usedIDs.has(id));

        this.usedIDs.add(id);
        return id;
    }    

    addNewBook(book: LibraryInterfaces.Book ): void {
        const id = this.generateUniqueId();
        const bookWithId = Object.assign({}, book, {_libraryId: id});
        this.books.set(id, bookWithId);
    }

    listAllBooks(): LibraryInterfaces.Book[] {
        return Array.from(this.books.values());
    }

    searchOneBook<T extends string | number>(identifier: T): LibraryInterfaces.Book | undefined {
        if(typeof identifier === "number") {
            for(const book of this.books.values()){
                if(book.ISBN === identifier)
                    return book;
            }
        } else {
            for(const book of this.books.values()){
                if(book.title === identifier){
                    return book;
                }
            }
            return undefined;
        }
    }

    updateBook<T extends string | number>(identifier: T, updatedFields: Partial<LibraryInterfaces.Book>): void {
        const bookToUpdate = this.searchOneBook(identifier);

        if (bookToUpdate !== undefined){
            Object.assign(bookToUpdate, updatedFields);
            console.log("A könyv adatai sikeresen frissítve");
            
        } else {
            console.log(("A könyv nem található."));
            
        }
    }

    deleteFromStock(ISBN: number): string {
        
        if(this.books.has(ISBN)) {
            this.books.delete(ISBN)
            return "A könyv sikeresen törölve az adatbázisból.";
        } else {
            return "Nincs ilyen könyv az adatbázisban.";
        }
    }
}
