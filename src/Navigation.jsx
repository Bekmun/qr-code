import { Link } from 'react-router-dom'
import style from './styles.module.css'

export const Navigation = () => {
	return (
		<nav className={style.nav}>
			<Link className={style.link} to='/qr-code/generate'>
				Генерировать QR код
			</Link>
			<Link className={style.link} to='/qr-code/scan'>
				Сканировать QR код
			</Link>
			<Link className={style.link} to='/qr-code/generateHistory'>
				История генерирования
			</Link>
			<Link className={style.link} to='/qr-code/scanHistory'>
				История Сканирования
			</Link>
		</nav>
	)
}
