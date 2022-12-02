import React from 'react'
import '../Styles/emoji.css'
export default function EmojiButton({emoji, onClick}) {

    function handleClick(){
        onClick(emoji);
    }

  return (
    <div className='button-css'>

        <button style={{marginTop:'10px'}}  className='button-emoji-css' onClick={handleClick}>{emoji.character}</button>
    </div>
  )
}
