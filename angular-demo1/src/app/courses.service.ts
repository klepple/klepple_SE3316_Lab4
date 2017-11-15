import { Injectable } from '@angular/core';

@Injectable()
export class CoursesService {

  constructor() { }
  
  getCourses() : string[] {
      return ["course1", "course2", "course3"];
  }

}
