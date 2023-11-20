import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
// import { ProductComponent } from './product/product.component';
import { ContactComponent } from './contact/contact.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { Student1Component } from './student1/student1.component';


const routes: Routes = [

{
  path:'',component:HomeComponent
},
{
  path:'About',component:AboutComponent
},


// {
//   path:'Product', component:ProductComponent
// },
{
  path:'Contact',component:ContactComponent
},
{
path:'Student/:studentname',component:Student1Component
},
{
  path:'**',component:PageNotFoundComponent
}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
