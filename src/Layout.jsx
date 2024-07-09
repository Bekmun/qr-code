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
				<Route path='/generate' element={<QrCodeGenerator />} />
				<Route path='/scan' element={<QRCodeScanner />} />
				<Route path='/generateHistory' element={<GenerateHistory/>} />
				<Route path='/scanHistory' element={<ScanHistory />} />
			</Routes>
		</div>
	)
}
