import Navbar from "./components/header/Navbar";
import Items from "./components/Items/Items";
export function App() {
  return (
    <>
      <div className=" max-w-7xl mx-auto">
        <Navbar></Navbar>
        <hr className=" mb-6" />
        <Items></Items>
      </div>
    </>
  );
}
