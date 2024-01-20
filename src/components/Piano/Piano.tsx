import { notes } from "../../NOTES"
import Key from "../Key/Key"
import { useEffect, useState } from 'react';

const Piano = () => {
  const [pressedKeyboardKey, setPressedKeyboardKey] = useState<string | null>(null);
  const [event, setEvent] = useState<KeyboardEvent | null>(null);
  const [pressedMouseTarget, setPressedMouseTarget] = useState<MouseEvent | null>(null);
  const [playAllowed, setPlayAllowed] = useState(true);

  //https://bobbyhadz.com/blog/react-detect-enter-key-press

  useEffect(() => {
    const keyDownHandler = (event: KeyboardEvent) => {
      setPressedKeyboardKey(event.key);
      setEvent(event)

      if (playAllowed) {
        handleClick(event)
      }
    };

    const keyUpHandler = () => {
      setPlayAllowed(true)
      setPressedKeyboardKey(null)
      setPressedMouseTarget(null)
    }
    document.addEventListener('keydown', keyDownHandler);
    document.addEventListener('keyup', keyUpHandler)

    return () => {
      document.removeEventListener('keydown', keyDownHandler);
      document.removeEventListener('keyup', keyUpHandler);
    };
  }, [playAllowed]);


  // ??????????????????
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleClick = (event:any) => {
    const key = event.key || event.currentTarget!.value;
    setPressedMouseTarget(event.currentTarget!.value)

    const audio = new Audio(`../../public/sounds/${key}.mp3`)
    audio.play()
    setPlayAllowed(false)
  }
  return (
    < Key notes={notes} event={event} clickHandler={handleClick} pressedKeyboardKey={pressedKeyboardKey} pressedMouseTarget={pressedMouseTarget} />
  )
}

export default Piano