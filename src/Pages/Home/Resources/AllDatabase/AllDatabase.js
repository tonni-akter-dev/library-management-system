import React from 'react';
import { Container } from 'react-bootstrap';
import Navigation2 from '../../Navigation/Navigation2/Navigation2';
import './AllDatabase.css'
const AllDatabase = () => {
    return (
        <div>
            <Navigation2 />
            <Container className='database_bg'>
                <h2 class="margin-b30">Database A-Z</h2>
                <div className='database_div'>
                    <div class="col-md-12">
                        <div class="media index content-body border-r5">
                            <div class="text-center" >
                                <div class="database buttons buttons-medium buttons-secondary buttons-space">
                                    <a href="/search/alphabetical/letter:A">A</a>
                                    <a href="/search/alphabetical/letter:B">B</a>
                                    <a href="/search/alphabetical/letter:C">C</a>
                                    <a href="/search/alphabetical/letter:D">D</a>
                                    <a href="/search/alphabetical/letter:E">E</a>
                                    <a href="/search/alphabetical/letter:F">F</a>
                                    <a href="/search/alphabetical/letter:G">G</a>
                                    <a href="/search/alphabetical/letter:H">H</a>
                                    <a href="/search/alphabetical/letter:I">I</a>
                                    <a href="/search/alphabetical/letter:J">J</a>
                                    <a href="/search/alphabetical/letter:K">K</a>
                                    <a href="/search/alphabetical/letter:L">L</a>
                                    <a href="/search/alphabetical/letter:M">M</a>
                                    <a href="/search/alphabetical/letter:N">N</a>
                                    <a href="/search/alphabetical/letter:O">O</a>
                                    <a href="/search/alphabetical/letter:P">P</a>
                                    <a href="/search/alphabetical/letter:Q">Q</a>
                                    <a href="/search/alphabetical/letter:R">R</a>
                                    <a href="/search/alphabetical/letter:S">S</a>
                                    <a href="/search/alphabetical/letter:T">T</a> <br /> <br />
                                    <a href="/search/alphabetical/letter:U">U</a>
                                    <a href="/search/alphabetical/letter:V">V</a>
                                    <a href="/search/alphabetical/letter:W">W</a>
                                    <a href="/search/alphabetical/letter:X">X</a>
                                    <a href="/search/alphabetical/letter:Y">Y</a>
                                    <a href="/search/alphabetical/letter:Z">Z
                                    </a>
                                </div>

                                <div class="mt-5 database buttons buttons-medium buttons-dark buttons-space margin-t15">
                                    <a href="/search/alphabetical/letter:0">0</a>
                                    <a href="/search/alphabetical/letter:1">1</a>
                                    <a href="/search/alphabetical/letter:2">2</a>
                                    <a href="/search/alphabetical/letter:3">3</a>
                                    <a href="/search/alphabetical/letter:4">4</a>
                                    <a href="/search/alphabetical/letter:5">5</a>
                                    <a href="/search/alphabetical/letter:6">6</a>
                                    <a href="/search/alphabetical/letter:7">7</a>
                                    <a href="/search/alphabetical/letter:8">8</a>
                                    <a href="/search/alphabetical/letter:9">9</a>
                                </div>


                                \
                            </div>

                        </div>

                    </div>






                </div>
            </Container>
        </div>
    );
};

export default AllDatabase;