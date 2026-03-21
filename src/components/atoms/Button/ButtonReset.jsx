import styles from './_ButtonReset.module.scss';
import '../../../sass/abstract/_utils.scss';

export default function ButtonReset() {
    return <button className={`${styles.button_reset}  text_preset_4  text_underline  text_capitalize`}>clear all</button>
}