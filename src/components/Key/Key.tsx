import { NoteType } from "../../NOTES";
import styles from './Key.module.css'
import cat1 from '../../assets/cat1.png'
import cat2 from '../../assets/cat2.png'
import cat3 from '../../assets/cat3.png'
import cat4 from '../../assets/cat4.png'
import cat5 from '../../assets/cat5.png'
import cat6 from '../../assets/cat6.png'

type Props = {
  notes: NoteType[],
  clickHandler: (e: React.MouseEvent<HTMLButtonElement>) => void;
  pressedKey: string | null;
  pressedKeyFromKeyboard: string | null;
}

const Key = ({ notes, clickHandler, pressedKey, pressedKeyFromKeyboard }: Props) => {
  console.log(pressedKey)
  return (
    <>
      <div className={styles.wrapper}>
        {notes.map((element) => (
          <button
            key={element.note}
            className={element.color === "white" ? styles.whiteButton : styles.blackButton}
            value={element.note}
            onClick={clickHandler}
          >
            <p className={element.color === "white" ? styles.textDown : styles.textUp}>{element.note}</p>
          </button>
        ))}
      <img className={pressedKeyFromKeyboard === "a" ? styles.visible : styles.hidden} src={cat1} alt="cat1" />
      <img className={pressedKeyFromKeyboard === "w" ? styles.visibleCat2 : styles.hiddenCat2} src={cat2} alt="cat2" />
      <img className={pressedKeyFromKeyboard === "s" ? styles.visibleCat3 : styles.hiddenCat3} src={cat3} alt="cat3" />
      <img className={pressedKeyFromKeyboard === "e" ? styles.visibleCat4 : styles.hiddenCat4} src={cat4} alt="cat4" />
      <img className={pressedKeyFromKeyboard === "d" ? styles.visibleCat5 : styles.hiddenCat5} src={cat5} alt="cat5" />
      <img className={pressedKeyFromKeyboard === "f" ? styles.visibleCat6 : styles.hiddenCat6} src={cat6} alt="cat6" />

      </div>
    </>
  );
}

export default Key;
