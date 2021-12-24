import { useRouter } from "next/router";
import type { VFC } from "react";
import { Layout } from "src/layouts/layout";

const Complete: VFC = () => {
  const router = useRouter();
  return (
    <Layout>
      <p className="my-8 text-center">送信が完了しました</p>
      <button
        className="block px-2 mx-auto bg-gray-200"
        onClick={() => {return router.push("/")}}
      >
        トップへ戻る
      </button>
    </Layout>
  );
};

export default Complete;
