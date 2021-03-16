import React, {useState, useEffect} from 'react';
import Menubar from "./Components/Menubar/Menubar";
import './App.css';
import NewsData from './Components/NewsData/NewsData';
import axios from 'axios';
import Footer from './Components/Footer/Footer'
 
function App() {
  const [category, setCategory] = useState("general");
  const [newsArray, setNewsArray] = useState([]);
  const [newsResults, setNewsResults] = useState();
const [loadMoreNews, setLoadMoreNews] = useState(20);




  

useEffect(() => {
  const newsApi=async()=>{
    const proxyUrl = "https://cors-anywhere.herokuapp.com/";

    try {
     const news=await axios.get(`${proxyUrl}https://newsapi.org/v2/top-headlines?country=in&apiKey=${process.env.REACT_APP_API_KEY}&category=${category}&pageSize=${loadMoreNews}`);
    //  console.log(news.data.articles);
    //  console.log(news.data.totalResults);
     setNewsArray(news.data.articles);
     setNewsResults(news.data.totalResults);
     
    } catch (error) {
      console.log(error);
      
    }
  }
  newsApi();
}, [newsResults, category, loadMoreNews])
  return (
    <div className="App">
      <Menubar setCategory={setCategory} />

      <NewsData setLoadMoreNews={setLoadMoreNews} loadMoreNews={ loadMoreNews} newsResults={newsResults} newsArray={newsArray}/>
     
      <Footer/>
    </div>
  );
}

export default App;
