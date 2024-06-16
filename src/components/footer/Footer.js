import React from 'react'
import icinstagram from '../../img/ic-instagram.svg'
import icwhatsapp from '../../img/ic-whatsapp.svg'

export default function Footer() {
    return (
        <footer className="contact">
            <div className="container">
                <h2>Contact</h2>
                <div className="fx-wrp contact-items">
                <div className="contact-item">
                    <p className="contact__caption">Phone</p>
                    <a className="text-big" href="tel:+74993506604">+7 (499) 350-66-04</a>
                </div>
                <div className="contact-item">
                    <p className="contact__caption">Phone</p>
                    <div className="fx soc">
                    <a className="soc-link" href="#" target="_blank"><img
                        src={icinstagram}
                        alt="instagram"
                        /></a>
                    <a className="soc-link" href="#" target="_blank"><img
                        src={icwhatsapp}
                        alt="whatsapp"
                        /></a>
                    </div>
                </div>
                <div className="contact-item">
                    <p className="contact__caption">Address</p>
                    <p className="text-big">Dubininskaya Ulitsa, 96, Moscow, Russia, 115093</p>
                </div>
                <div className="contact-item">
                    <p className="contact__caption">Working Hours</p>
                    <p className="text-big">24 hours a day</p>
                </div>
                </div>
                <iframe
                src="https://yandex.ru/map-widget/v1/?um=constructor%3A477c191611f7db710cf33f694802c4bc0a0378d951a0af4f691a7e6a6d510dff&amp;source=constructor"
                loading="lazy"
                ></iframe>
            </div>
        </footer>
    )
}
