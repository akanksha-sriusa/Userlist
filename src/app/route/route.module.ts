import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router'; 
import { SuccessAlertComponent } from '../success-alert/success-alert.component';
import { WarningAlertComponent } from '../warning-alert/warning-alert.component';


const routes: Routes = [  
  { path: 'success', component: SuccessAlertComponent },  
  { path: 'warning', component: WarningAlertComponent },  
];  

@NgModule({  
  imports: [RouterModule.forRoot(routes)],  
  exports: [RouterModule]  
})
export class RouteModule { }
