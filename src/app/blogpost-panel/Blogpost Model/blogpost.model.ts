export class Blogpost {
  // tslint:disable-next-line:variable-name
  private _id: number;
  // tslint:disable-next-line:variable-name
  private _title: string;
  // tslint:disable-next-line:variable-name
  private _creationTimestamp: Date;
  // tslint:disable-next-line:variable-name
  private _updateTimestamp: Date;
  // tslint:disable-next-line:variable-name
  private _blurb: string;
  // tslint:disable-next-line:variable-name
  private _fulltext: string;
  // tslint:disable-next-line:variable-name
  private _username: string;
  // tslint:disable-next-line:variable-name
  private _imagelink: string;
  // tslint:disable-next-line:variable-name
  private _tags: Set<string>;


  constructor(title: string, updateTimestamp: Date, blurb: string, imagelink: string) {
    this._title = title;
    this._updateTimestamp = updateTimestamp;
    this._blurb = blurb;
    this._imagelink = imagelink;
  }

// constructor(id: number, title: string, creationTimestamp: Date, updateTimestamp: Date,
  //             blurb: string, fulltext: string, username: string, imagelink: string, tags: Set<string>) {
  //   this._id = id;
  //   this._title = title;
  //   this._creationTimestamp = creationTimestamp;
  //   this._updateTimestamp = updateTimestamp;
  //   this._blurb = blurb;
  //   this._fulltext = fulltext;
  //   this._username = username;
  //   this._imagelink = imagelink;
  //   this._tags = tags;
  // }


  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get title(): string {
    return this._title;
  }

  set title(value: string) {
    this._title = value;
  }

  get creationTimestamp(): Date {
    return this._creationTimestamp;
  }

  set creationTimestamp(value: Date) {
    this._creationTimestamp = value;
  }

  get updateTimestamp(): Date {
    return this._updateTimestamp;
  }

  set updateTimestamp(value: Date) {
    this._updateTimestamp = value;
  }

  get blurb(): string {
    return this._blurb;
  }

  set blurb(value: string) {
    this._blurb = value;
  }

  get fulltext(): string {
    return this._fulltext;
  }

  set fulltext(value: string) {
    this._fulltext = value;
  }

  get username(): string {
    return this._username;
  }

  set username(value: string) {
    this._username = value;
  }

  get imagelink(): string {
    return this._imagelink;
  }

  set imagelink(value: string) {
    this._imagelink = value;
  }

  get tags(): Set<string> {
    return this._tags;
  }

  set tags(value: Set<string>) {
    this._tags = value;
  }
}
