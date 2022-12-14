import React from 'react';
import { useState, useEffect } from 'react';
import { Row } from 'react-bootstrap';
import Demo from '../Demo/Demo';
const Footer = () => {
  const [allBooks, setAllBooks] = useState([]);
  useEffect(() => {
    const url = `http://localhost:5000/allBooks`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setAllBooks(data));
  }, []);

  return (
    <div>
      <Row lg={4}>
        {allBooks.map((books) => (
          <Demo key={books._id} books={books}></Demo>
        ))}
      </Row>



    </div>
  );
};

export default Footer;