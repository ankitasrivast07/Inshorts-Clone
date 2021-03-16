import React from "react";
import './NewsCard.css'
const NewsCard = ({ allNews }) => {
//   console.log(allNews);
   //"2021-03-12T06:38:20Z"
   const completedate = new Date(allNews.publishedAt);
    // Fri Mar 12 2021 12:08:20 GMT+0530 (India Standard Time)
    // console.log(completedate);
   var date = completedate.toString().split(" "); 
   // (9) ["Fri", "Mar", "12", "2021", "12:08:20", "GMT+0530", "(India", "Standard", "Time)"]
/*0: "Fri"
1: "Mar"
2: "12"
3: "2021"
4: "12:08:20"
5: "GMT+0530"
6: "(India"
7: "Standard"
8: "Time)"*/
//    console.log(date);
   
   const hour = parseInt(date[4].substring(0, 2)); //
   const time = hour > 12 ? true : false;
 
   return (
     <div className="newsCard">
       <img
         alt={allNews.title}
         src={
            allNews.urlToImage
             ? allNews.urlToImage
             : "https://png.pngtree.com/png-vector/20190826/ourlarge/pngtree-gallery-png-image_1697029.jpg"
         }
         className="newsImage"
       />
       <div className="newsText">
         <div>
           <span className="title">{allNews.title}</span>
           <br />
           <span className="author">
             <a href={allNews.url} target="#" >
               <b>short </b>
             </a>{" "}
             <span className="muted">
               {" "}
               by {allNews.author ? allNews.author : "unknown"} /{" "}
               {time
                 ? `${hour - 12}:${date[4].substring(3, 5)} pm`
                 : `${hour}:${date[4].substring(3, 5)} am`}{" "}
               on {date[2]} {date[1]} {date[3]}, {date[0]}
             </span>
           </span>
         </div>
         <div className="lowerNewsText">
           <div className="description">{allNews.description}</div>
           <span className="readmore">
             read more at{" "}
             <a href={allNews.url} target="#" className="source">
               <b>{allNews.source.name}</b>
             </a>
           </span>
         </div>
       </div>
     </div>
   );
 };
 
export default NewsCard;
