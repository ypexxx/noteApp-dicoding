import React, { useState } from "react";
import NoteBox_Item from "./NoteBox_Item"; 

function NoteBox_List( {datas, onDelete, onArchive} ) {
    const unArchivedData = datas.filter(data => !data.archived);

    return (
        <div className=''>
            <div>
                <ul className='mx-auto flex flex-wrap justify-center'>
                {unArchivedData.map((data) => {
                    return (
                        <li key={data.id}>
                        <NoteBox_Item title={data.title} createdAt={data.createdAt} body={data.body} onDelete={onDelete} onArchive={onArchive} id={data.id} />
                        </li>
                    )
                })}
                </ul>
            </div>:
        </div>
    )
}

export default NoteBox_List;