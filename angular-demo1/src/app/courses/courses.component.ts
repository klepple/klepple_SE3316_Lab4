import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { CoursesService } from '../courses.service';
import { AutoGrowDirective } from ''

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css'],
  encapsulation: ViewEncapsulation.None,
  providers: [CoursesService],
})
export class CoursesComponent implements OnInit {

  title = "Currently enrolled in:";
  courses;
  
  constructor(public coursesService: CoursesService) { 
    this.courses = coursesService.getCourses();
    this.courses = coursesService.courseList;
  }
  
  ngOnInit() {
  }

}
