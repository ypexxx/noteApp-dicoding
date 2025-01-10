import React from "react";
import NoteBox_Item from "./NoteBox_Item"; 

function NoteBox_List( {datas} ) {
    return (
        <div className='container notebox_list'>
            <ul className='mx-auto flex flex-wrap justify-center'>
                {/* {datas.map((data) => {
                    return (
                        <li key={data.id}>
                        <NoteBox_Item title={data.title} body={data.body}/>
                        </li>
                    )
                })} */}
            </ul>
        </div>
    )
}

export default NoteBox_List;