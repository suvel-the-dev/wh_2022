import React from 'react';
import search from '../../asset/icon/search.png';
import './style.css';

const SearchBar = () => {
    return (
        <div className='searchbar'>
            <input />
            <button>
                <img src={search} />
            </button>
        </div>
    )
}

export default SearchBar
