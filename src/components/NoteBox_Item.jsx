import React from "react";
import NoteBox_Item_Button from "./NoteBox_Item_Button";

function NoteBox_Item({ key, title, body }) {
  return (
    <div className='notebox_item'>
        <h3>{title}</h3>
        <p>{body}</p>
        <NoteBox_Item_Button />
    </div>
  );
}

export default NoteBox_Item;
