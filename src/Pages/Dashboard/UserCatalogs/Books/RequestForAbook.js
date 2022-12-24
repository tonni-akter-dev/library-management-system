import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const RequestForAbook = () => {
    return (
        <div>

            <Container fluid>
                <div className='search-outer'>
                    <div>
                        <button className='btn btn-dark'>
                            <Link className='navlink_design2' to="/dashboard/books/requestforAbook">
                                Request for a book
                            </Link>
                        </button>
                    </div>
                    <div className='search_bar_inner'>
                        <form action="" className='search_bar'>
                            <div className="input select input_margin">
                                <select name="">
                                    <option value="">All</option>
                                    <option value="4">Accesion No</option>
                                    <option value="1">Title</option>
                                    <option value="2">Call No</option>
                                    <option value="5">ISBN</option>
                                    <option value="3">Author</option>
                                    <option value="6">Publisher</option>
                                    <option value="11">Category</option>
                                    <option value="7">Tag</option>
                                    <option value="8">Publish Year</option>
                                </select>
                            </div>
                            <div className="input select input_margin">
                                <select id="FilterLibraryBranchId">
                                    <option value="">All Branch</option>
                                    <option value="10">Gulshan</option>
                                    <option value="11">Banani</option>
                                </select>
                            </div>
                            <div className="input text input_margin">
                                <input name="data[Filter][q]" tabIndex="0" autoFocus="autoFocus" type="text" id="FilterQ" />
                            </div>
                            <div className="submit input_margin">
                                <button className='btn-sm btn btn-dark' type="button">Search</button>
                            </div>
                            <div className="submit input_margin">
                                <button className='btn-sm btn btn-dark' type="button">Clear</button>
                            </div>
                        </form>
                    </div>
                </div>
                {/* requested books form */}







            </Container>
        </div>
    );
};

export default RequestForAbook;