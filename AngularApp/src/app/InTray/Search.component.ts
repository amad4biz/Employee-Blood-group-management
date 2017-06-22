import { Component } from '@angular/core';
import {Http,Response} from '@angular/Http';
import{Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

// import user defined module and compunents

import {TebgmService} from '../app.service';
import {Employee} from '../Employee/Employee';
import {Router} from '@angular/router';

@Component({
    selector : 'search-Intray',
   templateUrl: 'app/InTray/Search.component.html'
 })

export class SearchComponent 
{
  model: any = {};
  // console.log('after getting employee Records');
  employees: Employee[];
  errMessage :string;
 
  //declared array fro storing the check box selected records 
   getSelected : Array<any> = [];
  

  /**constructor  */
    constructor(private TbService : TebgmService,private router: Router)   
    {
    this.employees = TbService.getEmployee();
    console.log('employees :'+this.employees);
    console.log('hi ! i am here In GetEmployee Method');
    }

/**submit button logic here */
// method for getting the check box selected records in array 
checkedRecords(value) {
        console.log('Hi!.. the selected Records Ids are :'+ value);
         console.log('hi ! i am here In checkedRecords Method');
        if ((<HTMLInputElement>document.getElementById(value)).checked === true) {

          this.getSelected.push(value);
          
              console.log('The Emp id is:' + value); 
          }
        else if ((<HTMLInputElement>document.getElementById(value)).checked === false) {
            let indexx = this.getSelected.indexOf(value);
            this.getSelected.splice(indexx,1)
        }
        console.log(this.getSelected);
    }

    // method for selecteing all the grid view records at a time 
     // for Bulk actions

getAllEmp(a)
     {
        // console.log(a);
        if (a == "all") 
        {
            console.log("yes all");
            this.getSelected = [];
            for (let i = 0; i < this.employees.length; i++) 
            {
                (<HTMLInputElement>document.getElementsByClassName("chkGetChecked")[i]).checked = true;
                this.getSelected.push(this.employees[i].Empid);
            }
        }
        else
        {
           for (let i = 0; i < this.employees.length; i++) 
           {
                (<HTMLInputElement>document.getElementsByClassName("chkGetChecked")[i]).checked = false;
            }
            this.getSelected = [];
        }

        if (a == "none") {
            for (let i = 0; i < this.employees.length; i++) {
                (<HTMLInputElement>document.getElementsByClassName("chkGetChecked")[i]).checked = false;
            }
            this.getSelected = [];
        }
        console.log(this.getSelected);
    }

    //new method below will be 
    //method for send notification
          sendNotification(getSelected)
           {
               
                if (this.getSelected != null)
                 {
                    // this.TbService.sendNotification(getSelected);
                    console.log('Hi ! Method Is Getting values of Employee id ');
                     this.TbService.sendNotification(getSelected);
                   
                    console.log(getSelected);
                    
                 }
                 else{
                     console.log('hay!..i am here in Send notification method');

                  }
           }

} 