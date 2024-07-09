import { Link } from 'react-router-dom'
import style from './styles.module.css'

export const Navigation = () => {
	return (
		<nav className={style.nav}>
			<Link className={style.link} to='/generate'>
				Генерировать QR код
			</Link>
			<Link className={style.link} to='/scan'>
				Сканировать QR код
			</Link>
			<Link className={style.link} to='/generateHistory'>
				История генерирования
			</Link>
			<Link className={style.link} to='/scanHistory'>
				История Сканирования
			</Link>
		</nav>
	)
}
