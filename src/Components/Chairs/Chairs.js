import React, { useContext, useEffect, useState } from 'react'
import { ChairContext } from '../../Contexts/ChairContext';
import { TicketContext } from '../../Contexts/TicketContext';
import './chairs.css'
const Chairs = () => {
    const {chair, setChair,selectedChair, setSelectedChair} = useContext(ChairContext)
    const {count} = useContext(TicketContext)
    const letters = "abcdef".split("");
    
    const handleChange = (e) => {
        //const selectedChair = chair.filter(item => item.letter == e.letter && item.num == e.num)
        //selectedChair.isSelected = !e.isSelected
            let items = [...chair]
            let selectedItem = {...chair[e.id]}
            selectedItem.isSelected = !e.isSelected
            items[e.id] = selectedItem
            setChair(items)
           
    }
    useEffect(() => {
        let selectedChairs = chair.filter(chair => chair.isSelected === true)
        setSelectedChair(selectedChairs)
    }, [chair])
    
    const Handlechairs = () => {
        let j = 0;
        letters.forEach(letter => {
            for (let i = 0; i <= 10; i++) {
                const item = {
                    id: j++,
                    letter: letter,
                    num: i,
                    isSold: false,
                    isSelected: false
                };
                setChair((c) => [...c, item])
            }
        })
    }
    useEffect(() => {
        Handlechairs()
    }, [])
    
    console.log(chair)
    return (
        <div className='row text-start chairs-box'> 
                {chair.map((el) => (
                    <div className='col-1-10'>
                        <input className="form-check-input" key={el.id} type="checkbox" value={el.letter} id="flexCheckDefault" onChange={() => handleChange(el)} />
                        <label className="form-check-label" htmlFor="flexCheckDefault" key={el.letter}>
                            {`${el.letter}${el.num}`}
                        </label>
                    </div>
                )
                )}
                <div className='perde mt-5 mb-3'>Perde</div>
        </div>
    )
}

export default Chairs