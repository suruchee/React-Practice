import React from "react";
import "./StoryReel.css";
import Story from "./Story";

function StoryReel() {
  return (
    <div className="storyReel">
      <Story
        image="https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        profileSrc=""
        title="Suruchi"
      />
      <Story
        image="https://s3-us-west-2.amazonaws.com/uw-s3-cdn/wp-content/uploads/sites/6/2017/11/04133712/waterfall-750x500.jpg"
        profileSrc=""
        title="Suruchi"
      />
      <Story
        image="https://www.iconfinder.com/data/icons/social-icon-4/842/facebook-512.png"
        profileSrc=""
        title="Suruchi"
      />
      <Story
        image="https://scontent.fbwa3-1.fna.fbcdn.net/v/t1.0-9/s1080x2048/118859320_4342485459158857_8424000851216812426_o.jpg?_nc_cat=1&_nc_sid=5b7eaf&_nc_ohc=7wui3xgIinkAX_YaDY6&_nc_ht=scontent.fbwa3-1.fna&tp=7&oh=7d0e2e3cfd251792e247d11f4bdb6ed0&oe=5F7A07AF"
        profileSrc=""
        title="Suruchi"
      />
    </div>
  );
}

export default StoryReel;
