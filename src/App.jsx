import React from 'react';
import './index.css';
import './App.css';
import Primeiro from './components/basicos/Primeiro';
import ComParametro from './components/basicos/ComParametro';
import Fragmento from './components/basicos/Fragmento';
import Aleatorio from './components/basicos/Aleatorio';
import Card from './components/layout/Card';
import Familia from './components/basicos/Familia';
import FamiliaMembro from './components/basicos/FamiliaMembro';
import ListaAlunos from './components/repeticao/ListaAlunos';
import TabelaProdutos from './components/repeticao/TabelaProdutos';
import ParOuImpar from './components/condicional/ParOuImpar';
import UsuarioInfo from './components/condicional/UsuarioInfo';
import DiretaPai from './components/comunicacao/DiretaPai';
import IndiretaPai from './components/comunicacao/IndiretaPai';
import Input from './components/formulario/Input'
import Contador from './components/contador/Contador';

export default (props) => {
	return (
		<div className="App">
			<h1>Fundamentos React</h1>
			<div className="Cards">
			<Card titulo=" #11 - Contador">
					<Contador numeroInicial={10}></Contador>
			</Card>
			<Card titulo=" #10 - Componente Controlado">
					<Input></Input>
			</Card>
            <Card titulo=" #09 - Comunicação Indireta">
					<IndiretaPai></IndiretaPai>
			</Card>
            <Card titulo=" #08 - Comunicação Direta">
					<DiretaPai></DiretaPai>
			</Card>
			<Card titulo=" #07 - Renderização Condicional">
					<ParOuImpar numero={20}/>
                    <UsuarioInfo usuario={{nome: 'Bruno'}} />
                    <UsuarioInfo />
			</Card>
			<Card titulo=" #06 - Desafio de Repetição">
					<TabelaProdutos />
			</Card>
			<Card titulo=" #05 - Lista de Repetição">
					<ListaAlunos />
			</Card>
			<Card titulo=" #04 - Familia">
					<Familia sobrenome="Silva">
						<FamiliaMembro nome="Pedro" />
						<FamiliaMembro nome="Pietra" />
						<FamiliaMembro nome="Carlos Renato" />
						{/** */}
					</Familia>
			</Card>
			<Card titulo=" #03 - Desafio Aleatório">
					<Aleatorio min={1} max={10} />
			</Card>
			<Card titulo=" #02 - Fragmento">
					<Fragmento />
			</Card>
			<Card titulo=" #01 - Com Parametro">
					<ComParametro titulo={'Situação do Aluno'} aluno={'João'} nota={99.4} />
			</Card>

			<Card titulo=" #00 - Primeiro">
					<Primeiro />
			</Card>
			</div>
		</div>
	);
};
