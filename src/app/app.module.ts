import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WarningAlertComponent } from './warning-alert/warning-alert.component';
import { SuccessAlertComponent } from './success-alert/success-alert.component';
import { ServerComponent } from './server/server.component';
import { CheckcompComponent } from './checkcomp/checkcomp.component';
import { RouteModule} from './route/route.module'

@NgModule({
  declarations: [
    AppComponent,
    WarningAlertComponent,
    SuccessAlertComponent,
    ServerComponent,
    CheckcompComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouteModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
