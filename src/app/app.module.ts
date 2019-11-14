import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router'; 
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { SubjectComponent } from './subject/subject.component';
import { CourseComponent } from './course/course.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { MoneyComponent } from './money/money.component';
import { GoogleChartsModule } from 'angular-google-charts';

const routes : Routes = [
  { path: 'course', component: CourseComponent },
  { path: 'subject', component: SubjectComponent },
  { path: 'money', component: MoneyComponent },
  { path: '', redirectTo: 'course', pathMatch: 'full' },
  { path: '**',  component: NotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    SubjectComponent,
    CourseComponent,
    NotFoundComponent,
    MoneyComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(
      routes
    ),
    GoogleChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
