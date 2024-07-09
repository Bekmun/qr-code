import { QRCodeSVG } from 'qrcode.react'
import { GENERATE_DATA } from './constants'
import style from './styles.module.css'

export const GenerateHistory = () => {
	const data = JSON.parse(localStorage.getItem(GENERATE_DATA) || '[]')
	return (
		<div className={style.qrCode}>
			{data.map(text => (
				<p key={text}>
					{text}
					<QRCodeSVG value={text} size={100} />
				</p>
			))}
		</div>
	)
}