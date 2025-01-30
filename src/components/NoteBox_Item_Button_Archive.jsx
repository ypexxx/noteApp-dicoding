import React from "react";

function NoteBox_Item_Button_Archive({onDelete, onUnArchive, id}) {
    return (
        <div>
            <div className='flex mt-3'>
                <button type='button' onClick={() => onDelete(id)} className='button_delete_archive'>Delete</button>
                <button type='button' onClick={() => onUnArchive(id)} className='button_arsip_archive'>Pindahkan</button>
            </div>
        </div>
    );
}

export default NoteBox_Item_Button_Archive;