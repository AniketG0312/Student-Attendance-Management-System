import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { StudentloginComponent } from './components/studentlogin/studentlogin.component';
import { TeacherloginComponent } from './components/teacherlogin/teacherlogin.component';
import { AdminloginComponent } from './components/adminlogin/adminlogin.component';
import { ContactComponent } from './components/contact/contact.component';
import { AdminsectionComponent } from './components/adminsection/adminsection.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { StudetnDetailsADDComponent } from './components/studetn-details-add/studetn-details-add.component';
import { TecherdetailsaddComponent } from './components/techerdetailsadd/techerdetailsadd.component';
import { AttendanceAddComponent } from './components/attendance-add/attendance-add.component';
import { GeneratereportComponent } from './components/generatereport/generatereport.component';
import { AddStudentadminComponent } from './components/add-studentadmin/add-studentadmin.component';
import { Add121Component } from './components/add121/add121.component';
import { TeacherSectionComponent } from './components/teacher-section/teacher-section.component';
import { StudentSectionComponent } from './components/student-section/student-section.component';
import { StudentRecordComponent } from './components/student-record/student-record.component';
import { AboutComponent } from './components/about/about.component';


const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'student',component:StudentloginComponent},
  {path:'teacher',component:TeacherloginComponent},
  {path:'admin',component:AdminloginComponent},
  {path:'adminsection',component:AdminsectionComponent},
  {path:'contact',component:ContactComponent},
  {path:'forget',component:ForgotPasswordComponent},
  {path:'notfound',component:PageNotFoundComponent},
  {path:'studentDetails',component:StudetnDetailsADDComponent},
  {path:'teacherDetails',component:TecherdetailsaddComponent},
  {path:'attendanceAdd',component:AttendanceAddComponent},
  {path:'generate',component:GeneratereportComponent},
  {path:'add-studentadmin',component:AddStudentadminComponent},
  {path:'add121',component:Add121Component},
  {path:'teachersection',component:TeacherSectionComponent},
  {path:'studentSection', component:StudentSectionComponent},
  {path:'studentRecord',component:StudentRecordComponent},
  {path:'about',component:AboutComponent},
  {path:'**',component:PageNotFoundComponent},
 
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }