import { ConfigConstant } from "../constant";
export class ChatWork {
  private readonly baseUrl: string;
  private readonly apiToken: string;
  constructor(apiToken: string) {
    this.baseUrl = ConfigConstant.CHATWORK_BASE_URL;
    this.apiToken = apiToken;
  }

  public sendMessage(roomId: string, message: string): void {
    const options: GoogleAppsScript.URL_Fetch.URLFetchRequestOptions = {
      headers: { "X-ChatWorkToken": this.apiToken },
      method: "post",
      payload: { body: message },
    };
    const result: GoogleAppsScript.URL_Fetch.HTTPResponse = UrlFetchApp.fetch(
      `${this.baseUrl}/rooms/${roomId}/messages`,
      options
    );
    if (result.getResponseCode() !== 200) console.log(result.getContentText());
  }
}
