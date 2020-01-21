import {Injectable} from "@angular/core";
import {Resolve, ActivatedRouteSnapshot, RouterStateSnapshot} from "@angular/router";
import {Question} from "./question.model";
import {QuestionService} from "./question.service";

@Injectable({providedIn: 'root'})
export class QuestionsResolverService implements Resolve<Question[]> {
  constructor(private questionService: QuestionService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.questionService.getQuestions();
  }
}
