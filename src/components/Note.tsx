import styles from './Note.module.css'

type Props = {
  color: string,
  note: string,
  clickHandler: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const Note = ({ color, note, clickHandler }: Props) => {

  return (
    <>
      <button
        className={color === "white" ? styles.whiteButton : styles.blackButton}
        value={note}
        onClick={clickHandler}
      >
        <p className={color === "white" ? styles.textDown : styles.textUp}>{note}</p>
      </button>
    </>
  );
}

export default Note;
