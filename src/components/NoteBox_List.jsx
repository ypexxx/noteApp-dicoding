import React from "react";
import NoteBox_Item from "./NoteBox_Item"; 

function NoteBox_List( {datas} ) {
    return (
        <div className='container'>
            <ul className='mx-auto flex flex-wrap justify-center'>
                {datas.map((data) => (
                    <NoteBox_Item dataObj={data} key={data.id}/>
                ))}
            </ul>
        </div>
    )
}

export default NoteBox_List;