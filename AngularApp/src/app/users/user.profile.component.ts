import { Component ,Input } from '@angular/core';
//import {user} from '../shared/models/user';

@Component({
    selector : 'user-profile',
   // templateUrl: 'user.profile.component.html'
   template: `
    <div class="jumbotron">
                 <div class="panel panel-default">
                                      <div class="panel-heading">Users Deatils</div>
                                    <div class="panel-body">
                                          <table border="1px;" border-color="red" class="table table-bordered table-striped">
                                                    <thead>
                                                      <tr>
                                                        <th>Id</th>
                                                        <th>Name</th>
                                                        <th>User Full Name</th>
                                                      </tr>
                                                    </thead>
                                                      <tbody *ngIf="user">
                                                          <tr>
                                                            <td>
                                                            {{ user.id }}</td>
                                                            <td>
                                                            {{ user.Name }} </td>
                                                            <td>
                                                            {{ user.userName }}</td>
                                                          </tr>
                                                      </tbody>
                                            </table> 
                                 </div>
                         </div>
             </div>
    ` 
})
export class UserProfileComponent
{
//@Input () user : user;
} 