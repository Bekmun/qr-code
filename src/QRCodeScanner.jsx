import { Scanner } from '@yudiel/react-qr-scanner'
import { useState } from 'react'
import style from './styles.module.css'
import { SCAN_DATA } from '../src/constants'

export const QRCodeScanner = () => {
	const [scanned, setScanned] = useState(null)

	const scanHandler = result => {
		setScanned(result[0].rawValue)
		const provData = JSON.parse(localStorage.getItem(SCAN_DATA) || '[]')
		localStorage.setItem(SCAN_DATA, JSON.stringify([...provData, result[0].rawValue]))
	}

	return (
		<div className={style.container}>
			<Scanner
				onScan={scanHandler}
				components={{
					audio: false,
					finder: false,
				}}
				styles={{ container: { width: 300, height: 300 } }}
			/>
			<a href={scanned} target='_blank'>{scanned}</a>
		</div>
	)
}
