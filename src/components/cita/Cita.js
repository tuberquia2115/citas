import React from 'react'
const Cita = ({ cita, eliminarCita }) => {
    return (
        <div className="cita">
            <div style={{
                display: 'flex',
                justifyContent:'space-between',
                alignItems:'center'
                
            }}>
                <div>
                    <p>Mascota: <span>{cita.mascota}</span></p>
                    <p>Dueño: <span>{cita.propietario}</span></p>
                    <p>Fecha: <span>{cita.fecha}</span></p>
                    <p>Hora: <span>{cita.hora}</span></p>
                    <p>Síntomas: <span>{cita.sintomas}</span></p>
                </div>
                <img src={cita.img} style={{ width: 250, height: 150 }} alt="imagen" />
            </div>


            <button
                className="button eliminar u-full-width"
                onClick={() => eliminarCita(cita.id)}
            >
                Eliminar &time;</button>
        </div>
    );
}

export default Cita;