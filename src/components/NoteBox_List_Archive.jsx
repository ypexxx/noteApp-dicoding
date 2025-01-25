import React, { useState } from "react";
import NoteBox_Item_Archive from "./NoteBox_Item_Archive"; 

function NoteBox_List_Archive( {datas, onDelete, onUnArchive} ) {
    const archivedData = datas.filter(data => data.archived);
    return (
        <div className=''>
            <h3>Archieved Notes</h3>
            <ul className='mx-auto flex flex-wrap justify-center'>
                {archivedData.map((archived) => {
                    return (
                        <li key={archived.id}>
                        <NoteBox_Item_Archive title={archived.title} body={archived.body} onDelete={onDelete} onUnArchive={onUnArchive} id={archived.id} />
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default NoteBox_List_Archive;