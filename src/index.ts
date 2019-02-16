import { LibraryInterface } from "./interfaces";

export class Library implements LibraryInterface {
  value: Boolean;
  constructor() {
    this.value = true;
    console.log("HEllo, world!");
  }
}

(<any>window).Library = Library;
