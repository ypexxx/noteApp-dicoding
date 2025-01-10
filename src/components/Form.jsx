import { React, useState } from "react";
import Form_Title from "./Form_title";
import Form_Body from "./Form_Body";
import Form_Submit_Button from "./Form_Submit_Button";

function Form({onAddContentHandler}) {
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");

    const onAddTitle = (event) => {
        setTitle(event.target.value);
    }

    const onAddBody = (event) => {
        setBody(event.target.value);
    }

    const onSubmitHandler = (event) => {
        event.preventDefault();
        onAddContentHandler({title, body});
    } 

    return (
        <div className='container mb-10'>
            <div className='flex justify-center'>
                <div className=''>
                    <h1>Form Input</h1>
                    <form action='' className='container md:min-w-[768px]' onSubmit={onSubmitHandler}>
                        <Form_Title onAddTitle={onAddTitle}/>
                        <Form_Body onAddBody={onAddBody}/>
                        <Form_Submit_Button onSubmitHandler={onSubmitHandler}/>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Form;