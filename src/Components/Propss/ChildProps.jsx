import React from "react";

export const ChildProps = ({ NaamDedo }) => {
  return (
    <div>
      <h3>HEllo i m child Component</h3>
      <h4>Props recived from Parent:{NaamDedo}</h4>
    </div>
  );
};
