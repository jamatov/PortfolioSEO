import React, { useState } from 'react'
import NavInsta from '../img/navInsta.svg'
import NavFcBook from '../img/NavFsBook.svg'
import NavLN from '../img/NavLN.svg'
import NavSite from '../img/NavSite.svg'
import Call from '../img/Call.svg'
import MessageContact from '../img/MessageContact.svg'
import loationContact from '../img/locationContact.svg'
// import toast from 'react-hot-toast';
import { toast } from 'react-hot-toast'
import axios from 'axios'

export default function Contact() {
  const BOT_TOKEN = "6189574670:AAF6_AfceRuiuG3ZrSo_CSwfYyiY4hrpPb8";
  const CHAT_ID = "-1001892280247"

  // function formValidationChacking(name, number) {
  //   let isBoolean = false;

  //   if (!name) {
  //     setError(p => ({ ...p, name: [true, 'F.I.O. kiritilmadi!'] }))
  //     isBoolean = true

  //   } else if (name?.length < 6) {
  //     setError(p => ({ ...p, name: [true, "Bunchalik qisqa F.I.O. bo'lmaydi"] }))
  //     isBoolean = true
  //   }

  //   if (!number) {
  //     setError(p => ({ ...p, phone: [true, 'Telefon raqam kiritilmadi!'] }))
  //     isBoolean = true
  //   }
  //   return isBoolean;
  // }

  const sendForm = (e) => {
    e.preventDefault()
    let name = e.target[0].value
    let number = e.target[1].value

    // if (formValidationChacking(name, number)) return
    // setDisbl(true)

    let text = `<b>Ismi:</b> ${name} \n<b>Telefon raqami:</b> ${number} \n`

    axios.post(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
      chat_id: CHAT_ID,
      parse_mode: "html",
      text
    }, {
      headers: {
        "Content-Type": 'multipart/form-data',
      }
    })
      .then((res) => {
        toast.success("Сообщение отправлено 🙂")
        e.target.reset()
        setDisbl(false)
      })
      .catch((err) => {
        toast.error("Сообщение не отправлено! Пожалуйста, попробуйте еще раз 😞")
        setDisbl(false)
      })

    let style = {}
    if (inputValue === '') {
      style = {
        border: '2px solid red'
      }
    }
    else {
      style = {
        border: '2px solid green'
      }
    }
    setStyled(style)
  }

  const [styled, setStyled] = useState({ border: '1px solid red', borderRadius: '2px' })
  const [inputValue, setValue] = useState('')
  const [disbl, setDisbl] = useState(false)
  const [error, setError] = useState({
    name: [false, ""],
    phone: [false, ""],
  })


  return (
    <section className='contactSection' id='contact'>
      <div className="container">
        <div className="contactContent">
          <div className='contactInfo'>
            <h2> 05 <span>КОНТАКТ</span></h2>
            <div>
              <img src={Call} alt="..." />
              <h3>Телефон:</h3>
              <a href="tel:+998951666763">+99895 166 67 63</a>
            </div>

            <div>
              <img src={MessageContact} alt="..." />
              <h3>Эмаил:</h3>
              <a href="mailto:mirabdullajamatov@gmail.com">mirabdullajamatov@gmail.com</a>
            </div>

           

            <ul>
              <li>
                <a href="#">
                  <div>
                    <img src={NavInsta} alt="..." />
                  </div>
                </a>
              </li>
              <li>
                <a href="#">
                  <div>
                    <img src={NavFcBook} alt="..." />
                  </div>
                </a></li>
              <li>
              <a href="#">
                <div>
                  <img src={NavLN} alt="..." />
                </div>
              </a></li>
              <li>
                <a href="#">
                  <div>
                    <img src={NavSite} alt="..." />
                  </div>
                </a>
              </li>
            </ul>
          </div>

          <form className='row' onSubmit={sendForm}> 
            <h2>Всегда готов <span>обсудить работу</span> или сотрудничество</h2>

            <div className='col-md-6 col-12'>
              <input type="text" id='name' required placeholder='Введите ваше имя здесь' onChange={() => setError(p => ({ ...p, name: [false, ''] }))} style={error.name[0] ? styled : null} />
              {error.name[0] && <p style={{ color: 'red' }}>{error.name[1]}</p>}
              <br />

                <input onChange={() => setError(p => ({ ...p, name: [false, ''] }))} style={error.name[0] ? styled : null} type="tel" id='number' 
                  autocomplete="on" maxlength="13" minlength="4" data-intl-tel-input-id="1" placeholder='Введите свой номер здесь' 
                  onChange={(e) => {
                    e.target.setCustomValidity("");
                    if (!e.target.validity.valid) {
                      e.target.setCustomValidity(
                        "Вы ввели неверный номер ! Пример : +998977770777"
                      );
                    }
                    setError(p => ({ ...p, phone: [false, ''] }))
                  }} pattern="[+]{1}[0-9]{3}[0-9]{2}[0-9]{3}[0-9]{2}[0-9]{2}"
                /> 
              {error.phone[0] && <p style={{ color: 'red' }}>{error.phone[1]}</p>}
            </div>
            <div className='col-md-12 col-12'>
              <textarea name="message" id="message" cols="30" rows="10" placeholder='Напишите свое сообщение здесь'></textarea>
            </div>
              <button disabled={disbl}>Отправить</button>
          </form>
        </div>
      </div>
    </section>
  )
}
