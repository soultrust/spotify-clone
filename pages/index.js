import Sidebar from "../components/Sidebar";
import Center from "../components/Center";
import { RecoilRoot } from "recoil";
import { getSession } from "next-auth/react";

export default function Home() {
  return (
    <div className="bg-black h-screen overflow-hidden">
      <main className="flex">
        <RecoilRoot>
          <Sidebar />
          <Center />
        </RecoilRoot>
      </main>

      <div>spotify build</div>
    </div>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession(context);

  return {
    props: {
      session,
    },
  };
}
