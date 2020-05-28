import { Component, OnInit } from '@angular/core';
import { EmpService } from '../emp.service';
import { Employee } from '../employee';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor(private empser:EmpService,private router:Router) { }
  list:Employee[];
  empl:Employee;
  ngOnInit() {
  }

  ViewEmployees()
  { 
    this.empser.GetAllEmps().subscribe(res=>
      {
        this.list=res;
        console.log(this.list);
      },
      err=>{
        console.log(err);
      });
  }

  AddEmployee(eid:number,ename:string,gen:string,city:string,did:number)
  {
    this.empl=new Employee();
    this.empl.empid=eid;
    this.empl.name=ename;
    this.empl.gender=gen;
    this.empl.newcity=city;
    this.empl.deptid=did;
    this.empser.AddEmp(this.empl).subscribe(res=>{
      alert(" Transaction successfull");
        },err=>{console.log(err)})
  }
}
