import './App.css';
import lake from "./image/lake.JPG";
import GalleryHeader from './components/GalleryHeader'
import GalleryBody from './components/GalleryBody'
import GalleryFooter from './components/GalleryFooter';



function App() {
  return (
    <div className='body'>
      <GalleryHeader />
      <div className='column'>
        <GalleryBody img={lake} />
        <GalleryBody img={lake} />
        <GalleryBody img={lake} />
        <GalleryBody img={lake}/>
      </div>
      {/* adding footer component */}
      <GalleryFooter /> 
    </div>
  )
}

export default App;
