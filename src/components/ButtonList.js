import React from "react";
import Button from "./Button";

const ButtonList = () => {
  return (
    <div className="flex ">
      <Button name="All" />
      <Button name="gaming" />
      <Button name="news" />
      <Button name="Dance" />
      <Button name="cooking" />
    </div>
  );
};

export default ButtonList;
