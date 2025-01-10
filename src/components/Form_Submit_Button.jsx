import React from "react";

function Form_Submit_Button({onSubmitHandler}) {
    return (
        <div>
            <button className='border-solid border-black border-2' onClick={onSubmitHandler}>Kirim!</button>
        </div>
    );
}

export default Form_Submit_Button;