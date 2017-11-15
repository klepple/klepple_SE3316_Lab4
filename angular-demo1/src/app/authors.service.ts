import { Injectable } from '@angular/core';

@Injectable()
export class AuthorsService {

  constructor() { }
  
  getAuthors(): string[] {
      return ["author1", "author2", "author3"];
  }

}
