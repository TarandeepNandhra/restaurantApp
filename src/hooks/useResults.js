import React, { useState, useEffect } from 'react';
import yelp from '../api/yelp';

export default () => {
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  const searchApi = async (searchTerm) => {
    console.log('Hi there!');
    try { 
      const response = await yelp.get('/search', {
        params: {
          // adds params on as a query, as docs has requested
          limit: 50,
          term: searchTerm,
          location: 'London'
        }
      });
      setResults(response.data.businesses);
    } catch (error) {
      setErrorMessage('Something went wrong!');
    }
  };

  // Use effect with [], means api req is only called once
  useEffect(() => {
    searchApi('Nandos');
  }, []);

  // Things we need in SearchScreen comp
  return [searchApi, results, errorMessage]
};
