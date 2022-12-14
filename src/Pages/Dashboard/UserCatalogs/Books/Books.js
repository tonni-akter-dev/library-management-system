import React from 'react';
import { Container } from 'react-bootstrap';
const Books = () => {
    return (
        <div>
            <Container fluid>
                <div className='search-outer'>
                    <div>
                        <form action="" className='search_bar'>
                            <div className="input select input_margin">
                                <select name="">
                                    <option value="">Sort By</option>
                                    <option value="4">Accession No</option>
                                    <option value="1">Title</option>
                                    <option value="2">Author</option>
                                    <option value="5">Publish Year</option>
                                </select>
                            </div>
                        </form>
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
                                <input name="data[Filter][q]" tabindex="0" autofocus="autofocus" type="text" id="FilterQ" />
                            </div>
                            <div className="submit  input_margin">
                                <button className='btn-sm btn btn-dark' type="button">Search</button>
                            </div>
                            <div className="submit input_margin">
                                <button className='btn-sm btn btn-dark' type="button">Clear</button>
                            </div>
                        </form>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Books;