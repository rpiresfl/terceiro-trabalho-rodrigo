import { Injectable } from '@angular/core';
import { Course } from './course';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOption = {
  headers : new HttpHeaders({"Content-Type" : "application/json"})
};

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  private url = 'https://pacific-wave-50441.herokuapp.com/api/courses';

  constructor(private http: HttpClient) { }

  getAll() : Observable<Course[]> {
    return this.http.get<Course[]>(this.url);
  }

  save(course : Course) : Observable<Course> {
    return this.http.post<Course>(this.url, course, httpOption);
  }

  edit(course : Course) : Observable<Course> {
    return this.http.put<Course>(this.url + '/' + course.id, course, httpOption);
  }

  delete(course : Course) : Observable<Course> {
    return this.http.delete<Course>(this.url + '/' + course.id);
  }
}
