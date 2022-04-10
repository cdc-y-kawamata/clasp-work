import { ChatWork } from "./chatwork/chatwork";
import { InquiryForm } from "./form/inquiry-form";
import { DeviceForm } from "./form/device-form";

export const main = (e: any) => {
  if (!e.namedValues) return;
  const sheetName = SpreadsheetApp.getActiveSpreadsheet().getName();
  let body: string;

  if (sheetName === "clasp-work（回答）") {
    body = new InquiryForm().createBodyText(e.namedValues);
  } else if (sheetName === "機器レンタル依頼フォーム（回答）") {
    body = new DeviceForm().createBodyText(e.namedValues);
  } else {
    body = "";
  }

  const result = new ChatWork().sendMessage(body);
  return JSON.stringify(result.getContentText());
};
