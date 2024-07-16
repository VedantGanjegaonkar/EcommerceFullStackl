import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'user',loadChildren:()=>import('./authentication/authentication.module').then(m=>m.AuthenticationModule)},
  {path:'pages',loadChildren:()=>import('./page/page.module').then(m=>m.PageModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
