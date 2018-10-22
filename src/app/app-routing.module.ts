import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Article } from './shared/article/Article';
import { SendInput } from './shared/form/SendInput';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  declarations: [Article, SendInput],
  exports: [RouterModule, Article, SendInput]
})
export class AppRoutingModule { }
