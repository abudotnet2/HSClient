import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { GuestregistrationComponent } from './guestregistration/guestregistration.component';
import { RoomComponent } from './room/room.component';
import { RoomTypeComponent } from './room-type/room-type.component';
import { StaffRegistrationComponent } from './staff-registration/staff-registration.component';
import { GuestRegistrationComponent } from './guest-registration/guest-registration.component';

@NgModule({
   declarations: [
      AppComponent,
      LoginComponent,
      GuestregistrationComponent,
      RoomComponent,
      RoomTypeComponent,
      StaffRegistrationComponent,
      GuestRegistrationComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
