import { QRCodeSVG } from "qrcode.react"
import { useState } from "react";
import style from './styles.module.css'
import { GENERATE_DATA } from "./constants";

export const QrCodeGenerator = () => {
  const [value, setValue] = useState('')
  const [result, setResult] = useState('')

  const onClickHandler = () => {
		const provData = JSON.parse(localStorage.getItem(GENERATE_DATA) || '[]')
		localStorage.setItem(GENERATE_DATA, JSON.stringify([...provData, value]))

    setResult(value)
    setValue('')
  }
  const onChangeHandler = (e) => {
    setValue(e.target.value)
    setResult('')
  }
  return (
		<div className={style.container}>
			<input
				className={style.input}
				type='text'
				value={value}
				onChange={onChangeHandler}
				placeholder='Введите текст'
			/>
			<button className={style.button} type='button' onClick={onClickHandler}>
				Сгенерировать QR code
			</button>
			{result !== '' && <QRCodeSVG value={result} size={200} />}
		</div>
	)
}