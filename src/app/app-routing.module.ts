import {NgModule} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";
import {QuestionsComponent} from "./questions/questions.component";
import {QuestionDetailComponent} from "./questions/question-detail/question-detail.component";
import {QuestionsResolverService} from "./questions/questions-resolver.service";
import {QuestionEditComponent} from "./questions/question-edit/question-edit.component";


const routes: Routes = [
  {path: '', redirectTo: '/questions', pathMatch: 'full'},
  {
    path: 'questions',
    component: QuestionsComponent,
  },
  {
    path: 'questions/new',
    component: QuestionEditComponent,
  },
  {
    path: 'questions/:id',
    component: QuestionDetailComponent,
    resolve: [QuestionsResolverService]
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
