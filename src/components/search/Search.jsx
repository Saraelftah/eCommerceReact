import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./search.css";

function Search({ onSearch }) {
  function hadleSearch(e) {
    const query = e.target.value;
    onSearch(query);
  }

  return (
    <>
      <div className="search-container py-5 container">
        <form className="w-75">
          <div className="d-flex">
            <div className="position-relative w-75 d-flex align-items-center">
              <span className="position-absolute search-icon">
                <FontAwesomeIcon icon={faSearch} />
              </span>
              <input
                type="text"
                name="search"
                id="search"
                placeholder="Search products...."
                autoComplete="off"
                className="py-3 px-3 rounded-5  w-100 border-0 shadow-lg  search-input"
                onChange={hadleSearch}
              />
            </div>

            <div>
              <button
                className="btn btn-primary ms-3 rounded-5 py-3 px-5"
                onClick={(e) => e.preventDefault()}
              >
                Search
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default Search;
