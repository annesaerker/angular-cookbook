import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { MyProfileComponent } from './admin/my-profile/my-profile.component';
import { MyPiecesComponent } from './admin/my-pieces/my-pieces.component';
import { AdmitPieceComponent } from './admin/admit-piece/admit-piece.component';
import { SignOutComponent } from './admin/sign-out/sign-out.component';
import { CreativesComponent } from './creatives/creatives.component';
import { PiecesComponent } from './pieces/pieces.component';
import { AboutComponent } from './about/about.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { AuthGuardService } from './auth-guard.service';
import { ServiceChatComponent } from './admin/service-chat/service-chat.component';

const routes: Routes = [
  { path: 'pieces', component: PiecesComponent },
  { path: 'creatives', component: CreativesComponent },
  { path: 'about', component: AboutComponent },
  { path: 'login', component: LoginComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'admin', canActivate: [AuthGuardService], component: AdminComponent,  
  children: [
    { path: 'my-profile', component: MyProfileComponent }, 
    { path: 'my-pieces', component: MyPiecesComponent }, 
    { path: 'admit-piece', component: AdmitPieceComponent },
    { path: 'service-chat', component: ServiceChatComponent },
    { path: 'sign-out', component: SignOutComponent }
  ]} 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
