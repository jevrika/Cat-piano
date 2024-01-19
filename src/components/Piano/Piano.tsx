import { notes } from "../../NOTES"
import Key from "../Key/Key"
import { useEffect, useState } from 'react';

const Piano = () => {
  const [pressedKey, setPressedKey] = useState<string | null>(null);
  const [event, setEvent] = useState<KeyboardEvent | null>(null);
  const [currentTarget, setCurrentTarget ] = useState<MouseEvent | null>(null)

  //https://bobbyhadz.com/blog/react-detect-enter-key-press

  useEffect(() => {
    const keyDownHandler = (event: KeyboardEvent) => {
      setPressedKey(event.key);
      setEvent(event)
      handleClick(event)
     
    };
    document.addEventListener('keydown', keyDownHandler);

    return () => {
      document.removeEventListener('keydown', keyDownHandler);
    };
  }, []);


  const handleClick = (event:any) => {
    const key = 'key' in event ? event.key : event.currentTarget.value;
    setCurrentTarget(event.currentTarget.value)
    const audio = new Audio(`../../public/sounds/${key}.mp3`)
    audio.play()
  }

  return (
    <>
      < Key notes={notes} event={event} clickHandler={handleClick} pressedKey={pressedKey} currentTarget={currentTarget}/>
    </>
  )
}

export default Piano