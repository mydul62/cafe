import BlogItem from "./BlogItem";
const Items = ({itemsData,handleCardAdd}) => {
  return (
    <>
      <div className="col-span-4">
        {itemsData.map((item) => (
          <BlogItem handleCardAdd={handleCardAdd} key={item.id} blogItemData={item} />
        ))}
      </div>
    </>
  );
};

export default Items;
