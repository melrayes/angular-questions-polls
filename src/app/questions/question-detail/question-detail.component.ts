import {Component, OnInit} from "@angular/core";
import {Question} from "../question.model";
import {ActivatedRoute, Router, Params} from "@angular/router";
import {QuestionService} from "../question.service";

@Component({
  selector: 'app-question-detail',
  templateUrl: './question-detail.component.html',
  styleUrls: ['./question-detail.component.css']
})
export class QuestionDetailComponent implements OnInit {
  question: Question;
  id: number;
  selectedChoice: string = null;

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
