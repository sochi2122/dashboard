import Sidebar from './components/Sidebar';
import Analysis from './components/Analysis';
import Reviews from './components/Reviews';
import Visitors from './components/Visitors';
import Rating from './components/Rating';


import './App.css';


function App() {
  return (

    <main>
    <div className="container">

     
      <div class="Reviews">  <Reviews /> </div>
      <div class="Rating">   <Rating /> </div>
      <div class="Analysis"> <Analysis /> </div>
      <div class="Visitors"> <Visitors /> </div>
      <div class="Sidebar">  <Sidebar /> </div>

    </div>
    </main>
  )
  }


export default App;
