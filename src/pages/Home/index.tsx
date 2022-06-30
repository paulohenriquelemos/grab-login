import { FormEvent, useState } from "react";
import { Logo } from "../../components/Logo";
import { Undraw } from "../../components/Undraw";

import { FiAtSign } from 'react-icons/Fi'
import { MdLockOutline } from 'react-icons/Md'
import { BsEyeSlash, BsEye } from 'react-icons/Bs'

export function Home() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [textError, setTextError] = useState('')
  const [borderEmail, setBorderEmail] = useState('white')
  const [borderPassword, setBorderPassword] = useState('white')
  const [passwordVisible, setPasswordVisible] = useState('password')

  function handleSubmitForm(event: FormEvent) {
    event.preventDefault()
    if(email.trim().length === 0 && password.trim().length === 0) {
      setTextError('Digite um E-mail e Password válidos.')
      setBorderEmail('vermelho')
      setBorderPassword('vermelho')
      return
    }
    if(email.trim().length === 0) {
      setTextError('Digite um E-mail válido.')
      setBorderEmail('vermelho')
      return
    }
    if(password.trim().length < 6) {
      setTextError('Digite um password de no mínimo 6 caracteres.')
      setBorderPassword('vermelho')
      return
    }
    alert('Login efetuado com sucesso.')
    setPassword('')
    setEmail('')
    setTextError('')
    console.log(borderPassword)
  }

  function handlePasswordVisible() {
    if(passwordVisible === 'password') {
      setPasswordVisible('text')
      return
    }
    setPasswordVisible('password')
    console.log(borderPassword)
  }

  return(
    <main
      className="grid grid-cols-1 md:grid-cols-2 w-full mx-auto items-center h-screen"
    >
      <section
        className="bg-azul p-6 pt-20 sm:pt-6 w-full h-full flex flex-col
        items-center sm:justify-center relative"
      >
        <Logo />
        <form
          onSubmit={handleSubmitForm}
          className="min-w-[300px] mt-10 grid grid-cols-1 gap-4 text-center"
        >
          <div className="relative">
            <input
              className={`rounded-full text-white bg-transparent p-4 pl-11 w-full sm:w-80 h-12 outline-none border-2
              border-${borderEmail} transition duration-300 focus:border-green-500
              invalid:border-vermelho peer placeholder:text-white`}
              type="email"
              placeholder="E-mail"
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
              onInvalid={() => setBorderEmail('vermelho')}
              onFocus={() => setBorderEmail('white')}
              value={email} onChange={event => setEmail(event.target.value)}
            />
            <FiAtSign
              className="absolute left-4 top-3.5 text-xl text-white
              peer-invalid:text-vermelho peer-focus:text-green-500"
            />
          </div>
          {textError !== ''
            ? <span className="text-white max-w-[20rem]">{textError}</span>
            : ''
          }
          <div className="relative">
            <input
              className={`rounded-full bg-transparent p-4 pl-11 w-full sm:w-80 h-12 outline-none border-2
              border-${borderPassword} transition duration-300 focus:border-green-500
              placeholder:text-white peer text-white`}
              type={passwordVisible}
              placeholder="Senha (mínimo 6 caracteres)"
              onFocus={() => setBorderPassword('white')}
              value={password} onChange={event => setPassword(event.target.value)}
            />
            <MdLockOutline
              className={`absolute left-4 top-3.5 text-xl text-${borderPassword}
            peer-invalid:text-vermelho peer-focus:text-green-500`}
            />
            {passwordVisible === "password"
            ? (
              <BsEyeSlash onClick={handlePasswordVisible}
                className="absolute right-4 top-3.5 text-xl text-white cursor-pointer"
              />
            )
            : (
              <BsEye onClick={handlePasswordVisible}
                className="absolute right-4 top-3.5 text-xl text-white cursor-pointer"
              />
            )
          }
          </div>
          <button
            className="rounded-full w-full sm:w-80 h-12 outline-none bg-white
            text-lg font-medium text-gray-600 transition-colors duration-300
            enabled:hover:bg-gray-600 enabled:hover:text-white
            disabled:opacity-50 disabled:cursor-not-allowed"
            type="submit"
            disabled={email.trim().length === 0
              ? true
              : password.trim().length === 0
              ? true
              : false}
          >
            Entrar
          </button>
        </form>
        <div className="text-center text-white absolute bottom-8">
          <span className="block">
            Problemas para entrar?
          </span>
          <a
            className="mt-2 transition-colors duration-200 hover:text-cyan-300"
            href="#" title="Clique aqui"
          >
            Clique aqui
          </a>
        </div>
      </section>
      <div className="p-6 hidden md:block">
        <Undraw />
      </div>
    </main>
  )
}
