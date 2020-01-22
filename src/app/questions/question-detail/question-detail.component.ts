import {Component, OnInit} from "@angular/core";
import {Question} from "../model/question.model";
import {ActivatedRoute, Router, Params} from "@angular/router";
import {QuestionService} from "../service/question.service";

@Component({
  selector: 'app-question-detail',
  templateUrl: './question-detail.component.html',
  styleUrls: ['./question-detail.component.css']
})
export class QuestionDetailComponent implements OnInit {
  question: Question;
  id: number;
  selectedChoice: string = null;
  totalVotesNumber: number = 0;

  constructor(private questionService: QuestionService,
              private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.question = this.questionService.getQuestion(this.id);
          this.totalVotesNumber = this.question.choices
            .map(c => c.votes).reduce((a, value) => a + value, 0);
        });
  }

  onchange(url) {
    this.selectedChoice = url;
  }

  onSubmit() {
    this.questionService.voteOnChoice(this.selectedChoice);
    this.router.navigate(['/questions']);
  }
}
