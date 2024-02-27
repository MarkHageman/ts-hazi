"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* const hello = function(name: string): string {
    return `Hello, ${name}!`
}

console.log(hello("Márk")); */
const bookmodul_1 = require("./modules/bookmodul");
const librarymodul_1 = require("./modules/librarymodul");
let book = new bookmodul_1.Book(123123123, "Szerző", "Cím", "Libri", new Date("2015.11.01"), 314, true);
let book2 = new bookmodul_1.Book(789789789, "Szerző2", "Cím2", "Moly", new Date("2015.11.01"), 516, true);
//console.log(book);
//console.log(book2);
const libraryStock = new librarymodul_1.LibraryStock();
libraryStock.addNewBook(book);
libraryStock.addNewBook(book2);
libraryStock.addNewBook({ ISBN: 456456456, author: "szerző3", title: "Cím3", publisher: "Líra", publicationDate: new Date("2022.01.17"), pageCount: 730, inStock: true });
console.log("Könyvek:");
console.log(libraryStock.listAllBooks());
console.log("könyv keresése cím alapján");
console.log(libraryStock.searchOneBook("Cím3"));
console.log("könyv keresése ISBN alapján");
console.log(libraryStock.searchOneBook(123123123));
//itt jönne az a rész, hogy id alapján keresek, de mivel minden futáskor új generálódik így az egyelőre elmarad,
//már így is több időt töltöttem vele mint eredetileg szerettem volna, és igen tudom hogy nem így csinálunk id-t :D
console.log("könyv adatok frissítése");
libraryStock.updateBook("Cím3", { title: "cím_frissítése", inStock: false });
console.log(libraryStock.searchOneBook(456456456));
libraryStock.deleteFromStock(789789789);
console.log(libraryStock.searchOneBook(789789789));
//console.log(libraryStock.listAllBooks());
