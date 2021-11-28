import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdministrationScreenComponent } from './administration-screen/administration-screen.component';
import { BadgeActivityComponent } from './badge-activity/badge-activity.component';
import { HomeScreenComponent } from './home-screen/home-screen.component';
import { LoginScreenComponent } from './login-screen/login-screen.component';
import { UsersComponent } from './users/users.component';


const routes : Routes = [

{path: 'loginScreen', component: LoginScreenComponent},
{path: 'homeScreen', component: HomeScreenComponent},
{path: 'userScreen', component: UsersComponent},
{path: 'adminScreen', component: AdministrationScreenComponent},
{path: 'badgeScreen', component: BadgeActivityComponent}
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
