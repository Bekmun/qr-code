import { QRCodeSVG } from 'qrcode.react'
import { SCAN_DATA } from './constants'
import style from './styles.module.css'

export const ScanHistory = () => {
  const data = JSON.parse(localStorage.getItem(SCAN_DATA) || '[]')
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
