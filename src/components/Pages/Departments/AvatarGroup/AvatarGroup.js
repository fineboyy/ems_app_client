import React from "react";
import { useNavigate } from "react-router-dom";

import profile_img from "../../../../images/default-img.jpg";
import "./AvatarGroup.css";
const AvatarGroup = ({ members }) => {

  const navigate = useNavigate()
  const returnAvatars = () => {
    if (members.length) {
      return (
        <div className="AvatarGroup">
          {members.map((member) => (
            <div className="avatar" key={member._id + "-avatar"} onClick={()=> navigate(`/employees/${member._id}`)}>
              <img src={member.photo ? member.photo : profile_img} key={member._id+ "-avatar-photo"} alt="" />
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
