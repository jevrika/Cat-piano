import styles from './KeyImages.module.css'
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
  pressedKeyboardKey: string | null;
  pressedMouseTarget: MouseEvent | null | string
}
const KeyImage = ({ pressedKeyboardKey, pressedMouseTarget }: Props) => {

  const keyImages = [
    { key: "a", img: cat1, visibleStyle: styles.visibleCat1, hiddenStyle: styles.hiddenCat1 },
    { key: "w", img: cat2, visibleStyle: styles.visibleCat2, hiddenStyle: styles.hiddenCat2 },
    { key: "s", img: cat3, visibleStyle: styles.visibleCat3, hiddenStyle: styles.hiddenCat3 },
    { key: "e", img: cat4, visibleStyle: styles.visibleCat4, hiddenStyle: styles.hiddenCat4 },
    { key: "d", img: cat5, visibleStyle: styles.visibleCat5, hiddenStyle: styles.hiddenCat5 },
    { key: "f", img: cat6, visibleStyle: styles.visibleCat6, hiddenStyle: styles.hiddenCat6 },
    { key: "t", img: cat7, visibleStyle: styles.visibleCat7, hiddenStyle: styles.hiddenCat7 },
    { key: "g", img: cat8, visibleStyle: styles.visibleCat8, hiddenStyle: styles.hiddenCat8 },
    { key: "y", img: cat9, visibleStyle: styles.visibleCat9, hiddenStyle: styles.hiddenCat9 },
    { key: "h", img: cat10, visibleStyle: styles.visibleCat10, hiddenStyle: styles.hiddenCat10 },
    { key: "u", img: cat11, visibleStyle: styles.visibleCat11, hiddenStyle: styles.hiddenCat11 },
    { key: "j", img: cat12, visibleStyle: styles.visibleCat12, hiddenStyle: styles.hiddenCat12 },
  ];

  return (
    <>
      {keyImages.map(({ key, img, visibleStyle, hiddenStyle }) => (
        <img
          key={key}
          className={`${pressedKeyboardKey === key.toLowerCase() || pressedMouseTarget === key.toUpperCase() ? visibleStyle : hiddenStyle}`}
          src={img}
          alt={`cat${key}`}
        />
      ))}
    </>
     )

}

export default KeyImage