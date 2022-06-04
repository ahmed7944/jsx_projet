
import './App.css';
import './style.css';
import img from "./1654034371215.jpg"


function App() {
  return (
    
      <div className='App'>
        
        <div style={{border: 'solid 1px black' , maxWidth: '100vw'}}>

          <h1 className="title-red">said ahmed</h1>

          <br />

          <img src={img.jpg} alt='src'/>

          <br/>

          <img src="../public/1654034386834.jpg" alt="public"/>

          </div>

          <video width="320" height="240" controls>

          <source src="myVideo.mp4" type="video/mp4" />

          </video>
      </div>   
    
    
  );
}

export default App;
