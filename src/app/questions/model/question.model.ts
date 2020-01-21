export class Question {
  public question: string;
  public url: string;
  public publishedDate: string;
  public choices: Choice[];

  constructor(question: string, url: string, publishedDate: string, choices: Choice[]) {
    this.question = question;
    this.url = url;
    this.publishedDate = publishedDate;
    this.choices = choices;
  }
}

export class Choice {
  public choice: string;
  public votes: number;
  public url: string;


  constructor(choice: string, votes: number, url: string) {
    this.choice = choice;
    this.votes = votes;
    this.url = url;
  }
}
