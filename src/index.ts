import { LibraryInterface } from "./interfaces";

export class Library implements LibraryInterface {
  value: Boolean;
  constructor() {
    this.value = true;
  }
}
