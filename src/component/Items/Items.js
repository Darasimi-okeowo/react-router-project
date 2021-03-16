import React, {useState} from 'react'

const Items = () => {
    const [plan, setPlan] = useState(true);
    const [selected, setSelected] = useState({})

    const items = [
        {
            id: 1,
            name: 'Gold',
            notes: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.Aperiam sed quis totam saepe mollitia tempore, modi eveniet repellat! Odio, non!'
        },
        {
            id: 2,
            name: 'Silver',
            notes: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.Aperiam sed quis totam saepe mollitia tempore, modi eveniet repellat! Odio, non!'
        },
        {
            id: 3,
            name: 'Bronze',
            notes: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.Aperiam sed quis totam saepe mollitia tempore, modi eveniet repellat! Odio, non!'
        }
    ]


    const choosePlan = (details) => {
        console.log(details)
        setPlan(false)
        setSelected(details)
    }
    return (
        <div className='item--wrapper'>
            {items.map(item => (
                <div className='items' key={item.id}>
                    <h1>{item.name}</h1>
                    <p>{item.notes}</p>
                    <button className='Button' onClick={() => choosePlan(item)}>CHOOSE PLAN</button>
                </div>
            )
            )}
            {plan === false && 
            <div className='modal-overlay'>
                <div className='modal'>
                    <h1>Congratulations!!!</h1>
                    <h4>You Have Successfully Subscribed To {selected.name} Plan</h4>
                    <button onClick={() =>setPlan(true)}>CLOSE</button>
                </div>
            </div>}
        </div>
    )
}

export default Items
