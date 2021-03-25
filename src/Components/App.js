import React, {useState, useEffect} from 'react'
import '../App.css';
import axios from 'axios';

import SearchForm from './SearchForm';
import GifList from './GifList';

function App() {
    const [data, setData] = useState([])
    const [query, setQuery] = useState('cats')





    useEffect(() => {
        axios(`http://api.giphy.com/v1/gifs/search?q=${query}&limit=24&api_key=8kPPAvSPwZGTj0QyLzVO7ovMegXe79v5&q`)
            .then(response => setData(response.data.data))
            .catch(error => console.log('Error fetching and parsing data', error))

    }, [query])


  return (
    <>
      <div className="main-header">
        <div className="inner">
          <h1 className="main-title">GifSearch</h1>
          <SearchForm />
        </div>
      </div>
      <div className="main-content">
          <GifList data={data}/>
      </div>
    </>
  );
}

export default App

