import { Course } from './course';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  private courseUrl: string = 'http://localhost:3100/api/courses'
  constructor(private httpClient: HttpClient){ }

  retrieveAll(): Observable<Course[]> {
    return this.httpClient.get<Course[]>(this.courseUrl);
  }

  retrieveById(id: number): Observable<Course> {
    return this.httpClient.get<Course>(`${this.courseUrl}/${id}`);
  }

  save(course: Course): Observable<Course> {
    if (course.id) {
      return this.httpClient.put<Course>(`${this.courseUrl}/${course.id}`, course);
    }

    return this.httpClient.post<Course>(`${this.courseUrl}`, course);
  }

  delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(`${this.courseUrl}/${id}`);
  }

}
