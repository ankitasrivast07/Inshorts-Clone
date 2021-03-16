import React from 'react'
import './NewsData.css'
import { Container } from '@material-ui/core'
import NewsCard from '../NewsCard/NewsCard';


function NewsData({newsArray, newsResults, setLoadMoreNews, loadMoreNews}) {
    return (
        <Container maxWidth="md">
          <div className="data">
              <div className="downloadApp">
                  <span className="downloadMessage">
                  For the best experience use <b class="white">inshorts</b> app on your smartphone
                  </span>
                 
                  <img src="https://assets.inshorts.com/website_assets/images/appstore.png" 
                   alt="app store"
                   height="80%"
                  />
                
                 
                  <img src="https://assets.inshorts.com/website_assets/images/playstore.png"
                  alt="play store"
                  height="80%"
                  />
         
              </div>
           {
               newsArray.map((allNews)=>(
                 <NewsCard  allNews={allNews} key={allNews.title}  />
                 ))
           }
           {
               loadMoreNews <= newsResults && (
                   <>
                   <button className="forPagination" 
                   onClick={()=> setLoadMoreNews(loadMoreNews + 20)}>
                   Load More
                   </button> 
                   </>
               )
           }
          
          </div>
         
       
        </Container>
    )
}

export default NewsData
