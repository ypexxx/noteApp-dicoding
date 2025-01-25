import React, {useState} from "react";

function Navbar({filterData}) {
    const [searchTerm, setSearchTerm] = useState("");

    const onSearch = (event) => {
        const term = event.target.value;
        setSearchTerm(term);
        filterData({searchTerm, term});
    }    
    return (
        <nav className="bg-slate-200">
            <div className="flex justify-between p-4">
                <h1 className="inline font-bold">Note App</h1>
                <input type="text" placeholder="Cari..." onChange={onSearch} className="border-2 rounded-md border-slate-100 px-2"></input>
            </div>
        </nav>
    )
}
export default Navbar;