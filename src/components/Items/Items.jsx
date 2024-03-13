import React, { useState,useEffect } from 'react';
const Items = () => {
  const [itemsData,setItemsData]=useState([]);
  useEffect(()=>{
    fetch()
  },[])
  return (
   <>
    <div>
      <div className="grid grid-cols-6 gap-6">
          <div className="col-span-4">
            <div class="card  bg-base-100 shadow-xl">
              <figure>
                <img src="../src/assets/1.jpg" alt="Shoes" />
              </figure>
              <div class="card-body">
                <div className=" flex justify-between">
                  <div className=" flex gap-2">
                    <div>
                      <img
                        className=" w-10"
                        src="../src/assets/girl1.jpg"
                        alt=""
                      />
                    </div>
                    <div>
                      <h3 className=" text-xl font-bold">Mr.Rujina</h3>
                      <h5>Mar 14 (4 Days ago)</h5>
                    </div>
                  </div>
                  <div>
                    <h5>05 min read </h5>
                  </div>
                </div>
                <div className=" space-y-5">
                  <p className=" text-4xl font-semibold">
                    How to get your first job as a self-taught programmer
                  </p>
                  <div className=" flex gap-3">
                    <span>#beginners</span>
                    <span>#programming</span>
                  </div>
                  <h3 className=" text-[#6047EC]">Mark as read</h3>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-2 space-y-6">
            <div className=" py-5 px-10 bg-[#6047EC1A] rounded-xl">
              <h2 className=" text-center text-[#6047EC] text-xl font-bold">
                Spent time on read : 177 min
              </h2>
            </div>
            <div className=" p-[30px] bg-[#1111110D] space-y-6">
              <h2 className=" text-[#111111] font-bold text-2xl">
                Bookmarked Blogs : 8
              </h2>
              <div className=" bg-[#FFFFFF] p-5 rounded-xl">
                <p>Master Microsoft Power Platform and Become an In-Demand!</p>
              </div>
              <div className=" bg-[#FFFFFF] p-5 rounded-xl">
                <p>Master Microsoft Power Platform and Become an In-Demand!</p>
              </div>
              <div className=" bg-[#FFFFFF] p-5 rounded-xl">
                <p>Master Microsoft Power Platform and Become an In-Demand!</p>
              </div>
            </div>
          </div>
        </div>
    </div>
   </>
  );
};

export default Items;