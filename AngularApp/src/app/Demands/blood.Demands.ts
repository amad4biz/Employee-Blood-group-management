import { Component } from '@angular/core';
import {Http,Response} from '@angular/Http';
import{Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

// import user defined module and components

import {TebgmService} from '../app.service';
import {BloodDemand} from '../Demands/BloodDemand';
import {Router} from '@angular/router';

@Component({
    selector : 'Blood-Demand',
   templateUrl: 'app/Demands/blood.Demands.html'
 })

export class DemandComponent 
{
  model: any = {};
  // console.log('after getting employee Records');
  bloodDemands: BloodDemand[];
  errMessage :string;
  

  /**constructor  */
    constructor(private TbService : TebgmService,private router: Router)   
    {
    this.bloodDemands = TbService.getBloodDemands();
    console.log('bloodDemand :'+this.bloodDemands);
    console.log('hi ! i am here In get blood Demands Method');
    }

/**submit button logic here */


} 