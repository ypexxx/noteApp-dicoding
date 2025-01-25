import React from "react";

function Form_Title({onAddTitle, titleCount}) {
    return (
        <div className=''>
            <div className="flex justify-between">
                <span></span>
                <p className="text-slate-500">Sisa Karakter : {titleCount}</p>
            </div>
            <input className='border-slate-100 border-2 border-solid rounded-md p-2 w-full mb-2' type='text' id='text' name='text' placeholder='Masukkan Judul' maxLength="15" onChange={onAddTitle}></input>
        </div>
    )
}

export default Form_Title;