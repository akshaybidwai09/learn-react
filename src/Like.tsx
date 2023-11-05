import React, { useState } from "react";
import { AiFillHeart } from "react-icons/ai";
interface Props{
  onClick: ()=> void;
}
const like = ({onClick}: Props) => {
  const [status, setStatus] = useState(false);

  const toggle=()=>{
    setStatus(!status)
    onClick()
  }

  if (status)
    return (
      <AiFillHeart color="#ff6b81" size={20} onClick={toggle} />
    );
  return <AiFillHeart size={20} onClick={toggle} />;
};

export default like;
