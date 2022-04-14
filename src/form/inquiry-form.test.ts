import { InquiryForm } from "./inquiry-form";

const namedValuesMock = {
  "お問い合わせ種別（選択式）": ["ログインについて"],
  問い合わせ内容: ["ログインが出来ません"],
  タイムスタンプ: ["2022/04/10 15:00"],
};
describe("InquiryForm", () => {
  describe("本文作成", () => {
    it("期待通りの結果", () => {
      const text = new InquiryForm(namedValuesMock).createBodyText();
      expect(text).toBe(
        "お問い合わせがありました\nログインについて\nログインが出来ません\n2022/04/10 15:00"
      );
    });
  });
});
