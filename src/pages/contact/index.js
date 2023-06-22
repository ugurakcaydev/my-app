
import React from 'react'
import Navbar from '@/Components/Navbar/Navbar'
import "./contact.css"
import BackToTopButton from '@/Components/BackToTopButton/BackToTopButton'
import MapContainer from '@/Components/mapContainer/MapContainer'
import Footer from '@/Components/Footer/Footer'
import Form from '@/Components/Form/Form'
export default function Contact() {

    return (
        <main>
            <BackToTopButton />
            <Navbar />
            <div className='contactMain'>
                <div className='containerComm'>
                    <div className='leftComm'>
                        <div className='hedarContainer'>
                            <h1>Contact us</h1>
                            <p>Our Friendly team woul love to hear from you</p>
                        </div>
                        <Form/>
                    </div>
                    <div className='rightComm'>
                    
                    </div>
                </div>
                <div className='informationContainer'>
                    <div className='infoDiv'>
                        <div className='infoIconDiv'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-3 h-3">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                            </svg>
                        </div>
                        <div className='infoPDiv'>
                            <h3 style={{ fontSize: "20px" }}>Bizi Arayın</h3>
                            <p style={{ fontSize: "15px" }}>Bu numaradan bize ulaşın</p>
                            <p style={{ fontSize: "13px" }}>(+90) 532 342 83 83</p>
                        </div>
                    </div>
                    <div className='infoDiv'>
                        <div className='infoIconDiv'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-3 h-3">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z" />
                            </svg>

                        </div>
                        <div className='infoPDiv'>
                            <h3 style={{ fontSize: "20px" }}>Ofise de Bekleriz</h3>
                            <p style={{ fontSize: "15px" }}>Ofisimizi Ziyaret Edebilirsiniz</p>
                            <p style={{ fontSize: "13px" }}>Altınşehir mahallesi/Doğanevler Caddesi </p>
                        </div>
                    </div>
                    <div className='infoDiv'>
                        <div className='infoIconDiv'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-3 h-3">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                            </svg>

                        </div>
                        <div className='infoPDiv'>
                            <h3 style={{ fontSize: "20px" }}>Chat to Sales</h3>
                            <p style={{ fontSize: "15px" }}>En kısa sürede döneceğiz</p>
                            <p style={{ fontSize: "13px" }}>info@akcaymimarlik.com</p>
                        </div>
                    </div>
                </div>
               
            </div>
            <Footer/>
        </main>
    )
}