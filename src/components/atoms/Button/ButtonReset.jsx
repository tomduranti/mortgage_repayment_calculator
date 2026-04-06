import styles from './_ButtonReset.module.scss';
import '../../../sass/abstract/_utils.scss';

export default function ButtonReset({onClick}) {
    return <button onClick={onClick} type='button' className={`${styles.button_reset}  text_preset_4  text_underline  text_capitalize  text_slate--700`}>clear all</button>
}