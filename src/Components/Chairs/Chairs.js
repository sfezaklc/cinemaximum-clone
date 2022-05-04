import React, { useEffect, useState } from 'react'

const Chairs = () => {
    const [chair, setChair] = useState([])
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
        <div>
            {chair.map((el) => (
                <>
                    <input className="form-check-input" key={el.id} type="checkbox" value={el.letter} id="flexCheckDefault" onChange={() => handleChange(el)} />
                    <label className="form-check-label" htmlFor="flexCheckDefault" key={el.letter}>
                        {`${el.letter}${el.num}`}
                    </label>
                </>

            )
            )}

        </div>
    )
}

export default Chairs