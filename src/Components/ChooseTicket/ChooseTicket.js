import React, { useState, useEffect, useContext } from 'react'
import './ChooseTicket.css'
import { faPlus, faMinus, faTicket } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { TicketContext } from '../../Contexts/TicketContext';

const ChooseTicket = () => {
    const {price, setPrice, count, setCount} = useContext(TicketContext)

    const handlePlus = () =>{
        setCount(count+1)
    }
    const handleMinus = () =>{
        if(count > 0){
            setCount(count-1)
        }
    }
    const handlePrice = () =>{
        count === 0 ? setPrice(0) : setPrice(count * 51)
    }
    useEffect(() => {
      handlePrice()
    }, [count])
    
    return (
        <div className='text-start mb-4'>
            <div className='d-flex justify-content-between align-items-center cs-ticket-box mt-3'>
                <span style={{ width: '60%' }}><i className='me-2 ms-3 cs-ticket-icon'><FontAwesomeIcon icon={faTicket} /></i>GOLD CLASS</span>
                <span style={{ width: '20%' }}>51 ₺</span>
                <span style={{ width: '20%' }} className='d-flex justify-content-around'>
                    <button onClick={handleMinus}>
                        <FontAwesomeIcon icon={faMinus} />
                    </button>
                    <span>{count}</span>
                    <button onClick={handlePlus}>
                        <FontAwesomeIcon icon={faPlus} />
                    </button>
                </span>
            </div>
            <div className='mt-3 text-end'>{`Toplam Tutar: ${price},00 ₺`}</div>
        </div>
    )
}

export default ChooseTicket