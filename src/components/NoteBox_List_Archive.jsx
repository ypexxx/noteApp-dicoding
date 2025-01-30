import React, { useState } from "react";
import NoteBox_Item_Archive from "./NoteBox_Item_Archive"; 

function NoteBox_List_Archive( {datas, onDelete, onUnArchive} ) {
    const archivedData = datas.filter(data => data.archived);

    const datasLength = datas.length;
    let textContent;
    if(datasLength == 0) {
        textContent = (
            <div>
                <h1 className="text-center font-bold text-xl p-4 mt-2">Tidak ada catatan</h1>
            </div>
        )
    } else {
        textContent = (
            <div>
                <h3 className="text-center font-bold text-xl p-4 mt-2">Archieved Notes</h3>
            </div>
        )
    }

    return (
        <div className=''>
            {textContent}
            <ul className='mx-auto flex flex-wrap justify-center'>
                {archivedData.map((archived) => {
                    return (
                        <li key={archived.id}>
                        <NoteBox_Item_Archive title={archived.title} createdAt={archived.createdAt} body={archived.body} onDelete={onDelete} onUnArchive={onUnArchive} id={archived.id} />
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default NoteBox_List_Archive;