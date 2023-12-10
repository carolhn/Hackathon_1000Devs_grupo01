import { useState } from 'react';
import { getPacienteById } from '../../API/fetchPattient';

export function ShowPatient() {
    const [pacienteId, setPacienteId] = useState('');
    const [paciente, setPaciente] = useState(null);

    const handleGetPacienteById = async () => {
        try {
            const pacienteEncontrado = await getPacienteById(pacienteId);
            setPaciente(pacienteEncontrado);
            console.log('Paciente encontrado:', pacienteEncontrado);
        } catch (error) {
            console.error('Erro ao obter paciente:', error);
        }
    };

    return (
        <div>
            <h2>Mostrar Paciente</h2>
            <input type="text" placeholder="ID do Paciente" value={pacienteId} onChange={(e) => setPacienteId(e.target.value)} />
            <button onClick={handleGetPacienteById}>Mostrar Paciente</button>
            {paciente && (
                <div>
                    <p>ID: {paciente.id}</p>
                    <p>Nome: {paciente.nome}</p>
                    <p>Data de Nascimento: {paciente.data_nascimento}</p>
                </div>
            )}
        </div>
    );
}

