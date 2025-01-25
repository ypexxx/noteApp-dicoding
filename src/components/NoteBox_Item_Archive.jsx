import React from "react";
import NoteBox_Item_Button_Archive from "./NoteBox_Item_Button_Archive";

function NoteBox_Item_Archive({ title, body, id, onDelete, onUnArchive }) {

  return (
    <div className='notebox_item'>
        <h3>{title}</h3>
        <p>{body}</p>
        <NoteBox_Item_Button_Archive onDelete={onDelete} onUnArchive={onUnArchive} id={id}/>
    </div>
  );
}

export default NoteBox_Item_Archive;
