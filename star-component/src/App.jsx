import { useState } from 'react'
import './App.css'

function App() {
  const [starCount, setStarCount] = useState(0);
  const [hoverCount, setHoverCount] = useState(0)

  const handleStarClick = (index) => {
    setStarCount(index+1)
  }

  
  return (
    <div className="star-container">
        Star Rating 
        <div className="star">
          {
            [...Array(5)].map((_, index) => {
              return (
                 <span
                  className={`star-icon ${index+1 <= starCount || index+1 <= hoverCount ? "selected": ''}`}
                  key={index}
                  onClick={() => handleStarClick(index)}
                  onMouseOver={() => setHoverCount(index+1)}
                  onMouseOut={() => setHoverCount(0)}
                 > &#9733;</span>
              )
            })
          }
        </div>
        <span>
          Rating : {starCount}
        </span>
    </div>
  )
}

export default App
