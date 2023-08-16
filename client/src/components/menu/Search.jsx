import React from 'react';

const Search = (props) => {

    const SearchUser = (e) => {
        props.setsearch(e.target.value);
    }
    
    return (
        <>
            <div className="row searchBox">
                <div className="col-sm-12 searchBox-inner">
                    <div className="form-group has-feedback">
                        <input id="searchText" type="text" className="form-control" name="searchText" placeholder="Search" onChange={SearchUser} />
                        <span className="glyphicon glyphicon-search form-control-feedback" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Search