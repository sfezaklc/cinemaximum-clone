import React, {useState,useEffect} from 'react'
import { Tab, Tabs } from 'react-bootstrap'
import { useNavigate, useParams } from 'react-router-dom'
import './Days.css'
const Days = ({selectedCinemas, id}) => {

    const navigate = useNavigate()
    const [key, setKey] = useState()
    const [days, setDays] = useState([])
    const HandleDate = () => {
        const days = ["Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi", "Pazar"];
        const months = ["Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran", "Temmuz", "Ağustos", "Eylül", "Ekim", "Kasım", "Aralık"]
        const today = new Date()
        let currentDay = today.getDay()
        let currentDate = today.getDate()
        let currentMonth = today.getMonth()
        let tomorrows = []
        if (currentDay == 0) {
            currentDay = 7
        }
        let dayCount = daysInMonth(currentMonth + 1,2022)

        function daysInMonth (month, year) {
            return new Date(year, month, 0).getDate();
        }
        console.log(dayCount)
        const calender = []
        calender.push({
            day: days[currentDay - 1],
            date: currentDate,
            month: months[currentMonth]
        }) 
        console.log(months[currentMonth], currentMonth)
        for (let i = 0; i < 6; i++) {
            if (currentDay > 6) {
                currentDay = 0
            }
            calender.push({
                day: days[currentDay],
                date: currentDate < dayCount ? ++currentDate : currentDate = 1,
                month: currentDate == 1  && currentMonth < 11 ? months[++currentMonth] : currentMonth == 11 ? months[0] : months[currentMonth] 
            })
            currentDay++  
        }
        console.log(calender)
        return calender  
    }
    useEffect(() => {
        const days = HandleDate()
        setDays(days)
        setKey(days[0].day)
    }, [])

    const HandleBuyTicket = (e) => {
        navigate(`/buyticket/${id}/${selectedCinemas[0].location}/${e.target.innerText}`)
    }
    
    return (
        <div className='container'>
            <Tabs
            id="controlled-tab-example"
            activeKey={key}
            onSelect={(k) => setKey(k)}
            className="mb-3"
        >
            {days.map((element, index) => (
                <Tab eventKey={element.day} key={index} title={`${element.date} ${element.month} ${element.day}`} className="text-start">
                    <button type="button" className="btn btn-outline-secondary me-2" onClick={HandleBuyTicket}>13.00</button>
                    <button type="button" className="btn btn-outline-secondary me-2" onClick={HandleBuyTicket}>16.00</button>
                    <button type="button" className="btn btn-outline-secondary me-2" onClick={HandleBuyTicket}>20.00</button>
                </Tab>
            ))}
        </Tabs>
        </div>
    )
}

export default Days