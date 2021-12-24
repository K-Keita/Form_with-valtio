import type { VFC } from "react";
import { useRouter } from "next/router";
import { Layout } from "src/layouts/layout";

const Complete: VFC = () => {
  const router = useRouter();
  return (
    <Layout>
      <p className="my-8 text-center">送信が完了しました</p>
      <button
        className="px-2 bg-gray-200 mx-auto block"
        onClick={() => router.push("/")}
      >
        トップへ戻る
      </button>
    </Layout>
  );
};

export default Complete;
