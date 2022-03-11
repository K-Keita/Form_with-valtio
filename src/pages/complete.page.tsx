import { useRouter } from "next/router";
import type { VFC } from "react";

const Complete: VFC = () => {
  const router = useRouter();

  return (
    <div className="p-4 my-20 mx-auto w-80 border">
      <p className="my-8 text-center">送信が完了しました</p>
      <button
        className="block px-2 mx-auto bg-gray-200"
        onClick={() => {
          return router.push("/");
        }}
      >
        トップへ戻る
      </button>
    </div>
  );
};

export default Complete;
