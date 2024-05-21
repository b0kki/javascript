import { useEffect, useState } from "react";
import "./styles.css";

const Formulario = () => {
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [result, setResult] = useState(0);

  const imc = () => {
    const result = weight / (height * height);

    if (result <= 18.5) {
      setResult(`Seu IMC é ${result}. Você está abaixo do peso`);
    } else if (result >= 18.5 && result <= 25) {
      setResult(`Seu IMC é ${result}. Você está no peso ideal`);
    } else if (result >= 25 && result <= 29) {
      setResult(`Seu IMC é ${result}. Você está com obesidade grau I`);
    } else if (result >= 30 && result <= 39) {
      setResult(`Seu IMC é ${result}. Você está com obesidade grau II`);
    } else {
      setResult(`Seu IMC é ${result}. Você está com obesidade grau III`);
    }
  };

  useEffect(() => {
    imc();
  }, [weight, height]);

  return (
    <div className="container">
      <form>
        <h1>Calcule seu IMC</h1>
        <input
          onChange={({ target }) => setWeight(parseFloat(target.value))}
          type="number"
          placeholder="Digite seu peso"
        />
        <input
          onChange={({ target }) => setHeight(parseFloat(target.value))}
          type="number"
          placeholder="Digite sua altura"
        />
      </form>
      <h4>{result}</h4>
    </div>
  );
};

export default Formulario;
