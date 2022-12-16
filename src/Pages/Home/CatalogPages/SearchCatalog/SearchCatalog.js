import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import Navigation2 from '../../Navigation/Navigation2/Navigation2';
import './SearchCatalog.css';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { TableBody, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
        borderleft: 1
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));
const SearchCatalog = () => {
    const [searchText, setSearchText] = useState('');

    const SearchValue = (e) => {
        const value = e.target.value;
        console.log(value);
        setSearchText(value);
    }
    const handleSearchButton = (e) => {
        console.log("submit searching value");
    }
    const [allBooks, setAllBooks] = useState([]);
    useEffect(() => {
        const url = `http://localhost:5000/allBooks`;
        fetch(url)
            .then((res) => res.json())
            .then((data) => setAllBooks(data));
    }, []);


    return (
        <div>
            <Navigation2 />
            <Container>
                <div className='search-outer'>
                    <div>
                        <h2>Search</h2>
                    </div>
                    <div className='search_bar_inner'>
                        <form action="" className='search_bar'>
                            <div className="input select input_margin">
                                <select name="">
                                    <option value="">All</option>
                                    <option value="4">Audio/Visuals</option>
                                    <option value="1">Books</option>
                                    <option value="2">E-Books</option>
                                    <option value="5">E-Journals</option>
                                    <option value="3">Journals</option>
                                    <option value="6">News Clippings</option>
                                    <option value="11">Other</option>
                                    <option value="7">Publications</option>
                                    <option value="8">References</option>
                                    <option value="10">Software</option>
                                    <option value="9">Thesis</option>
                                </select>
                            </div>
                            <div className="input select input_margin">
                                <select id="FilterLibraryBranchId">
                                    <option value="">All Branch</option>
                                    <option value="10">Gulshan</option>
                                    <option value="11">Banani</option>
                                </select>
                            </div>
                            <div className="input select input_margin">
                                <select name="data[Filter][field]" id="FilterField">
                                    <option value="">Default</option>
                                    <option value="title">Title</option>
                                    <option value="Media.call_no">Call No</option>
                                    <option value="Media.isbn">ISBN</option>
                                    <option value="Media.issn">ISSN</option>
                                    <option value="Author.name">Author</option>
                                    <option value="Publisher.name">Publisher</option>
                                    <option value="Category.name">Category</option>
                                    <option value="Media.tags">Tags</option>
                                    <option value="MediaExtra.subject">Subject</option>
                                    <option value="MediaDetail.abstract">Abstract</option>
                                    <option value="MediaDetail.description">Description</option>
                                </select>
                            </div>
                            <div className="input text input_margin">
                                <input onChange={SearchValue} name="searchText" tabIndex="0" autoFocus="autoFocus" type="text" id="FilterQ" />
                            </div>
                            <div className="submit  input_margin">
                                <button className='btn-sm btn btn-dark' type="submit" >Search</button>
                            </div>
                            <div className="submit input_margin">
                                <button className='btn-sm btn btn-dark'>Clear</button>
                            </div>
                            <div>
                                <input type="hidden" name="" value="" id="" />
                            </div>
                        </form>

                        {/*search value */}
                        <div>
                            {/* table  */}
                            {/* {
                                allBooks.length === 0 ? (
                                    <h1>there is no data</h1>
                                ) : (
                                    <TableContainer component={Paper}>
                                        <Table aria-label="customized table">

                                            <TableBody>
                                                {allBooks.map((books) => (
                                                    <StyledTableRow key={books._id}>
                                                        <StyledTableCell component="th" scope="row" sx={{ borderRight: 1, borderColor: 'white' }} >
                                                            <img width="90px" src={books.img} alt="" />
                                                        </StyledTableCell>
                                                        <StyledTableCell component="th" scope="row" sx={{ borderRight: 1, borderColor: 'white' }}>
                                                            <Typography sx={{ fontWeight: 'bold' }} component="h6">
                                                                <Link to={`/letterA/${books._id}`}>{books.title}</Link>
                                                            </Typography>
                                                            <Typography sx={{ fontSize: 13 }}>Edition:{books.edition}</Typography>
                                                            <Typography sx={{ fontSize: 13 }}>Year:{books.publicationYear}</Typography>
                                                            <Typography sx={{ fontSize: 13 }}>ISBN 13:{books.ISBN13}</Typography>
                                                            <Typography sx={{ fontSize: 13 }}>Call No:{books.callNo}</Typography>
                                                        </StyledTableCell>
                                                        <StyledTableCell align="left" sx={{ borderRight: 1, borderColor: 'white' }}>{books.authors}</StyledTableCell>
                                                        <StyledTableCell align="left" sx={{ borderRight: 1, borderColor: 'white' }}>{books.publisher}</StyledTableCell>
                                                        <StyledTableCell align="left" sx={{ borderRight: 1, borderColor: 'white' }}>{books.type}</StyledTableCell>
                                                        <StyledTableCell align="left">{books.copies}</StyledTableCell>
                                                    </StyledTableRow>
                                                ))}

                                            </TableBody>
                                        </Table>
                                    </TableContainer>

                                )
                            } */}


                        </div>





                    </div>
                </div>
            </Container>





        </div>



    );

};

export default SearchCatalog;