import * as C from './styles'
import { Item } from '../../types/Item'
import { useState } from 'react'
import { items } from '../../data/items'
import { categories } from '../../data/categories'


type Props = {
    onAdd: (item: Item) => void
}

export const InputArea = ({onAdd}: Props) => {
    const [data, setData] = useState('')
    const [categoria, setCategoria] = useState('')
    const [titulo, setTitulo] = useState('')
    const [price, setPrice] = useState('')

    let categoryKeys: string[] = Object.keys(categories);

    const handleAddEvent = () => {
        onAdd({
            date: new Date(data),
            category: categoria,
            title: titulo,
            value: parseInt(price)
        })
        setData('');
        setCategoria('');
        setTitulo('');
        setPrice('');
    }
    return(
        <C.Container>
            <C.InputArea>
                <C.Title>Data</C.Title>
                <input 
                    type="date"
                    value={data}
                    onChange={e=>setData(e.target.value)}
                    required
                />
            </C.InputArea>
            <C.InputArea>
                <C.Title>Categoria</C.Title>
                <select required value={categoria} onChange={e=>setCategoria(e.target.value)}>
                <>
                    <option></option>
                    {categoryKeys.map((key, index) => (
                        <option key={index} value={key}>{categories[key].title}</option>
                    ))}
                </>
                </select>
            </C.InputArea>
            <C.InputArea>
                <C.Title>Título</C.Title>
                <input 
                    type="text"
                    value={titulo}
                    onChange={e=>setTitulo(e.target.value)}
                    required
                />
            </C.InputArea>
            <C.InputArea>
                <C.Title>Valor</C.Title>
                <input 
                    type="number"
                    value={price}
                    onChange={e=>setPrice(e.target.value)}
                    required
                />
            </C.InputArea>
            <C.InputArea>
                <C.Title></C.Title>
                <button onClick={handleAddEvent}>Adicionar</button>
            </C.InputArea>
            
        </C.Container>
    )
}