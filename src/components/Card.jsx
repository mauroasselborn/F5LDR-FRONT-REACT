import { useState } from 'react'
import './card.css'

export const CardProduct = ({ descripcion }) => {
    const [state, setState] = useState(0)

    return (
        <div className="card-container">
            {/* <h4>card</h4> */}
            <div className="card-img">
                {/* <p>img</p> */}
                <img src="https://pbs.twimg.com/media/DachyweUQAAreh9?format=jpg&name=4096x4096" width="260px" height="250px" />
            </div>

            <div className="card-body">
                <h3>{descripcion}</h3>
            </div>

            <div className="card-footer">
                <div className="card-buttons">
                    <div
                        className="card-button"
                        onClick={() => {
                            state > 0 && setState(state - 1)
                        }}
                    >
                        <p>-</p>
                    </div>
                    <p className="card-state">{state}</p>
                    <div className="card-button" onClick={() => setState(state + 1)}>
                        <p>+</p>
                    </div>
                </div>
                <div className="card-buttonadd">
                    <p onClick={() => alert(`Se agregaron ${state} cervezas al carrito`)}>Agregar</p>
                </div>
            </div>
        </div>
    )
}
