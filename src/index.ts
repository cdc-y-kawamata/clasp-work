import { ChatWork } from "./chatwork/chatwork";
import { InquiryForm } from "./form/inquiry-form";
import { DeviceForm } from "./form/device-form";
import { SheetName } from "./constant";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const main = (e: any) => {
  if (!e.namedValues) return;
  let sheetName: string;
  let properties: { [key: string]: string };

  try {
    sheetName = SpreadsheetApp.getActiveSpreadsheet().getName();
    properties = PropertiesService.getScriptProperties().getProperties();
  } catch (e) {
    console.log(e);
  }
  if (properties) {
    const chatwork = new ChatWork(properties.CHATWORK_API_TOKEN);
  }

  // プロパティがない場合
  // メッセージがない場合

  let body: string;

  switch (sheetName) {
    case SheetName.INQUIRY_FORM_ANSWER:
      body = new InquiryForm(e.namedValues).createBodyText();
      chatwork.sendMessage(properties.INQUIRY_ROOM_ID, body);
      break;
    case SheetName.DEVICE_FORM_ANSWER:
      body = new DeviceForm(e.namedValues).createBodyText();
      chatwork.sendMessage(properties.DEVICE_ROOM_ID, body);
      break;
    default:
      break;
  }
};
