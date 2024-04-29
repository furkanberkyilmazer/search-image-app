import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SearchHeader from './components/SearchHeader'
import searchImages from './components/Api'
import ImgList from './components/ImgList'

function App() {

  const [images, setImages] = useState([])

  const handleSubmit=async (term)=> {

    console.log(term);
    const result = await searchImages(term);
    setImages(result.data.results);
    
  }

  return (
    <div className="App">
          <SearchHeader search={handleSubmit}/>
          <ImgList imagesPlaceHolder={images}/>
    </div>
    
  )
}

export default App
