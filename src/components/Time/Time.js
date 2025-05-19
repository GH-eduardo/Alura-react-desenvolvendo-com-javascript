import Colaborador from '../Colaborador/Colaborador';
import './Time.css'

const Time = (props) => {

    const css = { backgroundColor: props.corSecundaria }

    // Para realizar renderização condicional podemos utilizar o operador ternário como foi feito abaixo
    // ou
    // podemos utilizar o operador '&&' no lugar do '?' e retirar o ':' do final
    // desse modo se a condição for true já retorna o que vier a seguir
    return ( 
        (props.colaboradores.length > 0) ? <section className='time' style = {css}> 
            <h3 style = { { borderColor: props.corPrimaria } }>{props.nome}</h3>
            <div className='colaboradores'>
                {props.colaboradores.map( colaborador => <Colaborador corDeFundo = {props.corPrimaria} key = {colaborador.nome} nome = {colaborador.nome} cargo = {colaborador.cargo} imagem = {colaborador.imagem}/>)}
            </div>
        </section>
        : ''
    )
}

export default Time;