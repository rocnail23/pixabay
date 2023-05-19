import { useEffect, useState } from 'react'
import Form from './components/Form'
import Imageslist from './components/Imageslist'
function App() {

  const [search, setSearch] = useState("paisajes")
  const [images, setImages] = useState([])
  const [pages, setPages] = useState(0)
  const [actualPages, setActualPages] = useState(1) 

  useEffect(() => {
    const getImages = async () => {
      if(search == "") return

    const ImagesPerPages = 30;
    const key = "36536160-db539ea349cb88ace0c36fda6"
    const url = `https://pixabay.com/api/?key=${key}&q=${search}&per_page=${ImagesPerPages}&page=${actualPages}`

    const api = await fetch(url)
    const res = await api.json()
    console.log(res.totalHits)
    setImages(res.hits)
    setPages(Math.ceil(res.totalHits/ImagesPerPages))

    }

    getImages()
    const home = document.querySelector(".home")
    home.scrollIntoView({behavior:'smooth'})
  },[search,actualPages])


  const actualPagesPlus = () => {
  

   setActualPages(actualPages + 1)
  }

  const actualPagesMinus = () => {

      setActualPages(actualPages - 1)
  }

  return (
    <div className='container'>
      <div className='home p-5 mb-4 bg-info'>
      <p className='display-4 mb-4 fw-bold text-center text-light'>buscador de imagenes</p>
      <Form setSearch={setSearch} />
      </div>
      <div className='row justify-content-center mb-5'>
      <Imageslist images={images}/>

      {actualPages == 1
      ? null
      :(<button onClick={actualPagesMinus} className='btn btn-info w-25 me-1'>
      &laquo;atras </button>)}
      
      {pages == actualPages
      ?null
      : <button onClick={actualPagesPlus} className='ml-3 btn btn-info w-25'>
      siguiente&raquo; </button>
      }
      </div>
    </div>
  )
}

export default App
