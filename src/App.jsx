import React from 'react'
import './App.css'
import RandomColor from './components/random color'
import StarRating from './components/star'
import ImageSlider from './components/image slider'
import LoadMoreData from './components/more-load'
/*import Accordian from './components/accordion'*/
import TreeView from './components/tree'
import menus from './components/tree/data'
import QRCodeGenerator from'./components/QR'
function App() {
  return (
    <div className='App'>
    {/*<Accordian />*/}
    {/*<RandomColor />*/}
    {/*<StarRating/>*/}
   {/*<ImageSlider url={"https://picsum.photos/v2/list"} page={1} limit={10}/>*/}
  {/* <LoadMoreData/>*/}
  {/* <TreeView menus={menus} /> */}
   <QRCodeGenerator/>
    </div>
  );
}

export default App