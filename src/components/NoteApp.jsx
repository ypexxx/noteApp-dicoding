import React, { useState } from "react";
import { getInitialData } from "../utils";
import NoteBox_List from "./NoteBox_List";
import Form from "./Form";

function NoteApp() {
    const datas = getInitialData();
    return (
        <div className='container xl:mx-auto'>
            <Form/>
            <NoteBox_List datas={datas} />
        </div>
    );
}

export default NoteApp;