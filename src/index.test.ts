import { main } from ".";

PropertiesService.getScriptProperties = jest.fn().mockImplementation(() => ({
  getProperties: jest.fn(() => ({
    CHATWORK_API_TOKEN: "apiToken",
    INQUIRY_ROOM_ID: "inquiry-room",
    DEVICE_ROOM_ID: "device-room",
  })),
}));
UrlFetchApp.fetch = jest.fn();

describe("main", () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let e: any;
  afterEach(() => {
    jest.clearAllMocks();
  });
  describe("問い合わせフォームの場合", () => {
    beforeEach(() => {
      SpreadsheetApp.getActiveSpreadsheet = jest
        .fn()
        .mockImplementation(() => ({
          getName: jest.fn(() => "問い合わせフォーム（回答）"),
        }));
      e = {
        namedValues: {
          "お問い合わせ種別（選択式）": ["ログインについて"],
          問い合わせ内容: ["ログインできません"],
          タイムスタンプ: ["2022/04/09 15:00"],
        },
      };
    });
    it("ChatWorkへ適切な内容を飛ばしている", () => {
      main(e);
      expect(UrlFetchApp.fetch).toBeCalledTimes(1);
      expect(UrlFetchApp.fetch).toBeCalledWith(
        "https://api.chatwork.com/v2/rooms/inquiry-room/messages",
        {
          headers: { "X-ChatWorkToken": "apiToken" },
          method: "post",
          payload: {
            body: "お問い合わせがありました\nログインについて\nログインできません\n2022/04/09 15:00",
          },
        }
      );
    });
  });
  describe("機器レンタルフォームの場合", () => {
    beforeEach(() => {
      SpreadsheetApp.getActiveSpreadsheet = jest
        .fn()
        .mockImplementation(() => ({
          getName: jest.fn(() => "機器レンタル依頼フォーム（回答）"),
        }));
      e = {
        namedValues: {
          機器の種類: ["スマートフォン"],
          レンタル開始日: ["2022/04/01"],
          レンタル終了日: ["2022/05/01"],
          タイムスタンプ: ["2022/04/09 15:00"],
        },
      };
    });
    it("ChatWorkへ適切な内容を送信している", () => {
      main(e);
      expect(UrlFetchApp.fetch).toBeCalledTimes(1);
      expect(UrlFetchApp.fetch).toBeCalledWith(
        "https://api.chatwork.com/v2/rooms/device-room/messages",
        {
          headers: { "X-ChatWorkToken": "apiToken" },
          method: "post",
          payload: {
            body: "機器レンタル申請があります\nスマートフォン\n2022/04/01〜2022/05/01\n2022/04/09 15:00",
          },
        }
      );
    });
  });
  describe("フォーム経由じゃない場合（eが入ってこない）", () => {
    beforeEach(() => {
      SpreadsheetApp.getActiveSpreadsheet = jest
        .fn()
        .mockImplementation(() => ({
          getName: jest.fn(),
        }));
      e = {};
    });
    it("何も呼ばれない", () => {
      main(e);
      expect(SpreadsheetApp.getActiveSpreadsheet).not.toBeCalled();
      expect(UrlFetchApp.fetch).not.toBeCalled();
    });
  });
});
