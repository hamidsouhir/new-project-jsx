
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MainVid from './components/MainVid';
import imageInSrc from './imageInSrc.webp';
function App() {
  return (
    <div className="App">
      <div style={{border:"solid 1px black",maxWidth:"100vw"}}>

<h1 className="title red">My Favorite Video Game</h1>



<img src={imageInSrc} alt="residentEvil2"style={{height:"300px"}}/>



<img src="./imageInPublic.jpg"alt="residentEvil"style={{height:"300px"}}/ >

</div>

<MainVid/>
    </div>
  );
}

export default App;
