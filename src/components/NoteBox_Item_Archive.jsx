import React from "react";
import NoteBox_Item_Button_Archive from "./NoteBox_Item_Button_Archive";

function NoteBox_Item_Archive({ title, createdAt, body, id, onDelete, onUnArchive }) {

  return (
    <div className='notebox_item break-words'>
        <h3 className="font-bold mb-1">{title}</h3>
        <h6 className="mb-1">{createdAt}</h6>
        <p>{body}</p>
        <NoteBox_Item_Button_Archive onDelete={onDelete} onUnArchive={onUnArchive} id={id}/>
    </div>
  );
}

export default NoteBox_Item_Archive;
