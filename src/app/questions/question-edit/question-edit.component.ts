import {Component, OnInit} from "@angular/core";
import {ActivatedRoute, Router} from "@angular/router";
import {QuestionService} from "../question.service";
import {FormGroup, FormArray, Validators, FormControl} from "@angular/forms";

@Component({
  selector: 'app-question-edit',
  templateUrl: './question-edit.component.html',
  styleUrls: ['./question-edit.component.css']
})
export class QuestionEditComponent implements OnInit {
  questionForm: FormGroup;

  constructor(private route: ActivatedRoute,
              private questionService: QuestionService,
              private router: Router) {
  }

  ngOnInit() {
    this.initForm();
  }

  onSubmit() {
    this.questionService.addQuestion(this.questionForm.value);
    this.onCancel();
  }

  onAddChoice() {
    (<FormArray>this.questionForm.get('choices')).push(
      new FormGroup({
        choice: new FormControl(null, Validators.required)
      })
    );
  }

  onDeleteChoice(index: number) {
    (<FormArray>this.questionForm.get('choices')).removeAt(index);
  }

  onCancel() {
    this.router.navigate(['../'], {relativeTo: this.route});
  }

  private initForm() {
    let question = '';
    let questionChoices = new FormArray([], Validators.required);

    this.questionForm = new FormGroup({
      question: new FormControl(question, Validators.required),
      choices: questionChoices
    });
  }
}
