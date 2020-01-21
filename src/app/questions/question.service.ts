import {Injectable} from "@angular/core";
import {Question, Choice} from "./question.model";
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs/internal/operators";

@Injectable()
export class QuestionService {
  private questions: Question[] = [];
  private api: string = 'https://polls.apiblueprint.org';

  constructor(private http: HttpClient) {
  }

  getQuestion(index: number) {
    return this.questions[index];
  }

  addQuestion(question: Question) {
    let choices: string[] = [];
    question.choices.forEach(item => choices.push(item.choice));
    let body = {
      question: question.question,
      choices: choices
    };

    let postURL = this.api + '/questions';
    this.http
      .post(postURL, JSON.stringify(body))
      .subscribe(response => {
        console.log(response);
      });
  }

  getQuestions() {
    return this.http.get<Question[]>(this.api + '/questions').pipe(
      map(response => {
          let questions: Question[] = [];

          response.forEach(function (value) {
            let choices: Choice[] = [];
            value['choices'].forEach(
              v => choices.push(new Choice(v['choice'], v['votes'], v['url'])));

            if (value['question'] != null && value['question'].length > 0) {
              questions.push(
                new Question(value['question'],
                  value['url'], value['published_at'], choices));
            }

          });
          this.questions = questions;
          return questions;
        }
      )
    );
  }

  voteOnChoice(choiceUrl) {
    let postURL = this.api + choiceUrl;
    this.http
      .post(postURL, {})
      .subscribe(response => {
        console.log(response);
      });
  }
}
