import type { VFC } from "react";
import { useRouter } from "next/router";

const Complete: VFC = () => {
  const router = useRouter();
  return (
    <main className="p-4 my-20 mx-auto w-80 border">
      <h1 className="text-2xl text-center bg-blue-400">フォーム</h1>
      <p className="my-8 text-center">送信が完了しました</p>
      <button
        className="px-2 bg-gray-200 mx-auto block"
        onClick={() => router.push("/")}
      >
        トップへ戻る
      </button>
    </main>
  );
};

export default Complete;
