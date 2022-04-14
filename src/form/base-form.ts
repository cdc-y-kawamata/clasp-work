export class BaseForm {
  private readonly timestamp: string;
  constructor(timestamp: string) {
    this.timestamp = timestamp;
  }

  createBody(title: string, bodys: string[]): string {
    bodys.push(this.timestamp);
    let text = title + "\n";
    bodys.forEach((body) => {
      text += body + "\n";
    });
    return text.slice(0, -1);
  }
}
