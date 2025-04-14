import { NavbarComponent } from "../components/Navbars";
import HomePage from "../components/HomePage";
export default function Home() {
  return (
    <>
      <header className="fixed top-0 z-50 m-auto w-[96%] py-3 !pt-0 sm:w-full ">
        <NavbarComponent></NavbarComponent>
      </header>
      <main className="relative top-10">
        <HomePage />
      </main>
      <footer></footer>
    </>
  );
}
