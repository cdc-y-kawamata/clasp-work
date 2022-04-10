import { FormItem } from "../constant";
import { BaseForm } from "./base-form";

export class DeviceForm extends BaseForm {
  type: string | undefined;
  startDate: string | undefined;
  endDate: string | undefined;

  public createBodyText = (namedValues: any): string => {
    this.type = namedValues[FormItem.DEVICE_FORM_TYPE][0];
    this.startDate = namedValues[FormItem.DEVICE_FORM_START_DATE][0];
    this.endDate = namedValues[FormItem.DEVICE_FORM_END_DATE];
    this.timestamp = namedValues[FormItem.FORM_TIME_STAMP][0];
    return this.createBody("機器レンタル申請があります", [
      this.type ?? "",
      `${this.startDate}〜${this.endDate}`,
    ]);
  };
}
