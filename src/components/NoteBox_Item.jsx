import React from "react";
import styled from "styled-components";
import NoteBox_Item_Button from "./NoteBox_Item_Button";

function NoteBox_Item({ title, body, id, onDelete, onArchive }) {

  return (
    <div className='notebox_item'>
        <h3>{title}</h3>
        <p>{body}</p>
        <NoteBox_Item_Button onDelete={onDelete} onArchive={onArchive} id={id}/>
    </div>
  );
}

export default NoteBox_Item;
