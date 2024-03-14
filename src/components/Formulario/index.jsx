import { useState, useEffect } from "react";
import './styles.css';

const Formulario = () => {
    const [weight, setWeight] = useState(0);
    const [height, setHeight] = useState(0);



    useEffect(() => {
    }, [weight, height]);

    const imc = () => {
        const result = weight / (height * height)

        if (result <= 18.5) {
            return (
                <p>Seu IMC é {result}. Você está abaixo do peso.</p>
            )
        } else if (result >= 18.5 && imc <= 25) {
            return (
                <p>Seu IMC é {result}. Você está no peso ideal.</p>
            )
        } else {
            return (
                <p>Seu IMC é {result}. Você está acima do peso.</p>
            )
        }
    }

    return (
        <div className="container">
            <form>
                <h1>Calcule seu IMC</h1>
                <input type="number" placeholder="Digite seu peso" onChange={({ target }) => setWeight(parseInt(target.value))} />
                <input type="number" placeholder="Digite sua altura" onChange={({ target }) => setHeight(parseInt(target.value))} />
                {imc()}
            </form>
        </div>
    )
}



export default Formulario

