import React from "react";

function NoteBox_Item_Button({onDelete, onArchive, id}) {
    return (
        <div>
            <div className='flex mt-3'>
                <button type='button' onClick={() => onDelete(id)} className='button_delete'>Delete</button>
                <button type='button' onClick={() => onArchive(id)} className='button_arsip'>Arsip</button>
            </div>
        </div>
    );
}

export default NoteBox_Item_Button;