import Herosection from "./components/home/Herosection";
import Categroycarousel from "./components/home/Categroycarousel";

export default function Home() {
  return (
    <div className="px-[80px] max-xl:px-4 max-md:px-1 space-y-2 pb-20  max-w-[1900px] m-auto ">
      <Herosection />
      <hr />
      <Categroycarousel />
    
    </div>
  );
}
