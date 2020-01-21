import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {AppRoutingModule} from "./app-routing.module";
import {AppComponent} from "./app.component";
import {QuestionListComponent} from "./questions/question-list/question-list.component";
import {QuestionItemComponent} from "./questions/question-list/question-item/question-item.component";
import {QuestionsComponent} from "./questions/questions.component";
import {QuestionService} from "./questions/service/question.service";
import {QuestionDetailComponent} from "./questions/question-detail/question-detail.component";
import {QuestionEditComponent} from "./questions/question-edit/question-edit.component";
import {HeaderComponent} from "./header/header.component";
import {HttpClientModule} from "@angular/common/http";
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    QuestionListComponent,
    QuestionItemComponent,
    QuestionsComponent,
    QuestionDetailComponent,
    QuestionEditComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [QuestionService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
