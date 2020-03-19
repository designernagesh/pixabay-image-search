import React from 'react'

const SearchForm = (props) => {
    return(
        <form onSubmit={ props.searchHandle } className="form-row mb-4">
            <input type="text" name="searchInput" className="form-control col-sm-10" /> <button className="col-sm-2 btn-primary">Search</button>
        </form>
    )
}

export default SearchForm