import { ChatWork } from "./chatwork/chatwork";

export const main = async (e: any) => {
  await new ChatWork().sendMessage(
    `${e.namedValues["お問い合わせ種別（選択式）"][0]}\n${e.namedValues["問い合わせ内容"][0]}\n${e.namedValues["タイムスタンプ"][0]}`
  );
};
