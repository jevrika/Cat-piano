import { NoteType } from "../../NOTES";
import styles from './Key.module.css'
import cat1 from '../../assets/cat1.png'
import cat2 from '../../assets/cat2.png'
import cat3 from '../../assets/cat3.png'
import cat4 from '../../assets/cat4.png'
import cat5 from '../../assets/cat5.png'
import cat6 from '../../assets/cat6.png'
import cat7 from '../../assets/cat7.png'
import cat8 from '../../assets/cat8.png'
import cat9 from '../../assets/cat9.png'
import cat10 from '../../assets/cat10.png'
import cat11 from '../../assets/cat11.png'
import cat12 from '../../assets/cat12.png'


type Props = {
  notes: NoteType[],
  clickHandler: (e: React.MouseEvent<HTMLButtonElement>) => void;
  pressedKey: string | null;
  event: KeyboardEvent | null
  currentTarget: MouseEvent | null | string
}

const Key = ({ notes, clickHandler, pressedKey, event, currentTarget }: Props) => {
  return (
    <>
      <div className={styles.wrapper}>
        {notes.map((element) => (
          <>
            <button
              key={element.note}
              className={`${element.color === "white" ? styles.whiteButton : styles.blackButton} ${String(event?.key.toUpperCase()) === element.note ? styles.active : ''}`}
              value={element.note}
              onClick={clickHandler}

            >
              <p className={element.color === "white" ? styles.textDown : styles.textUp}>{element.note}</p>
            </button>
          </>
        ))}
        <img className={`${(pressedKey === "a" || currentTarget === 'A') ? styles.visible : styles.hidden}`} src={cat1} alt="cat1" />
        <img className={`${(pressedKey === "w" || currentTarget === 'W') ? styles.visibleCat2 : styles.hiddenCat2}`} src={cat2} alt="cat2" />
        <img className={`${(pressedKey === "s" || currentTarget === 'S') ? styles.visibleCat3 : styles.hiddenCat3}`} src={cat3} alt="cat3" />
        <img className={`${(pressedKey === "e" || currentTarget === 'E') ? styles.visibleCat4 : styles.hiddenCat4}`} src={cat4} alt="cat4" />
        <img className={`${(pressedKey === "d" || currentTarget === 'D') ? styles.visibleCat5 : styles.hiddenCat5}`} src={cat5} alt="cat5" />
        <img className={`${(pressedKey === "f" || currentTarget === 'F') ? styles.visibleCat6 : styles.hiddenCat6}`} src={cat6} alt="cat6" />
        <img className={`${(pressedKey === "t" || currentTarget === 'T') ? styles.visibleCat7 : styles.hidden}`} src={cat7} alt="cat7" />
        <img className={`${(pressedKey === "g" || currentTarget === 'G') ? styles.visibleCat8 : styles.hiddenCat2}`} src={cat8} alt="cat8" />
        <img className={`${(pressedKey === "y" || currentTarget === 'Y') ? styles.visibleCat9 : styles.hiddenCat3}`} src={cat9} alt="cat9" />
        <img className={`${(pressedKey === "h" || currentTarget === 'H') ? styles.visibleCat10 : styles.hiddenCat4}`} src={cat10} alt="cat10" />
        <img className={`${(pressedKey === "u" || currentTarget === 'U') ? styles.visibleCat11 : styles.hiddenCat5}`} src={cat11} alt="cat11" />
        <img className={`${(pressedKey === "j" || currentTarget === 'J') ? styles.visibleCat12 : styles.hiddenCat6}`} src={cat12} alt="cat12" />
      </div >
    </>
  );
}

export default Key;
