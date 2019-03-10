import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  constructor() { }
student:any={ };
students;
resetAll(){
 this.student={
 id:'',
 firstname:'',
 lastname:'',
 email:'',
 phone:''
  }
}
  ngOnInit() {
    this.resetAll();
   this.students=[{id:1,firstname:'ram',lastname:'rama',email:'ram@gmail.com',phone:'11111111'},
{id:2,firstname:'lakshman',lastname:'ram',email:'lakshman@gmail.com',phone:'222222222'},
{id:3,firstname:'sita',lastname:'ram',email:'sita@gmail.com',phone:'33333333'},
];
  }
  UpdateStudent(){
       var update=false;
       if(this.student.id == 0)
       {
       this.student.id = Math.round(Math.random()*1000);
       }
       for(var i=0;i<this.students.length;i++){
         if(this.student.id == this.students[i].id){
                update=true;
                this.students[i]=this.student;
                break;
         }
       }
       if(!update){
         this.students.push(this.student)
       }
       
      
this.resetAll();
  }
  
  DeleteAllStudent(){
    this.students.splice(this.student);
  }
  SelectStudent(student){
    this.student=student;
      }
  deleteStudent(id){
    var list=[];
    for(var i=0;i<this.students.length;i++){
      if( id != this.students[i].id){
         list.push(this.students[i]);
      }
     
    }
    this.students=list;
  }
  
  }
  

