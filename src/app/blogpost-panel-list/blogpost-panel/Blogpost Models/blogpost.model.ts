export class Blogpost {
  public id: number;
  public title: string;
  public creationTimestamp: Date;
  public updateTimestamp: Date;
  public blurb: string;
  public fulltext: string;
  public username: string;
  public imageLink: string;
  public tags: Set<string>;

  constructor() {}
}
