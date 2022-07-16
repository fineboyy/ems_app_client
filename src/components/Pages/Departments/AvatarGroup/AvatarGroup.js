import React from "react";

import profile_img from "../../../../images/default-img.jpg";
import "./AvatarGroup.css";
const AvatarGroup = ({ members }) => {
  const returnAvatars = () => {
    if (members.length) {
      return (
        <div className="AvatarGroup">
          {members.map((member) => (
            <div className="avatar" key={member._id + "avatar"}>
              <img src={member.photo ? member.photo : profile_img} alt="" />
            </div>
          ))}
          {/* <div className="hidden-avatars">
            x
          </div> */}
        </div>
      );
    } else {
      return " ";
    }
  };
  return returnAvatars();
};

export default AvatarGroup;
