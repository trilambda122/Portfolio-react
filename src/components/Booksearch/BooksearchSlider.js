import React, {useState} from 'react'
import { BooksearchData } from './BooksearchData'
import {RiArrowRightCircleLine, RiArrowLeftCircleLine} from 'react-icons/ri'
import '../slider.css'

function BooksearchSlider({slides}) {
 const [current,setCurrent] = useState(0)
 const length = slides.length


const nextSlide = ()=>{
  setCurrent(current === length -1 ? 0 : current +1)
}

const prevSlide = ()=>{
  setCurrent(current === 0 ? length -1 : current -1 )

}

console.log(current)
if (!Array.isArray(slides) || slides.length <=0){
  return null
}



  return (
    <div>
       <RiArrowLeftCircleLine  className='left-arrow' onClick={prevSlide}/>
      <RiArrowRightCircleLine className='right-arrow' onClick={nextSlide}/>
      {BooksearchData.map((slide,index)=>{
        return  (
        <div className={index === current ? 'slide active' : 'slide'} key={index}>
          {index === current &&  <img  className="portfolio-img shadow card-img-top" src={slide.image} alt=''user directory preview/>}
           
        </div>
      
        )
      })}
    </div>
  )
}

export default BooksearchSlider