import axios from 'axios';

const baseURL = 'http://localhost:3001';

const api = axios.create({
    baseURL,
});

export const createPaciente = async (pacienteData) => {
    try {
        const response = await api.post('/paciente', pacienteData);
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
