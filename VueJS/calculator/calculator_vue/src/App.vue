<script setup>
import { reactive } from 'vue';


const calcula = reactive({
  filtro: 'add',
  num1: 0,
  num2: 0,
  operacoes: [
    add, subtract, multiply, divide,
  ]


})

function add() {
  const { num1, num2 } = calcula;
  return calcula.num1 + calcula.num2;
}

function subtract() {
  const { num1, num2 } = calcula;
  return calcula.num1 - calcula.num2;
}

function multiply() {
  const { num1, num2 } = calcula;
  return calcula.num1 * calcula.num2;
}

function divide() {
  const { num1, num2 } = calcula;
  return calcula.num1 / calcula.num2;
}

const getTarefasFiltradas = () => {
  const { filtro } = calcula;

  switch (filtro) {
    case 'add':
      return add();
    case 'subtract':
      return subtract();
    case 'multiply':
      return multiply();
    case 'divide':
      return divide();
  }
}


</script>

<template>
  <div class="container">
    <h1>Calculadora VueJS</h1>
    <div class="row">
      <div class="col">
        <form>
          <label for="1">Digite o primeiro numero:</label><br />
          <input @keyup="evento => calcula.num1 = evento.target.value" type="number"
          value="1"> 
          <div class="col-md-2">
          <label for="2">Digite o segundo numero:</label><br />
            <input @keyup="evento => calcula.num2 = evento.target.value" type="number"
              value="2">
          </div>
        </form>
        <div id="operacao" class="col-md-3">
          <p>Escolha a operação:</p>
          <select @change="evento => calcula.filtro = evento.target.value">
            <option value="multiply">x</option>
            <option value="add">+</option>
            <option value="subtract">-</option>
            <option value="divide">÷</option>
          </select>
          <p>O resultado é: {{ multiply() }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
* {
  padding: 0;
  margin: 0;
  background-color: #0f0636;
  color: aliceblue;
  font-family: sans-serif;
}

h1 {
  margin-bottom: 40px;
  margin-left: 20px;
}

.container {
  max-width: 1024px;
  margin: 0 auto;
  padding: 20px;
}

form {
  margin: 0 auto;
  text-align: center;
  display: block;
  width: 160px;
}

input {
  width: 30px;
  font-size: 20px;
  text-align: center;
  margin-bottom: 20px;
  padding: 5px;
  border: none;
  border-bottom: #fff solid 2px;
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }

#operacao {
  display: block;
  text-align: center;
}

select {
  padding: 5px;
}

p {
  margin: 10px;
}
</style>
