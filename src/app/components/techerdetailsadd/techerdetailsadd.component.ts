import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { studentDetailsschema } from '../studetn-details-add/studentDetails.model';
import { ApiService } from 'src/app/shared/api.service';

@Component({
  selector: 'app-techerdetailsadd',
  templateUrl: './techerdetailsadd.component.html',
  styleUrls: ['./techerdetailsadd.component.css']
})
export class TecherdetailsaddComponent {
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
    this.studentdetailsobj.firstname=this.formvalue.value.firstname;
    this.studentdetailsobj.lastname=this.formvalue.value.lastname;
    this.studentdetailsobj.email=this.formvalue.value.email;
    this.studentdetailsobj.mobile=this.formvalue.value.mobile;
    
  
     this.api.poststudent(this.studentdetailsobj).subscribe(res=>{
  
      console.log(res);
      alert("Add Succesfully");
     },err=>{
        alert("somenting Wrong !!!");
        this.formvalue.reset();
     }
    
      
      )
  
    }
}
