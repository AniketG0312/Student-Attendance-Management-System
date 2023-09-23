import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { studentDetailsschema } from './studentDetails.model';
import { ApiService } from 'src/app/shared/api.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-studetn-details-add',
  templateUrl: './studetn-details-add.component.html',
  styleUrls: ['./studetn-details-add.component.css']
})
export class StudetnDetailsADDComponent {

formvalue !:FormGroup;

studentdetailsobj :studentDetailsschema =new studentDetailsschema();
constructor(private formbuilder:FormBuilder, private api:ApiService)  { }

ngOnInit(){
  this.formvalue=this.formbuilder.group({
    firstname:[''],
    Lastname:[''],
    email:[''],
    mobile:[''],
   
  })
}

poststudentdetails(){
  this.studentdetailsobj.firstname = this.formvalue.value.firstname;
  this.studentdetailsobj.lastname=this.formvalue.value.lastname;
  this.studentdetailsobj.email=this.formvalue.value.email;
  this.studentdetailsobj.mobile=this.formvalue.value.mobile;
  

  this.api.poststudent(this.studentdetailsobj).subscribe((res:any)=>{
    console.log(res);
    alert("Login");
    
  },
  err=>{
    alert("something wriong")
  })

}
    
  // this.api.poststudent(this.studentdetailsobj).subscribe(res=>{
  //   console.log(res);
  //   alert("Studetn Details Succesfully !")
    
  // },err=>{
  //   alert("Something went to wrong !!!")
  //   this.formvalue.reset();
  // })


}