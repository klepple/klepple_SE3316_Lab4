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

  title = "The title of the course page";
  courses;
  
  constructor(coursesService: CoursesService) { 
    this.courses = coursesService.getCourses();
  }
  
  ngOnInit() {
  }

}
