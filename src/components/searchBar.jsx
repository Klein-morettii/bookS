import search from '../assets/icons8-search.svg'

function Search() {
    return(
        <div className='searchGrp'>
            <img className='SearchImg' src={search} alt="serach" />
            <input type="text" name="search" id="search" className='search' placeholder='novels, mangas'></input>
        </div>
    );
}

export default Search;