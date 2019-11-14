import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Subject } from './subject';

const httpOption = {
  headers : new HttpHeaders({"Content-Type" : "application/json"})
};

@Injectable({
  providedIn: 'root'
})
export class SubjectService {

  private url = 'https://pacific-wave-50441.herokuapp.com/api/subjects';

  constructor(private http: HttpClient) { }

  getAll() : Observable<Subject[]> {
    return this.http.get<Subject[]>(this.url);
  }

  save(subject : Subject) : Observable<Subject> {
    return this.http.post<Subject>(this.url, subject, httpOption);
  }

  edit(subject : Subject) : Observable<Subject> {
    return this.http.put<Subject>(this.url + '/' + subject.id, subject, httpOption);
  }

  delete(subject : Subject) : Observable<Subject> {
    return this.http.delete<Subject>(this.url + '/' + subject.id);
  }
}
