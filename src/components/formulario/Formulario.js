import React, { Fragment, useState } from 'react'
import uuid from 'uuid/v4'

const Formulario = ({ crearCita }) => {
    const [quote, updateQuote] = useState({
        mascota: '',
        propietario: '',
        fecha: '',
        hora: '',
        sintomas: ''
    })
    const [error, updateError] = useState(false)
    const actualizarState = e => {
        updateQuote({
            ...quote,
            [e.target.name]: e.target.value
        })
    }
    const { mascota, propietario, fecha, hora, sintomas } = quote

    const submitCita = e => {
        e.preventDefault()
        //validad formulario
        if (mascota.trim() === '' ||
            propietario.trim() === '' ||
            fecha.trim() === '' ||
            hora.trim() === '' ||
            sintomas.trim() === '') {
            updateError(true)
            return;
        }
        updateError(false)
        //asignar UD
        quote.id = uuid();
        //Crear cita
        crearCita(quote)
        //  reiniciar formulario
        updateQuote({
            mascota: '',
            propietario: '',
            fecha: '',
            hora: '',
            sintomas: ''
        })
        console.log(quote);
    }
    return (
        <Fragment>
            <h1>Crear citas</h1>
            {error ? <p className="alerta-error">Todos los campos son obligatorios</p> : null}
            <form
                onSubmit={submitCita}
            >
                <label>Nombre Mascota</label>
                <input
                    value={mascota}
                    onChange={actualizarState}
                    type="name"
                    name="mascota"
                    className="u-full-width"
                    placeholder="Nombre mascota"
                />
                <label>Nombre Dueño</label>
                <input
                    value={propietario}
                    onChange={actualizarState}
                    type="name"
                    name="propietario"
                    className="u-full-width"
                    placeholder="Nombre del dueño de la mascota"
                />
                <label>Fecha</label>
                <input
                    value={fecha}
                    onChange={actualizarState}
                    type="date"
                    name="fecha"
                    className="u-full-width"
                />
                <label>Hora</label>
                <input
                    value={hora}
                    onChange={actualizarState}
                    type="time"
                    name="hora"
                    className="u-full-width"
                />
                <label>Síntomas</label>
                <textarea
                    value={sintomas}
                    onChange={actualizarState}
                    name="sintomas"
                    className="u-full-width"
                ></textarea>
                <button
                    type="submit"
                    className="u-full-width button-primary"
                >Agregar cita</button>
            </form>
        </Fragment>

    );
}

export default Formulario;