import { Component  } from '@angular/core';
import {Http,Response} from '@angular/Http';
import{Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {TebgmService} from '../app.service';
import {Router} from '@angular/router';
import {Employee} from 'app/Employee/Employee';
@Component({
    selector : 'Employee-Registration',
    templateUrl: 'app/Employee/Employee.Registration.component.html'
  
})
export class EmployeeRegistrationComponent
{

  
  errorMessage: string;
  msg:string;
 employee : Employee = new  Employee();
  
    constructor( private tebgService : TebgmService, private router: Router)
    {
         console.log('hi ! i am in the Emp Registration  ');
    }

/**this is method  to save emp record  */
    empRegistrationSubmit(value: any) 
    {  
        
       // console.log("value"+ employee.City);
     //  this.tebgService.addEmployeeReg(employee) .subscribe(_res=>{this.errorMessage =_res});     
      
           
           // emp.FirstName='Raaz';
             this.tebgService.addEmployeeReg(this.employee)
                             .subscribe(res=>{
                                 this.msg=res
                                });          
     
    } 
    /**the method for getting bllod group value form database */
    getBloodGroupName()
    {
        console.log('hi! i am here for getting  the blood group');

    }

    /**get the Tavant City Names from database */
    getCity()
    {
        console.log('Hi! I am Here in the getting the tavant City');

    }
} 