export class Todo {
  public id: number;
  public title: string;
  public body: string;
  public complete: boolean;

  constructor(title: string, body: string) {
    this.title = title;
    this.body = body;

    this.id = new Date().getTime();
    this.complete = false;
  }
}
