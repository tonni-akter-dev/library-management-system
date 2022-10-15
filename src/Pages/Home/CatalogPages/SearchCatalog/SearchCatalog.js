import React from 'react';
import { Container } from 'react-bootstrap';
import Navigation2 from '../../Navigation/Navigation2/Navigation2';
import './SearchCatalog.css';
const SearchCatalog = () => {
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
                            <div class="input select input_margin">
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
                            <div class="input select input_margin">
                                <select id="FilterLibraryBranchId">
                                    <option value="">All Branch</option>
                                    <option value="10">Gulshan</option>
                                    <option value="11">Banani</option>
                                </select>
                            </div>
                            <div class="input select input_margin">
                                <select name="data[Filter][field]" id="FilterField">
                                    <option value="">Default</option>
                                    <option value="Media.id">Id</option>
                                    <option value="Media.title">Title</option>
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
                            <div class="input text input_margin">
                                <input name="data[Filter][q]" tabindex="0" autofocus="autofocus" type="text" id="FilterQ" />
                            </div>
                            <div class="submit  input_margin">
                                <button className='btn-sm btn btn-dark' type="button">Search</button>
                                {/* <input className='search_submit' type="submit" value="Search" /> */}
                            </div>
                            <div class="submit input_margin">
                                <button className='btn-sm btn btn-dark' type="button">Clear</button>
                            </div>
                            <div>
                                <input type="hidden" name="data[_Token][fields]" value="6f573c89bc51dce4e5162fcaaa470425e5e2e027%3A" id="TokenFields687799666" />
                                <input type="hidden" name="data[_Token][unlocked]" value="" id="TokenUnlocked1332806451" />
                            </div>
                        </form>

                    </div>
                </div>
            </Container>




            {/*  <div class="search-bar-inner border-r5">
                <form action="https://presidency.librarika.com/search" id="FilterIndexForm" method="post" accept-charset="utf-8">
         <div style="display:none;">
            <input type="hidden" name="_method" value="POST"/>
                        <input type="hidden" name="data[_Token][key]" value="2364b5da88761800e3462f5a0fdab1f523a25193" id="Token289997375"/>
        </div>
                   <div class="input select"><select name="data[Filter][media_type_id]" style="width: 120px;" id="FilterMediaTypeId">
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
                </select></div>
                
                <div class="input select"><select name="data[Filter][library_branch_id]" style="width: 120px;" id="FilterLibraryBranchId">
                    <option value="">All Branch</option>
                    <option value="10">Gulshan</option>
                    <option value="11">Banani</option>
                </select></div>
                
                
                <div class="input select"><select name="data[Filter][field]" style="width: 90px;" id="FilterField">
                    <option value="">Default</option>
                    <option value="Media.id">Id</option>
                    <option value="Media.title">Title</option>
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
                </select></div>
                -----------------------
                    <div class="input text">
                        <input name="data[Filter][q]" tabindex="0" autofocus="autofocus" type="text" id="FilterQ" /></div><div class="submit"><input type="submit" value="Search" /></div><div class="submit"><button type="button" onclick="window.location = '/search/index/resetFilter:1';">Clear</button></div><div style="display:none;"><input type="hidden" name="data[_Token][fields]" value="6f573c89bc51dce4e5162fcaaa470425e5e2e027%3A" id="TokenFields687799666" /><input type="hidden" name="data[_Token][unlocked]" value="" id="TokenUnlocked1332806451" /></div>
                </form>
                </div> */}
        </div>



    );

};

export default SearchCatalog;