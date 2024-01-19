import { NoteType } from "../../NOTES";
import Button from "../Button/Button";
import KeyImage from "../KeyImages.tsx/KeyImage";
import styles from './Key.module.css'

type Props = {
  notes: NoteType[],
  clickHandler: (e: React.MouseEvent<HTMLButtonElement>) => void;
  pressedKeyboardKey: string | null;
  event: KeyboardEvent | null
  pressedMouseTarget: MouseEvent | null | string
}

const Key = ({ notes, clickHandler, pressedKeyboardKey, event, pressedMouseTarget }: Props) => {
  return (
    <>
      <div className={styles.wrapper}>
        <Button notes={notes} clickHandler={clickHandler} event={event}/>
        <KeyImage pressedKeyboardKey={pressedKeyboardKey} pressedMouseTarget={pressedMouseTarget}/>
      </div >
    </>
  );
}

export default Key;