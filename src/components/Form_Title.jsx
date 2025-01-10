import React from "react";

function Form_Title({onAddTitle}) {
    return (
        <div className=''>
            <input className='border-black border-2 border-solid rounded-md p-2 w-full mb-2' type='text' id='text' name='text' placeholder='Masukkan Judul' onChange={onAddTitle}></input>
        </div>
    )
}

export default Form_Title;