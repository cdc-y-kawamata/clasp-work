export class FormItem {
  static readonly FORM_TIME_STAMP = "タイムスタンプ";
  static readonly INQUIRY_FORM_TYPE = "お問い合わせ種別（選択式）";
  static readonly INQUIRY_FORM_TEXT = "問い合わせ内容";
  static readonly DEVICE_FORM_TYPE = "機器の種類";
  static readonly DEVICE_FORM_START_DATE = "レンタル開始日";
  static readonly DEVICE_FORM_END_DATE = "レンタル終了日";
}

export class SheetName {
  static readonly INQUIRY_FORM_ANSWER = "問い合わせフォーム（回答）";
  static readonly DEVICE_FORM_ANSWER = "機器レンタル依頼フォーム（回答）";
}

export class ConfigConstant {
  static readonly CHATWORK_BASE_URL = "https://api.chatwork.com/v2";
}

export type FormValues = { [key: string]: string[] };
