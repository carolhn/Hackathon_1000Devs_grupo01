import axios from 'axios';

const baseURL = 'http://localhost:5432';

const api = axios.create({
    baseURL,
});

export const createPaciente = async (pacienteData) => {
    try {
        console.log('Dados enviados:', pacienteData);
        const response = await api.post('/paciente', pacienteData);
        console.log('Resposta do servidor:', response.data);
        return response.data;
    } catch (error) {
        console.error('Error creating paciente:', error);
        throw error;
    }
};


export const getPacienteById = async (pacienteId) => {
    try {
        const response = await api.get(`/paciente/${pacienteId}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching paciente:', error);
        throw error;
    }
};

export const updatePaciente = async (pacienteId, pacienteData) => {
    try {
        const response = await api.patch(`/paciente/${pacienteId}`, pacienteData);
        return response.data;
    } catch (error) {
        console.error('Error updating paciente:', error);
        throw error;
    }
};
