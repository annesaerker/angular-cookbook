import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatButtonModule, MatCheckboxModule, MatInputModule} from '@angular/material';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatFormFieldModule} from '@angular/material/form-field';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatSelectModule} from '@angular/material/select';


import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { MyProfileComponent } from './admin/my-profile/my-profile.component';
import { AuthGuardService } from './auth-guard.service';
import { AuthService } from './auth.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PiecesComponent } from './pieces/pieces.component';
import { CreativesComponent } from './creatives/creatives.component';
import { AboutComponent } from './about/about.component';
import { MyPiecesComponent } from './admin/my-pieces/my-pieces.component';
import { AdmitPieceComponent } from './admin/admit-piece/admit-piece.component';
import { SignOutComponent } from './admin/sign-out/sign-out.component';
import { ServiceChatComponent } from './admin/service-chat/service-chat.component';
import { SignUpComponent } from './sign-up/sign-up.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminComponent,
    MyProfileComponent,
    PiecesComponent,
    CreativesComponent,
    AboutComponent,
    MyPiecesComponent,
    AdmitPieceComponent,
    SignOutComponent,
    ServiceChatComponent,
    SignUpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule, 
    MatCheckboxModule, 
    MatToolbarModule, 
    MatFormFieldModule, 
    MatInputModule, 
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    MatSelectModule
  ],
  providers: [AuthGuardService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
