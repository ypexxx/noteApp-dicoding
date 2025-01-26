import React from "react";
import styled from "styled-components";
import NoteBox_Item_Button from "./NoteBox_Item_Button";

function NoteBox_Item({ title, createdAt, body, id, onDelete, onArchive }) {

  return (
    <div className='notebox_item break-words'>
        <h3 className="font-bold mb-1">{title}</h3>
        <h6 className="mb-1 text-gray-600">{createdAt}</h6>
        <p>{body}</p>
        <NoteBox_Item_Button onDelete={onDelete} onArchive={onArchive} id={id}/>
    </div>
  );
}

export default NoteBox_Item;
