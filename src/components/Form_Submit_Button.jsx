import React from "react";

function Form_Submit_Button({onSubmitHandler}) {
    return (
        <div className='flex justify-center'>
            <button className='bg-orange-200 px-4 py-2 m-4 rounded-2xl' onClick={onSubmitHandler}>Add Note!</button>
        </div>
    );
}

export default Form_Submit_Button;