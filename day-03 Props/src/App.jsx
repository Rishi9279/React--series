import React from "react";
import Props from "./Props";
import './App.css'

const App = () => {
  const album = {
    name: "Rishi",
    age: 20,
    img: "https://images.unsplash.com/photo-1762285531088-f50c2f212651?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=730",
  };
  const album1 = {
    name: "rahul",
    age: 21,
    img: "https://media.istockphoto.com/id/1062873404/photo/family-silhouette-at-sunset.webp?a=1&s=612x612&w=0&k=20&c=GelAtCXj5J6UsxKXnQdLlNfVp-L_YVcP8tj2zPZPbL4=",
  };
   const album2 = {
     name: "rahul",
     age: 21,
     img: "https://media.istockphoto.com/id/1062873404/photo/family-silhouette-at-sunset.webp?a=1&s=612x612&w=0&k=20&c=GelAtCXj5J6UsxKXnQdLlNfVp-L_YVcP8tj2zPZPbL4=",
   };
    const album3 = {
      name: "rahul",
      age: 21,
      img: "https://media.istockphoto.com/id/1062873404/photo/family-silhouette-at-sunset.webp?a=1&s=612x612&w=0&k=20&c=GelAtCXj5J6UsxKXnQdLlNfVp-L_YVcP8tj2zPZPbL4=",
    };
     const album4 = {
       name: "rahul",
       age: 21,
       img: "https://media.istockphoto.com/id/1062873404/photo/family-silhouette-at-sunset.webp?a=1&s=612x612&w=0&k=20&c=GelAtCXj5J6UsxKXnQdLlNfVp-L_YVcP8tj2zPZPbL4=",
     };
      const album5 = {
        name: "rahul",
        age: 21,
        img: "https://media.istockphoto.com/id/1062873404/photo/family-silhouette-at-sunset.webp?a=1&s=612x612&w=0&k=20&c=GelAtCXj5J6UsxKXnQdLlNfVp-L_YVcP8tj2zPZPbL4=",
      };
       const album6 = {
         name: "rahul",
         age: 21,
         img: "https://media.istockphoto.com/id/1062873404/photo/family-silhouette-at-sunset.webp?a=1&s=612x612&w=0&k=20&c=GelAtCXj5J6UsxKXnQdLlNfVp-L_YVcP8tj2zPZPbL4=",
       };
        const album7 = {
          name: "rahul",
          age: 21,
          img: "https://media.istockphoto.com/id/1062873404/photo/family-silhouette-at-sunset.webp?a=1&s=612x612&w=0&k=20&c=GelAtCXj5J6UsxKXnQdLlNfVp-L_YVcP8tj2zPZPbL4=",
        };

  return (
    <div className="box">
      <Props card1={album} />
      <Props card1={album1} />
      <Props card1={album2} />
      <Props card1={album3} />
      <Props card1={album4} />
      <Props card1={album5} />
      <Props card1={album6} />
      <Props card1={album7} />
    </div>
  );
};

export default App;
