import { ChatWork } from "./chatwork/chatwork";
import { InquiryForm } from "./form/inquiry-form";
import { DeviceForm } from "./form/device-form";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const main = (e: any) => {
  if (!e.namedValues) return;
  const sheetName = SpreadsheetApp.getActiveSpreadsheet().getName();
  const properties = PropertiesService.getScriptProperties().getProperties();
  const chatwork = new ChatWork(properties.CHATWORK_API_TOKEN);

  let body: string;
  switch (sheetName) {
    case "問い合わせフォーム（回答）":
      body = new InquiryForm(e.namedValues).createBodyText();
      chatwork.sendMessage(properties.INQUIRY_ROOM_ID, body);
      break;
    case "機器レンタル依頼フォーム（回答）":
      body = new DeviceForm(e.namedValues).createBodyText();
      chatwork.sendMessage(properties.DEVICE_ROOM_ID, body);
      break;
    default:
      break;
  }
};
