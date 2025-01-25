import { React, useState } from "react";
import Form_Title from "./Form_title";
import Form_Body from "./Form_Body";
import Form_Submit_Button from "./Form_Submit_Button";

function Form({onAddContentHandler}) {
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [titleCount, setTitleCount] = useState("15");

    const onAddTitle = (event) => {
        const input = event.target.value;
        setTitle(input);
        const count = 15 - input.length;
        setTitleCount(count);
    }

    const onAddBody = (event) => {
        setBody(event.target.value);
    }

    const onSubmitHandler = (event) => {
        event.preventDefault();
        onAddContentHandler({title, body});
    } 

    return (
        <div className='mb-10 bg-slate-50'>
            <div className='flex justify-center'>
                <div className='w-[100%] px-5'>
                    <h1 className='mb-2 p-2 text-center'>Form Input</h1>
                    <form action='' className='' onSubmit={onSubmitHandler}>
                        <Form_Title onAddTitle={onAddTitle} titleCount={titleCount}/>
                        <Form_Body onAddBody={onAddBody}/>
                        <Form_Submit_Button onSubmitHandler={onSubmitHandler}/>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Form;