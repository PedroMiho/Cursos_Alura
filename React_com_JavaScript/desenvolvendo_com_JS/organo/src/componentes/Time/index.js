import Colaborador from '../Colaborador'
import './Time.css' 

const Time = (props) => {

    const css = {backgroundColor: props.corSecundaria}
    const corDaBorda = {borderColor:props.corPrimaria}

    return (
        
        (props.colaboradores.length > 0) &&
        <section className='time' style={css}>
            <h3 style={corDaBorda}>{props.nome}</h3>
            <div className='colaboradores'>
                {props.colaboradores.map(colaborador => <Colaborador
                    nome={colaborador.nome}
                    cargo={colaborador.cargo}
                    imagem={colaborador.imagem}
                    key={colaborador.nome}
                    corDeFundo={props.corPrimaria}
                />)}
            </div>
        </section>
    )

}

export default Time