import { React, useState } from "react";
import { getInitialData } from "../utils";
import NoteBox_List from "./NoteBox_List";
import Form from "./Form";

function NoteApp() {
    const getDatas = getInitialData();
    const [datas, setDatas] = useState(getDatas);

    const onAddContentHandler = ({title, body}) => {
        setDatas((prevState) => [
                    ...prevState,
                    {
                        title,
                        body,
                    }
                ]
        )
    }
    return (
        <div className='container xl:mx-auto'>
            {console.log(datas)}
            <Form onAddContentHandler={onAddContentHandler}/>
            <NoteBox_List datas={datas}/>
        </div>
    );
}

export default NoteApp;