import React, { forwardRef, useEffect, useRef, useState } from 'react'
import EmojiButton from './emojiButton';
import '../Styles/emoji.css'



export function EmojiPicker(props, inpuRef) {
  const [showEmojiPanel, setShowEmojiPanel] = useState(false);
  const [emojis, setEmojis] = useState([]);
  const [search, setSearch] = useState('');

  const containerRef = useRef(null);

  useEffect(() => {
    fetch(`https://emoji-api.com/emojis?access_key=bc04d5fb7c2b1793dbbe314382564da4484e2d47`)
      .then(response => response.json())
      .then(setEmojis)

    window.addEventListener("click", (e) => {
      if (!containerRef.current.contains(e.target)) {
        setShowEmojiPanel(false);
      }
    })
  }, [])



  function handleClickOpen() {
    setShowEmojiPanel(!showEmojiPanel)
  }

  const handleSearch = () => {
    if (search === '') {
      return emojis.slice(0, 50)
    }
    return emojis.filter((emoji) => (
      emoji.unicodeName.toLowerCase().includes(search.toLowerCase())
    ))

  }


  // function EmojiPickerContainer(){
  //   return (
  //     <div style={{width:'300px', height:'500px', padding:'10px', backgroundColor:'#f5f5f5'}}>
  //       <EmojiSearch onSearch={handleSearch}/>
  //       <div style={{display:'grid', gridTemplateColumns:'repeat(9, 1fr)', gridTemplateRows:'repeat(100,30px)'}}>
  //         {emojis.slice(0,40).map((emoji)=>(
  //           <div style={{height:'50px'}} key={emoji.unicodeName}>
  //             { emoji.character}
  //           </div>
  //         ))}
  //       </div>
  //     </div>
  //   )
  // }


  function handleOnClickEmoji(emoji) {
    const cursorPos = inpuRef.current.selectionStart
    const text = inpuRef.current.value;
    const prev = text.slice(0, cursorPos)
    const next = text.slice(cursorPos)
    inpuRef.current.value = prev + emoji.character + next;
    inpuRef.current.selectionStart = cursorPos + emoji.character.length;
    inpuRef.current.selectionEnd = cursorPos + emoji.character.length;
    inpuRef.current.focus();
  }

  return (
    <div ref={containerRef} >
      <button onClick={handleClickOpen}>😁</button>
      {showEmojiPanel ?
        <div className='emojiContainer'>
          <input type='text' style={{ marginBottom: '10px', border:'none',padding:'10px', borderRadius:'5px'}} onChange={(e) => setSearch(e.target.value)} />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(9, 1fr)'}}>
            {handleSearch().map((emoji) => (
              <div style={{ height: '50px' }} key={emoji.unicodeName}>
                <EmojiButton key={emoji.unicodeName} emoji={emoji} onClick={handleOnClickEmoji} />
              </div>
            ))}
          </div>
        </div>
        :
        ""
      }
    </div>
  )
}

export default forwardRef((EmojiPicker))
