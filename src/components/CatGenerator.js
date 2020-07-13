import React, { useState, useEffect } from "react"
import defaultCat from './defaultCat.png'

export default function CatGenerator() {
  const [catImg, setState] = useState(defaultCat);
  const [buttonState, setButtonState] = useState(false)
  const [loader, setLoader] = useState({ display: 'none' })

  useEffect(() => {
    console.log(35355);
  }, [catImg])

  async function handleClick() {
    setButtonState(true);
    setLoader({ display: 'block' });

    const url = 'https://api.thecatapi.com/v1/images/search?limit=1&size=full&sub_id=demo-5e4efc';
    const response = await fetch(url);
    const json = await response.json();
  
    setState(json[0].url);
    setButtonState(false);
    setLoader({ display: 'none' });
  }
    return (
      <div>
        <div className='loading'>
          <div id='loader' style={loader}></div>
        </div>
        <div className='random'>
          <img id='img' src={catImg} />
        </div>
        <div className='btn'>
          <button color='secondary' id='myBtn' disabled={buttonState} onClick={handleClick}>
            Click to get random cat!
          </button>
        </div>
      </div>
    )
}
