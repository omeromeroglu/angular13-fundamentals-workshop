import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {
  courses = [
    {
      id: 1,
      title: 'Angular 13 Fundamentals',
      description: 'Learn the fundamentals of Angular 13',
      percentComplete: 26,
      favorite: true
    },
    {
      id: 2,
      title: 'React',
      description: 'Learn the React ComponentFixture',
      percentComplete: 66,
      favorite: true
    }
  ];

  selectedCourse= null

  constructor() { }

  ngOnInit(): void {
  }

  selectCourse(course){
    this.selectedCourse= course;
  }

  deleteCourse(courseId){
    console.log(courseId);
  }



}
