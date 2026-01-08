const SearchBar = () => {
  return (
    <div className="container my-5">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title mb-4">Find Your Next Adventure</h5>
          <form id="ticketForm" className="row g-3">
            <div className="col-md-4">
              <label htmlFor="destination" className="form-label">
                Destination
              </label>
              <input
                type="text"
                className="form-control"
                id="destination"
                placeholder="Where to?"
              />
            </div>
            <div className="col-md-3">
              <label htmlFor="travelDate" className="form-label">
                Date
              </label>
              <input type="date" className="form-control" id="travelDate" />
            </div>
            <div className="col-md-3">
              <label htmlFor="travelers" className="form-label">
                Travelers
              </label>
              <input
                type="number"
                className="form-control"
                id="travelers"
                min="1"
                defaultValue="1"
              />
            </div>
            <div className="col-md-2 d-flex align-items-end">
              <button type="submit" className="btn btn-primary w-100">
                Search
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
