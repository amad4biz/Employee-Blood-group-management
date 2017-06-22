import {Injectable} from "@angular/core";
import {Http,Response,Headers,RequestOptions} from '@angular/http';
/*import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/Rx';
//import 'rxjs/add/operator/map';

import 'rxjs/Rx';*/
//import 'rxjs/add/operator/map';


import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/Rx';
import 'rxjs/add/operator/map';


//import {Observable} from 'rxjs/Rx';
import {SearchComponent} from './InTray/Search.component';
import {DemandComponent} from './Demands/blood.Demands'
import {EmployeeRegistrationcomponent} from './Employee/Employee.Registration.component';
import {BloodRequesterComponent} from './BloodRequester/Blood.Requester.component';
import {Employee} from './Employee/Employee';
import {BloodDemand} from './Demands/BloodDemand';

@Injectable()

export class TebgmService
{
   employees : Employee[];
   bloodDemand: BloodDemand[];

    model: any = {};

   // empRegistration=EmployeeRegistrationcomponent
   /** app service url  */

private getEmpInTrayURl='';
private getEmpURl='http://localhost:64545/api/tbm/Employees';
private getBloodRequesterURl='http://localhost:64545/api/Blood_Requester_Details';
private getSendNotificationURl=' http://localhost:64545/api/values/getEmpIds';
private postEmployeeRecords='http://localhost:64545/api/tbm/PostNewEmployee';

    /** call class constructor  */
  
    constructor(private http: Http)
    {
     
    }
/**Here ll write the exact method */
    getEmployee()
    {
            console.log('url  '+this.getEmpURl);
            this.http.get(this.getEmpURl)
             .map((res:Response) => res.json())
             .subscribe(employees => this.employees = employees);
             console.log('after result '+this.employees);
             return this.employees;     
    }

/** method for getting the blood Requester Details */
  getBloodDemands()
    {
            console.log('url  '+this.getBloodRequesterURl);
            this.http.get(this.getBloodRequesterURl)
             .map((res:Response) => res.json())
             .subscribe(bloodDemand => this.bloodDemand = bloodDemand);
             console.log('after result '+this.bloodDemand);
             return this.bloodDemand;     
    }

 /**method for sending the array of the string as parameters to pos method   */
    sendNotification(Empids)
    {
         let headers = new Headers({ 'Content-Type': 'application/json' });           
         let options = new RequestOptions({ headers: headers, method: "post" });  
         this.http.get(this.getSendNotificationURl, Empids)
            .map((response:Response)=><any>response.json())
            .do(data=>console.log("All: "+ JSON.stringify(data)))
            .catch(this.handleError);    
    }
    /**Method for adding the employee records */
    
    addEmployeeReg(emp: Employee): Observable<Employee>
     {
          window.alert("GOOD!");
        console.log('hi ! i am here in service ');
        console.log('hi ! i am here in service '+emp);
        let body = JSON.stringify(emp);
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this.http.post(this.postEmployeeRecords,emp)
            .map(res => res.json())
            .catch(this.handleError);
    }


        /**error handling method */
     private handleError(error:Response)
      {
         console.error(error);
         return Observable.throw(error.json().error || 'SrrverError');
      }

}