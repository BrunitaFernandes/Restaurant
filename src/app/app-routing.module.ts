import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RstArticle } from './shared/rst-article/rst.article.component';
import { RstForm } from './shared/rst-form/rst-form.component';


const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  declarations: [RstArticle, RstForm],
  exports: [RouterModule, RstArticle, RstForm]
})
export class AppRoutingModule { }
