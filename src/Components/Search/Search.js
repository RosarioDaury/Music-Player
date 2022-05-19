import React, { useState } from 'react'
import { DivSearch, SearchBar, User } from './SearchStyles';
import { AiOutlineSearch } from 'react-icons/ai';

export default function Search(props) {
    const [value, setValue] = useState("");

    const handleChange = (e) => {
        setValue(e.target.value);
        props.setSearch(e.target.value);
    }

    return (
        <DivSearch>
            <div className="search-area">
                <SearchBar type="text" placeholder='Search Song...' onChange={handleChange} value={value} />
                <span><AiOutlineSearch style={{ color: "white", width: "23px", height: "23px" }} /></span>
            </div>

            <User>
                <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__480.png" alt="user" />
                <p>User Name</p>
            </User>
        </DivSearch>
    )
}
