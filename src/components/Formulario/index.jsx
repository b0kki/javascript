import { useState } from "react"

const Formulario = () => {
    const [weight, setWeight] = useState(0);
    const [height, setHeight] = useState(0);

    const imc = () => {
        const square = height * height
        const result = weight / square

        if (result <= 19) {
            return (
                <p>Seu IMC é {result}. Você está abaixo do peso.</p>
            )
        } else {
            return (
                <p>Seu IMC é {result}. Você está acima do peso.</p>
            )
        }
    }

    return (
        <div className="container">
            <h1>Calcule seu IMC</h1>
            <form>
                <input type="number" placeholder="Digite seu peso" onChange={({ target }) => setWeight(parseInt(target.value))} />
                <input type="number" placeholder="Digite sua altura" onChange={({ target }) => setHeight(parseInt(target.value))} />
                {imc()}
            </form>
        </div>
    )
}



export default Formulario

