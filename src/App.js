import logo from './logo.svg';
import './App.css';
// import Board from './board';
import Registration from './registration';
import Button from './registration'
import Sidebar from './component/sidebar';
import Navbar from './component/navbar';
import Top_block from './component/top_block';
import Mid_block from './component/mid_block';
import Bottom_block from './component/bottom_block';
function App() {
  return (
    <div className="App">
      
      {/* <div className="Board">
      <Board/>
      </div> */}
      
      <div className='reg'>
      <Registration/>
      </div>

      <div className='sidemain'>
<div className='grid2'>

      <div className='Sidebar'>
        <Sidebar/>
      </div>

      <div className='Navbar'>
        <Navbar/>
      </div>
</div>

<div className='Top'>
  <Top_block/>
</div>
<div>
  <Mid_block/>
</div>
<div>
  <Bottom_block/>
</div>
      </div>
    </div>
  );
}

export default App;
