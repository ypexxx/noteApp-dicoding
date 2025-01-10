import React from "react";

function Form_Body({onAddBody}) {
    return (
        <textarea className='border-solid border-black border-2 rounded-md p-2 h-24 w-full' type='text' id='text' name='text' placeholder='Description' onChange={onAddBody}></textarea>
    );
}

export default Form_Body;