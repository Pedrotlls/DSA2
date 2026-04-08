import { useState } from "react" 

import { verificarIdade } from "../utils/verificarIdade" 

 

function Formulario(){ 

 

const [idade, setIdade] = useState("") 

const [resultado, setResultado] = useState("") 

 

function verificar(){ 

 

const resposta = verificarIdade(idade) 

setResultado(resposta) 

 

} 

 

return( 

 

<div> 

 

<h2>Verificar Idade</h2> 

 

<input 

type="number" 

placeholder="Digite a idade" 

onChange={(e)=> setIdade(e.target.value)} 

/> 

 

<button onClick={verificar}> 

Verificar 

</button> 

 

<p>{resultado}</p> 

 

</div> 

 

) 

 

} 

 

export default Formulario 