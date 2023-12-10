import { useState } from 'react';
import { updatePaciente } from '../../API/fetchPattient';

export function UpdatePatient() {
    const [pacienteId, setPacienteId] = useState('');
    const [nome, setNome] = useState('');
    const [dataNascimento, setDataNascimento] = useState('');

    const handleUpdatePaciente = async () => {
        try {
            const pacienteData = { nome, data_nascimento: dataNascimento };
            const pacienteAtualizado = await updatePaciente(pacienteId, pacienteData);
            console.log('Paciente atualizado:', pacienteAtualizado);
        } catch (error) {
            console.error('Erro ao atualizar paciente:', error);
        }
    };

    return (
        <div>
            <h2>Atualizar Paciente</h2>
            <input type="text" placeholder="ID do Paciente" value={pacienteId} onChange={(e) => setPacienteId(e.target.value)} />
            <input type="text" placeholder="Novo Nome" value={nome} onChange={(e) => setNome(e.target.value)} />
            <input type="text" placeholder="Nova Data de Nascimento" value={dataNascimento} onChange={(e) => setDataNascimento(e.target.value)} />
            <button onClick={handleUpdatePaciente}>Atualizar Paciente</button>
        </div>
    );
}

