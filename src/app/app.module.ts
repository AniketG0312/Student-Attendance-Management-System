import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './pages/navbar/navbar.component';
import { FooterComponent } from './pages/footer/footer.component';
import { StudentloginComponent } from './components/studentlogin/studentlogin.component';
import { AdminloginComponent } from './components/adminlogin/adminlogin.component';
import { TeacherloginComponent } from './components/teacherlogin/teacherlogin.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminsectionComponent } from './components/adminsection/adminsection.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { StudetnDetailsADDComponent } from './components/studetn-details-add/studetn-details-add.component';
import {HttpClientModule } from "@angular/common/http";
import { TecherdetailsaddComponent } from './components/techerdetailsadd/techerdetailsadd.component';
import { AttendanceAddComponent } from './components/attendance-add/attendance-add.component';
import { GeneratereportComponent } from './components/generatereport/generatereport.component';
import { AddStudentadminComponent } from './components/add-studentadmin/add-studentadmin.component';
import { Add121Component } from './components/add121/add121.component';
import { TeacherSectionComponent } from './components/teacher-section/teacher-section.component';
import { StudentSectionComponent } from './components/student-section/student-section.component';
import { StudentRecordComponent } from './components/student-record/student-record.component';
import { AboutComponent } from './components/about/about.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    StudentloginComponent,
    AdminloginComponent,
    TeacherloginComponent,
    HomeComponent,
    ContactComponent,
    AdminsectionComponent,
    ForgotPasswordComponent,
    PageNotFoundComponent,
    StudetnDetailsADDComponent,
    TecherdetailsaddComponent,
    AttendanceAddComponent,
    GeneratereportComponent,
    AddStudentadminComponent,
    Add121Component,
    TeacherSectionComponent,
    StudentSectionComponent,
    StudentRecordComponent,
    AboutComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }





