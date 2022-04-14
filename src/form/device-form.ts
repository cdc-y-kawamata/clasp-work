import { FormItem, FormValues } from "../constant";
import { BaseForm } from "./base-form";

export class DeviceForm extends BaseForm {
  private readonly type: string;
  private readonly startDate: string;
  private readonly endDate: string;

  constructor(formValues: FormValues) {
    super(formValues[FormItem.FORM_TIME_STAMP][0]);
    this.type = formValues[FormItem.DEVICE_FORM_TYPE][0];
    this.startDate = formValues[FormItem.DEVICE_FORM_START_DATE][0];
    this.endDate = formValues[FormItem.DEVICE_FORM_END_DATE][0];
  }

  public createBodyText(): string {
    return this.createBody("機器レンタル申請があります", [
      this.type,
      `${this.startDate}〜${this.endDate}`,
    ]);
  }
}
