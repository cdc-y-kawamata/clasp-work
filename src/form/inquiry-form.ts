import { FormItem } from "../constant";
import { BaseForm } from "./base-form";

export class InquiryForm extends BaseForm {
  private readonly type: string;
  private readonly text: string;
  constructor(formValues: any) {
    super();
    this.type = formValues[FormItem.INQUIRY_FORM_TYPE][0];
    this.text = formValues[FormItem.INQUIRY_FORM_TEXT][0];
    this.timestamp = formValues[FormItem.FORM_TIME_STAMP][0];
  }

  public createBodyText(): string {
    return this.createBody("お問い合わせがありました", [this.type, this.text]);
  }
}
