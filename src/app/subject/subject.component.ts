import { Component, OnInit } from '@angular/core';
import { Subject } from '../subject';
import { SubjectService } from '../subject.service';
import { CourseService } from '../course.service';
import { Course } from '../course';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css']
})
export class SubjectComponent implements OnInit {

  newSubject: Subject;
  subjects: Subject[] = [];
  courses: Course[] = [];

  constructor(private subjectService: SubjectService, 
              private courseService: CourseService) {
  }

  ngOnInit() {
    this.newSubject = new Subject();
    this.getAll();
    this.loadCourses();
  }

  getAll() {
    this.subjectService.getAll().subscribe(
      data => this.subjects = data
    );
  }

  loadCourses() {
    this.courseService.getAll().subscribe(
      data => this.courses = data
    );
  }

  save() {
    if (!this.newSubject.id) {
      this.subjectService.save(this.newSubject).subscribe(
        data => this.getAll()
      );

    } else {
      this.subjectService.edit(this.newSubject).subscribe(
        data => this.getAll()
      );
    }

    this.newSubject = new Subject();
  }

  delete(subject : Subject) {
    this.subjectService.delete(subject).subscribe(
      data => this.getAll()
    );
  }

  edit(subject : Subject) {
    this.newSubject = new Subject(subject.id, subject.name, subject.workload, subject.period, subject.course_fk);
  }
}
