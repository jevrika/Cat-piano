/* eslint-disable @typescript-eslint/no-explicit-any */
import styles from '../Button/Button.module.css'
import { NoteType } from "../../NOTES";

type Props = {
  notes: NoteType[],
  clickHandler: (e: React.MouseEvent<HTMLButtonElement>) => void;
  event: KeyboardEvent | null
}

const Button = ({ notes, clickHandler, event }: Props) => {
  return (
    <>
    {
      notes.map((element) => (
          <button
            key={element.note}
            className={`${element.color === "white" ? styles.whiteButton : styles.blackButton} ${String(event?.key.toUpperCase()) === element.note ? styles.active : ''}`}
            value={element.note}
            onClick={clickHandler}
          >
            <p className={element.color === "white" ? styles.textDown : styles.textUp}>{element.note}</p>
          </button>
      ))
    }
    </>
  )
}

export default Button