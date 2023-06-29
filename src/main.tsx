import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
// import Review from "../components/Review.tsx";

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
    {/*<App>*/}
    {/*  <Review isReview={false}/>*/}
    {/*</App>*/}
  </React.StrictMode>,
)
