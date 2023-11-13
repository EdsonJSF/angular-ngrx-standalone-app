export class Todo {
  public id: number;
  public title: string;
  public description: string;
  public complete: boolean;

  constructor(title: string, description: string) {
    this.title = title;
    this.description = description;

    this.id = new Date().getTime();
    this.complete = false;
  }
}
