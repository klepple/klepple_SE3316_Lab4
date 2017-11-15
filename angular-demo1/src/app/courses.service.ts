import { Injectable } from '@angular/core';

@Injectable()
export class CoursesService {

  courseList:string[] = ["course1", "course2", "course3"];
  
  constructor() {
    //courseList = ["course1", "course2", "course3"];   
  }
  
  getCourses() : string[] {
      return this.courseList;
  }
  
  saveCourse(course: string) {
    this.courseList.push(course);
  }

}
