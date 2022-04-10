export class BaseForm {
  timestamp: string | undefined;

  createBody(title: string, bodys: string[]): string {
    bodys.push(this.timestamp ?? "");
    let text = title + "\n";
    bodys.forEach((body) => {
      text += body + "\n";
    });
    return text.slice(0, -1);
  }
}
