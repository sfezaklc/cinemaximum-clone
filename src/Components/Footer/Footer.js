import React from 'react'
import './Footer.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebookF, faInstagram,faTwitter,faYoutube,faFoursquare } from '@fortawesome/free-brands-svg-icons' 
const Footer = () => {
    return (
        <div className='footer-container mt-5 mb-5'>
            <h6 className='text-center'>Bizi Takip Et</h6>
            <div className="row footer-icons-container mb-4">
                <div className="col-2">
                    <FontAwesomeIcon icon={faFacebookF} />
                </div>
                <div className="col-2">
                    <FontAwesomeIcon icon={faInstagram} />
                </div>
                <div className="col-2">
                    <FontAwesomeIcon icon={faTwitter}/>
                </div>
                <div className="col-2">
                    <FontAwesomeIcon icon={faYoutube} />
                </div>
                <div className="col-2">
                    <FontAwesomeIcon icon={faFoursquare} />
                </div>
            </div>
            <div className='container row mx-auto'>
                <div className='col-8 d-flex justify-content-between text-start '>
                    <ul>
                        <li><a href="">Vizyonda</a></li>
                        <li><a href="">Yakında</a></li>
                        <li><a href="">Sinemalar</a></li>
                        <li><a href="">CGV Arthouse</a></li>
                        <li><a href="">CGV Cinema Club</a></li>
                        <li><a href="">Ayrıcalıklı Salonlar</a></li>
                        <li><a href="">Kampanyalar</a></li>
                        <li><a href="">Özel Etkinlik Talepleri</a></li>
                    </ul>
                    <ul>
                        <li><a href="">E-Bilet</a></li>
                        <li><a href="">İade İşlemleri</a></li>
                        <li><a href="">MoviePass İade İşlemleri</a></li>
                        <li><a href="">İnsan Kaynakları</a></li>
                        <li><a href="">Sıkça Sorulan Sorular</a></li>
                        <li><a href="">İşlem Rehberi</a></li>
                        <li><a href="">Hakkımızda</a></li>
                        <li><a href="">Yorum ve Öneriler</a></li>
                    </ul>
                    <ul>
                        <li><a href="">KVK Aydınlatma Bildirimi</a></li>
                        <li><a href="">Kamera Sistemleri Bildirimi</a></li>
                        <li><a href="">KVKK Basvuru Formu</a></li>
                        <li><a href="">KVK Politikasi</a></li>
                        <li><a href="">İletişim</a></li>
                    </ul>
                </div>
                <div className='col-4 d-flex flex-column ml-auto text-end' style={{gap:"20px"}}>
                    <div>
                        <a href="">Gizlilik</a>
                        <span className='ms-3'><a href="">Kullanım Koşulları</a></span>
                        <div><a href="">Mesafeli Bilet Satış Sözleşmesi</a></div>
                    </div>

                    <div>
                        <a href="">Reklam vermek için: www.marsmedia.com.tr</a>
                        <div>© Copyright 2017</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer