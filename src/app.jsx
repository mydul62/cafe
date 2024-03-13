import Navbar from "./components/header/Navbar";
import Items from "./components/Items/Items";
import React, { useState, useEffect } from "react";
import Card from "./components/Card";
export function App() {
  const [itemsData, setItemsData] = useState([]);
  const [cardDatas, setCardData] = useState([]);
  const [readingTime, setreadingTime] = useState(0);

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setItemsData(data));
  }, []);

  const handleCardAdd=(cardData)=>{
    let newCardData = [...cardDatas,cardData]
    setCardData(newCardData)
    let newtime =readingTime + cardData.reading_time;
    setreadingTime(newtime);
    
  }
  return (
    <>
      <div className=" max-w-7xl mx-auto">
        <Navbar></Navbar>
        <hr className=" mb-6" />
        <div className="lg:grid grid-cols-1 flex flex-col-reverse  lg:grid-cols-6 gap-6">
          <Items handleCardAdd={handleCardAdd} itemsData={itemsData}></Items>
          <div className=" col-span-full lg:col-span-2 space-y-6">
        <Card readingTime={readingTime} cardDatas={cardDatas}></Card>
        </div>
        </div>
      </div>
    </>
  );
}
