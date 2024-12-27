import React from "react";

function NoteBox_Item_Button() {
    function contentButton(event) {
        return buttonText = event.target.textContent;
    }

    return (
        <div>
            <button type='button' onClick={contentButton} className='button_delete'>Delete</button>
            <button type='button' className='button_arsip'>Arsip</button>
        </div>
    );
}

export default NoteBox_Item_Button;