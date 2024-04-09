import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { Produto } from '../../App'

type CartState = {
  itens: Produto[]
}

const initialState: CartState = {
  itens: []
}

const cartSlice = createSlice({
  name: 'carrinho',
  initialState,
  reducers: {
    adicionar: (state, action: PayloadAction<Produto>) => {
      const produto = action.payload

      if (state.itens.find((produto) => produto.id === produto.id)) {
        alert('O item já foi adicionado')
      } else {
        state.itens.push(produto)
      }
    }
  }
})

export const { adicionar } = cartSlice.actions
export default cartSlice.reducer
