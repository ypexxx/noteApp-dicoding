import React from "react";
import NoteBox_Item_Button from "./NoteBox_Item_Button";

function NoteBox_Item({ dataObj }) {
  return (
    <div className='notebox_item'>
      <li className="">
        <h1>{dataObj.title}</h1>
        <p>{dataObj.createdAt}</p>
        <p>{dataObj.body}</p>
        <NoteBox_Item_Button />
      </li>
    </div>
  );
}

export default NoteBox_Item;
