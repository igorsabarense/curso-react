import React from 'react'
import DiretaFilho from './DiretaFilho'

export default function DiretaPai(props){
    return (
        <div>
            <DiretaFilho nome="Filho 01" idade={20} nerd={true}></DiretaFilho>            
        </div>
    )
}