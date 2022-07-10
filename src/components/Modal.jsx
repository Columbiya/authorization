import React, { useState } from 'react'
import closeImage from '../assets/close.png'

const Register = ({ setModalShown, isRegister }) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const register = e => {
        if ((!email || !password) && isRegister) {
            alert('Заполните все поля!')
            return
        }

        else if (!isRegister && !email) {
            alert('Заполните email')
            return
        }

        if (isRegister) {
            const candidate = localStorage.getItem(email)

            if (candidate) {
                alert('Пользователь с таким email уже существует')
                return
            }

            localStorage.setItem(email, password)
            alert('Вы успешно зарегистрировались')
        }
        else {
            localStorage.removeItem(email)
            alert('Вы успешно обновили пароль')
        }

        setModalShown(false)
    }

    return (
        <form>
            <img src={closeImage} alt="" style={{cursor: 'pointer'}} onClick={() => setModalShown(false)} />
            <h2>{isRegister ? 'Регистрация': 'Забыл пароль'}</h2>
            <input value={email} placeholder="email" onChange={e => setEmail(e.target.value)} />
            {isRegister && <input value={password} placeholder="password" onChange={e => setPassword(e.target.value)} />}
            <button type='button' onClick={register}>{isRegister ? 'Зарегистрироваться': 'Обновить пароль'}</button>
        </form>
    )
}

export default Register