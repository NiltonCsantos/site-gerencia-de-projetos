import About from "./about";
import Food from "./food";
import Services from "./services";
import Store from "./store";
import Culture from "./culture";

export default function Main() {
  return (
    <main>
      <Culture />
      <Food />
      <Services />
      <Store />
      <About />
    </main>
  );
}
