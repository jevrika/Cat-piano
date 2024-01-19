import { notes } from "../../NOTES"
import Key from "../Key/Key"
import { useEffect, useState } from 'react';

const Piano = () => {
  const [pressedKey, setPressedKey] = useState<string | null>(null);
  const [pressedKeyFromKeyboard, setPressedKeyFromKeyboard] = useState<string | null>(null);
  //https://bobbyhadz.com/blog/react-detect-enter-key-press

  useEffect(() => {
    const keyDownHandler = (event: KeyboardEvent) => {
      setPressedKeyFromKeyboard(event.key);
      setPressedKey(event.key);
      handleClick(event)
     
    };

    const keyUpHandler = () => {
      setPressedKey(null);
    }
    document.addEventListener('keydown', keyDownHandler);
    document.addEventListener('keyup', keyUpHandler);

    return () => {
      document.removeEventListener('keydown', keyDownHandler);
      document.removeEventListener('keyup', keyUpHandler);
    };
  }, []);


  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleClick = (event: any) => {
    const key = 'key' in event ? event.key : event.currentTarget.value;
    const audio = new Audio(`../../public/sounds/${key}.wav`)
    audio.play()
  }

  return (
    <>
      < Key notes={notes} clickHandler={handleClick} pressedKey={pressedKey} pressedKeyFromKeyboard={pressedKeyFromKeyboard}/>
    </>
  )
}

export default Piano