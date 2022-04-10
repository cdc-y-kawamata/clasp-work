import { FormItem } from "../constant";
import { BaseForm } from "./base-form";

export class InquiryForm extends BaseForm {
  private type: string | undefined;
  private text: string | undefined;

  public createBodyText = (namedValues: any): string => {
    this.type = namedValues[FormItem.INQUIRY_FORM_TYPE][0];
    this.text = namedValues[FormItem.INQUIRY_FORM_TEXT][0];
    this.timestamp = namedValues[FormItem.FORM_TIME_STAMP][0];
    return this.createBody("お問い合わせがありました", [
      this.type ?? "",
      this.text ?? "",
    ]);
  };
}
