import { React, useState } from "react";
import { getInitialData} from "../utils";
import Navbar from "./Navbar";
import NoteBox_List from "./NoteBox_List";
import NoteBox_List_Archive from "./NoteBox_List_Archive";
import Form from "./Form";
import { data } from "autoprefixer";

function NoteApp() {
    const getDatas = getInitialData();
    const [datas, setDatas] = useState(getDatas);
    const [datasBackup] = useState(datas);

    const createDate = () => {
        const now = new Date();
        const day = now.getDate();
        const month = now.getMonth() + 1;
        const year = now.getFullYear();
        return (`${day}-${month}-${year}`);
    }

    const setId = () => {
        let lastId = datas[datas.length -1].id;
        let currentId = lastId + 1;
        return currentId;
    }

    const onDelete = (id) => {
        const afterDelete = datas.filter(data => data.id !== id);
        setDatas(afterDelete);
    }

    const onArchive = (id) => {
        updateArchiveById(id, true);
    }

    const onUnArchieve = (id) => {
        updateArchiveById(id, false);
    }
    
    const updateArchiveById = (id, newArchiveValue) => {
        const mapArchive = datas.map(item => item.id === id ? {...item, archived: newArchiveValue} : item)
        setDatas(() => [
            ...mapArchive,
        ])
    }

    const filterData = ({searchTerm, term}) => {
        const filterData = datas.filter((item) => item.title.toLowerCase().includes(searchTerm.toLowerCase()))
        if(term.trim() === "") {
            setDatas(datasBackup);
        } else {
            setDatas(filterData);
        }
    }

    const onAddContentHandler = ({title, body}) => {
        setDatas((prevState) => [
                    ...prevState,
                    {
                        id: setId(),
                        title,
                        body,
                        createdAt: createDate(),
                        archived: false,
                        
                    }
                ]
        )
    }
    return (
        <div className=''>
            {console.log(datas)}
            <Navbar filterData={filterData}/>
            <Form onAddContentHandler={onAddContentHandler}/>
            <NoteBox_List datas={datas} onDelete={onDelete} onArchive={onArchive}/>
            <NoteBox_List_Archive datas={datas} onDelete={onDelete} onUnArchive={onUnArchieve}/>
        </div>
    );
}

export default NoteApp;