import { useState } from 'react'
import { QrReader } from 'react-qr-reader'
import style from './styles.module.css'
import { SCAN_DATA } from '../src/constants'

export const QRCodeScanner = () => {
	const [scanned, setScanned] = useState(null)

	const scanHandler = result => {
		if (!result) return

		const provData = JSON.parse(localStorage.getItem(SCAN_DATA) || '[]')
		if (provData.includes(result.text)) return

		setScanned(result.text)
		localStorage.setItem(
			SCAN_DATA,
			JSON.stringify([...provData, result[0].rawValue])
		)
	}

	return (
		<div className={style.container}>
			<QrReader
				constraints={ {facingMode: 'environment'} }
				scanDelay={1000}
				onResult={scanHandler}
				containerStyle={{ width: '500px' }}
			/>
			<a href={scanned} target='_blank'>
				{scanned}
			</a>
		</div>
	)
}
