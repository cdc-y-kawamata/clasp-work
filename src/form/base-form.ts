export class BaseForm {
  private readonly timestamp: string;
  constructor(timestamp: string) {
    this.timestamp = timestamp;
  }

  createBody(title: string, bodys: string[], infoIdx: number): string {
    bodys.push(this.timestamp);
    let text = title + "\n";
    bodys.forEach((body, idx) => {
      if (idx === infoIdx) text += `[info]${body}[/info]` + "\n";
      else text += body + "\n";
    });
    return text.slice(0, -1);
  }
}
