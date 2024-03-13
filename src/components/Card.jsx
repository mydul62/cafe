const Card = ({ cardDatas,readingTime }) => {
  return (
    <div>
      <div className="mb-6 py-5 px-10 bg-[#6047EC1A] rounded-xl">
        <h2 className="text-center text-[#6047EC] text-xl font-bold">
          Spent time on read : {readingTime} min
        </h2>
      </div>
      <div className="p-[30px] bg-[#1111110D] space-y-6 rounded-xl">
        <h2 className="text-[#111111] font-bold text-2xl">
          Bookmarked Blogs :{cardDatas.length}
        </h2>
        <div className="space-y-6">
          {cardDatas.map((card, index) => {
            return (
              <div key={index} className="bg-[#FFFFFF] p-5 rounded-xl">
                <p>{card.title}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Card;
