import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import Createpost from "./components/Createpost";
import PostListProvider from "./store/Post-list-Context";

import Postlist from "./components/Postlist";
import { useState } from "react";

function App() {
  
  const[selectedTab, setSelectedTab] = useState("Create Post");

  return (
   <PostListProvider>
   <div className="app-container">
    <Sidebar selectedTab = {selectedTab}
    setSelectedTab={setSelectedTab}/>

    <div className="content">
      <Header/>
      { selectedTab === "Home" ? (<Postlist></Postlist>): (<Createpost></Createpost>)}
      
      <Footer/>
    </div>
     
   </div>
    
   </PostListProvider>

  )
}

export default App;
