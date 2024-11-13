import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CourseService } from './course.service';
import { Course } from './course';

@Component({
  templateUrl: './course-info.component.html'
})
export class CourseInfoComponent implements OnInit {

  course: Course;

  constructor(private activatedRoute: ActivatedRoute,
              private courseService: CourseService) {
  }

  ngOnInit(): void {
    this.retrieveById();
  }

  retrieveById(): void {
    const id = +this.activatedRoute.snapshot.paramMap.get('id');// Obtem parametro id da rota
    this.courseService.retrieveById(id).subscribe({
      next: course => this.course = course,
      error: err => console.log('Error', err)
    });
  }

  save(): void {
    this.courseService.save(this.course).subscribe({
      next: course => console.log('Salvo com sucesso!'),
      error: err => console.log('Error', err)
    });
  }

}
