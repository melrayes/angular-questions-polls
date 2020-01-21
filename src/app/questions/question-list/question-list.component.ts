import {Component, OnInit} from "@angular/core";
import {Question} from "../model/question.model";
import {QuestionService} from "../service/question.service";

@Component({
  selector: 'app-question-list',
  templateUrl: 'question-list.component.html',
  styleUrls: ['question-list.component.css']
})
export class QuestionListComponent implements OnInit {
  questions: Question[];

  constructor(private questionService: QuestionService) {
  }

  ngOnInit() {
    this.questionService.getQuestions().subscribe(questions => {
      this.questions = questions;
    });
  }
}
