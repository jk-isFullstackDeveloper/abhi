import React from 'react'
import './SearchComp.css'
const SearchComp = () => {
    return (
        <>
            <select className="movielist">
                <option selected>ALL MOVIES</option>
                <option>BHAKSHAK</option>
                <option>BOB BISWAS</option>
                <option>GAURAV VERMA INTERVIEW</option>
                <option>DARLINGS</option>
                <option>CLASS OF 83</option>
                <option>BETAAL</option>
                <option>BARD OF BLOOD</option>
                <option>BADLA</option>
                <option>NETLIX</option>
                <option>ZERO</option>
                <option>ITTEFAQ</option>
                <option>JAB HARRY MET SEJAL</option>
                <option>DEAR ZINDAGI</option>
            </select>

            <input className='searchbox' type='text' placeholder='KEYWORD SEARCH' />
        </>
    )
}

export default SearchComp