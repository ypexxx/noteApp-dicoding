import React from "react";

function Form_Body({onAddBody, body}) {
    return (
        <div>
            <textarea className='border-solid border-slate-100 border-2 rounded-md p-2 h-24 w-full' type='text' id='text' name='text' placeholder='Description' value={body} onChange={onAddBody}></textarea>
        </div>
    );
}

export default Form_Body;