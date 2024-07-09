import { Route, Routes } from 'react-router-dom'
import { Navigation } from './Navigation'
import { QRCodeScanner } from './QRCodeScanner'
import { QrCodeGenerator } from './QrCodeGenerator'
import { GenerateHistory } from './GenerateHistory'
import { ScanHistory } from './ScanHistory'

export const Layout = () => {
	return (
		<div>
			<Navigation />
			<Routes>
				<Route path='/qr-code/generate' element={<QrCodeGenerator />} />
				<Route path='/qr-code/scan' element={<QRCodeScanner />} />
				<Route path='/qr-code/generateHistory' element={<GenerateHistory/>} />
				<Route path='/qr-code/scanHistory' element={<ScanHistory />} />
			</Routes>
		</div>
	)
}
