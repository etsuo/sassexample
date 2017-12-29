export class Referral {
  description: string;
  name: string;
  title: string;
  url: string;

  static fromJson(json: any): Referral {
    json = json || {};

    const obj = new Referral();

    obj.description = json.description;
    obj.name = json.name;
    obj.title = json.title;
    obj.url = json.url;

    return obj;
  }
}
