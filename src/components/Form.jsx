import React from "react";
import Form_Title from "./Form_title";
import Form_Description from "./Form_Description";
import Form_Submit_Button from "./Form_Submit_Button";

function Form() {
    return (
        <div className='max-w-[1024px] my-0 mx-auto'>
            <h1>Form Input</h1>
            <form action=''>
                <Form_Title/>
                <Form_Description/>
                <Form_Submit_Button/>
            </form>
        </div>
    );
}

export default Form;