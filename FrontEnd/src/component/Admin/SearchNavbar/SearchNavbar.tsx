import React from "react";

type Props = {};

const SearchNavbar = (props: Props) => {
    
  return (
    <form className="d-none d-md-inline-block form-inline ms-auto me-0 me-md-3 my-2 my-md-0">
      <div className="input-group">
        <input
          className="form-control"
          type="text"
          placeholder="Search for..."
          aria-label="Search for..."
          aria-describedby="btnNavbarSearch"
        />
       
      </div>
    </form>
  );
};

export default SearchNavbar;
