import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatButtonModule, MatCheckboxModule, MatInputModule} from '@angular/material';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatFormFieldModule} from '@angular/material/form-field';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AddRecipeComponent } from './add-recipe/add-recipe.component';
import { AllRecipesComponent } from './all-recipes/all-recipes.component';
import { AdminComponent } from './admin/admin.component';
import { MyRecipesComponent } from './admin/my-recipes/my-recipes.component';
import { MyProfileComponent } from './admin/my-profile/my-profile.component';
import { MyFavoritesComponent } from './admin/my-favorites/my-favorites.component';
import { AllComponent } from './all/all.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AddRecipeComponent,
    AllRecipesComponent,
    AdminComponent,
    MyRecipesComponent,
    MyProfileComponent,
    MyFavoritesComponent,
    AllComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    [MatButtonModule, MatCheckboxModule, MatToolbarModule, MatFormFieldModule, MatInputModule, BrowserAnimationsModule]
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
