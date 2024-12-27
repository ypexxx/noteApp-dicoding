import React from "react";
import Form_Title from "./Form_title";
import Form_Description from "./Form_Description";
import Form_Submit_Button from "./Form_Submit_Button";

function Form() {
    return (
        <div className='container mb-10'>
            <div className='flex justify-center'>
                <div className=''>
                    <h1>Form Input</h1>
                    <form action='' className='container md:min-w-[768px]'>
                        <Form_Title/>
                        <Form_Description/>
                        <Form_Submit_Button/>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Form;