import { LibraryInterface } from "./interfaces";
import { random } from "./random";

export default class Library implements LibraryInterface {
  value: string;
  constructor() {
    this.value = random();
    const valueElement: HTMLElement | null = document.querySelector("strong");
    if (valueElement) valueElement.innerHTML = this.value;
    console.log("The random value is", this.value);
  }
}

(<any>window).Library = Library;
