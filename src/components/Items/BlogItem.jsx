import React from "react";

const BlogItem = ({ blogItemData,handleCardAdd }) => {
  return (
    <div>
      <div class="card  shadow-xl">
        <figure>
          <img src={blogItemData.cover} alt="Shoes" />
        </figure>
        <div class="card-body">
          <div className=" flex justify-between">
            <div className=" flex gap-2">
              <div>
                <img className=" w-10" src={blogItemData.author_img} alt="" />
              </div>
              <div>
                <h3 className=" text-xl font-bold">{blogItemData.author_name}</h3>
                <h5>{blogItemData.posted_date}</h5>
              </div>
            </div>
            <div>
              <h5>{blogItemData.reading_time} min read </h5>
            </div>
          </div>
          <div className=" space-y-5">
            <p className=" text-4xl font-semibold">
              {blogItemData.title}
            </p>
            <div className=" flex gap-3">
              <span>{blogItemData.hashtags[0]}</span>
              <span>{blogItemData.hashtags[1]}</span>
            </div>
            <h3 onClick={()=>handleCardAdd(blogItemData)} className=" cursor-pointer underline  text-[#6047EC]">Mark as read</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogItem;
