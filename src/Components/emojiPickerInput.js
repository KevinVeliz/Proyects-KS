import React, { useRef, useState } from 'react'
import EmojiPicker from './emojiPicker';

export default function EmojiPickerInput() {
    const inputRef = useRef(null);
    const [text, setText] = useState([]);
    const [isCopied, setIsCopied] = useState(false);

    const handleSubmit = () => {
        console.log(inputRef.current.value)
        if(inputRef.current.value !== ''){
            navigator.clipboard.writeText(inputRef.current.value)
            alert('Copied')
        }
        else{
            alert('Insert text')
        }
    };


    return (
        <div className='emojihead'>
            <h1 className='text-title'>Selector Emojis</h1>
            <div className='container'>
                <input ref={inputRef} className='inputemoji'/>
                <button onClick={handleSubmit} className='button-cards'>Copy</button>
            </div>
            <div className='cards'>
                <EmojiPicker ref={inputRef} />
            </div>
        </div>
    )
}
