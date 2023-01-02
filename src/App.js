
// import './App.css';
import Header from './Components/header/header';
import Content from './Components/Content/Content';

function App() {
  return (
    <div className="app">
      <div className='header_container'>
        <Header/>
       <Content/> 
        {/* <Footer/>  */}
      </div>
    </div>
  );
}

export default App;
