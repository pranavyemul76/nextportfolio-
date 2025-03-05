import { NavbarComponent } from "../components/Navbars";
import Herosection from "../components/Herosection";
export default function Home() {
  return (
    <>
      <header className="fixed top-0 z-50 m-auto w-[96%] py-3 !pt-0 sm:w-full ">
        <NavbarComponent></NavbarComponent>
      </header>
      <main className="relative top-10">
        <Herosection></Herosection>
      </main>
      <footer></footer>
    </>
  );
}
