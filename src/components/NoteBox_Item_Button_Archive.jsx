import React from "react";

function NoteBox_Item_Button_Archive({onDelete, onUnArchive, id}) {
    return (
        <div>
            <button type='button' onClick={() => onDelete(id)} className='button_delete'>Delete</button>
            <button type='button' onClick={() => onUnArchive(id)} className='button_arsip'>Pindahkan</button>
        </div>
    );
}

export default NoteBox_Item_Button_Archive;