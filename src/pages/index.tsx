import Header from "@/components/header";
import HeaderPagesData from '../data/header-pages.json';
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col px-24 py-8 bg-[#20222C]">
      <Header pages={HeaderPagesData}></Header>
    </main>
  )
}
