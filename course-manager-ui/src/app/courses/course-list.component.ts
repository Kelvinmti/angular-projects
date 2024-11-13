import { Component, OnInit } from '@angular/core';
import { Course } from './course';
import { CourseService } from './course.service';

@Component ({
  selector: 'app-course-list', //Definindo tag que irá renderizar o componente
  templateUrl: './course-list.component.html'
})
export class CourseListComponent implements OnInit {

  filteredCourses: Course[] = [];
  _courses: Course[] = [];

  _filterBy: string;

  // Recuperando course-service via injeção de dependência
  // Qnd o angular identifica que um objeto está sendo referenciado
  // e ele possui o decorator @Injectable, ele o injeta automaticamente
  constructor(private courseService: CourseService){}

  ngOnInit(): void { // Método chamado ao iniciar a tela
    this.retrieveAll();
  }

  retrieveAll(): void {
    this.courseService.retrieveAll().subscribe({
      next: courses => {
        this._courses = courses;
        this.filteredCourses = this._courses;
      },
      error: err => console.log('Error', err)
    });
  }

  deleteById(courseId: number): void {
    this.courseService.delete(courseId).subscribe({
      next: () => {
        console.log('Removido com sucesso!');
        this.retrieveAll(); // atualizar grid sem o item removido
      },
      error: err => console.log('Error', err)
    })
  }

  set filter(value: string) {
    this._filterBy = value;
    this.filteredCourses = this._courses
          .filter((course: Course) => course.name.toLowerCase().indexOf(this._filterBy.toLowerCase()) > -1);

  }

  get filter() {
    return this._filterBy;
  }

}
