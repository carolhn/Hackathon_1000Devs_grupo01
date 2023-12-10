import { useEffect, useState } from 'react';
import { getPacienteById } from '../../API/fetchPattient';
import { Card, CardContent, Typography, Container } from '@mui/material';

export function ShowPatient() {
    const [pacientes, setPacientes] = useState([]);

    useEffect(() => {
        getPacienteById(1).then((data) => setPacientes(data));
    }, []);

    return (
        <Container
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '85px'
            }}
        >
            <div>
                <Typography
                    color="#14274A"
                    display="flex"
                    fontSize="28px"
                    marginBottom="20px"
                    marginTop="30px"
                    fontWeight={600}
                    fontFamily='Abhaya Libre'
                >
                    Mostrar Pacientes
                </Typography>
            </div>
            <Card sx={{ minWidth: 275, maxWidth: 400, boxShadow: 8, marginTop: '20px' }}>
                <CardContent>
                    {pacientes.map((paciente) => (
                        <div key={paciente.id_paciente}>
                            <Typography variant="body2" color="text.secondary">
                                ID: {paciente.id_paciente}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Nome: {paciente.nome}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Data de Nascimento: {new Date(paciente.data_nascimento).toLocaleDateString()}
                            </Typography>
                        </div>
                    ))}
                </CardContent>
            </Card>
        </Container>
    );
}
