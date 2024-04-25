import Sidebar from "../components/Sidebar";
import Center from "../components/Center";
import { RecoilRoot } from "recoil";

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
