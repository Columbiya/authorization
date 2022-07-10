import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Modal from './Modal'

const Auth = (props) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isRegisterShown, setRegisterShown] = useState(false)
    const [isForgotPassShown, setForgotPassShown] = useState(false)
    const navigate = useNavigate()

    const hidePrev = prev => {
        prev(false)
    }

    const onRegisterClick = e => {
        hidePrev(setForgotPassShown)
        setRegisterShown(true)
    }

    const onForgotPassClick = e => {
        hidePrev(setRegisterShown)
        setForgotPassShown(true)
    }

    const onLoginClick = e => {
        const userPassword = localStorage.getItem(email)

        if (!userPassword) {
            alert('Неправильный Email')
            return
        }

        if (userPassword !== password) {
            alert('Неправильный пароль')
            return
        }

        navigate(`/profile/${email}`)
    }

    return (
        <>
            <form>
                <h2>Авторизация</h2>
                <input value={email} placeholder="email" onChange={e => setEmail(e.target.value)} />
                <input value={password} placeholder="password" onChange={e => setPassword(e.target.value)} />
                <button type='button' onClick={onLoginClick}>Войти</button>
                <div>
                    <button type='button' onClick={onRegisterClick}>Регистрация</button>
                    <button type='button' onClick={onForgotPassClick}>Забыл пароль</button>
                </div>
            </form>

            {isRegisterShown && <Modal setModalShown={setRegisterShown} isRegister={true} />}
            {isForgotPassShown && <Modal setModalShown={setForgotPassShown} isRegister={false} />}
        </>

    )
}

export default Auth