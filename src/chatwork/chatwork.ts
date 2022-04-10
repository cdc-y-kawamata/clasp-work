export class ChatWork {
  baseUrl = "https://api.chatwork.com/v2";
  apiToken =
    PropertiesService.getScriptProperties().getProperties()[
      "CHATWORK_API_TOKEN"
    ];
  roomId = PropertiesService.getScriptProperties().getProperties()["ROOM_ID"];

  public sendMessage = (
    message: string
  ): GoogleAppsScript.URL_Fetch.HTTPResponse => {
    const options: GoogleAppsScript.URL_Fetch.URLFetchRequestOptions = {
      headers: { "X-ChatWorkToken": this.apiToken },
      method: "post",
      payload: { body: message },
    };
    const result = UrlFetchApp.fetch(
      `${this.baseUrl}/rooms/${this.roomId}/messages`,
      options
    );

    return JSON.parse(result.getContentText());
  };
}
