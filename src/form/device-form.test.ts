import { DeviceForm } from "./device-form";

const namedValuesMock = {
  機器の種類: ["スマートフォン"],
  レンタル開始日: ["2022/04/01"],
  レンタル終了日: ["2022/04/30"],
  タイムスタンプ: ["2022/04/10 15:00"],
};
describe("DeviceForm", () => {
  describe("本文作成", () => {
    it("期待通りの結果", () => {
      const text = new DeviceForm(namedValuesMock).createBodyText();
      expect(text).toBe(
        "機器レンタル申請があります\nスマートフォン\n2022/04/01〜2022/04/30\n2022/04/10 15:00"
      );
    });
  });
});
