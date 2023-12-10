import { useState } from 'react';
import { createPaciente } from '../../API/fetchPattient';
import { Box } from '@mui/system';
import { Button, TextField, Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import { message } from 'antd';

export function CreatePatient() {
    const [nome, setNome] = useState('');
    const [dataNascimento, setDataNascimento] = useState('');

    const handleCreatePaciente = async () => {
        try {
            const pacienteData = { nome, data_nascimento: dataNascimento };
            const novoPaciente = await createPaciente(pacienteData);
            message.success({
                content: 'Paciente cadastrado com sucesso', novoPaciente,
                duration: 3,
            });
            setNome('');
            setDataNascimento('');
        } catch (error) {
            message.error({
                content: 'Erro ao cadastrar paciente',
                duration: 5,
            });
        }
    };

    return (
        <Box sx={{ alignItems: 'center' }}>
            <Grid
                container
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexDirection: 'column',
                    marginBottom: '30px'
                }}
            >
                <Typography
                    color="#14274A"
                    display="flex"
                    fontSize="28px"
                    marginBottom="20px"
                    marginTop="30px"
                    fontWeight={600}
                    fontFamily='Abhaya Libre'
                >
                    Cadastrar Paciente
                </Typography>
                <Box
                    sx={{
                        padding: '2%',
                        border: '1px solid #B5B5B5',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexDirection: 'column',
                        width: '35%',
                    }}
                >
                    <Typography
                        sx={{
                            color: '#666666',
                            letterSpacing: '0.06em',
                            fontSize: '18px',
                            textAlign: 'start',
                            height: '40px',
                            marginBottom: '6px',
                        }}
                    >
                        Nome
                    </Typography>
                    <TextField
                        sx={{ marginBottom: '16px', width: '85%' }}
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}
                    />

                    <Typography
                        sx={{
                            color: '#666666',
                            letterSpacing: '0.06em',
                            fontSize: '18px',
                            textAlign: 'start',
                            height: '30px',
                            marginBottom: '8px',
                        }}
                    >
                        Data de Nascimento
                    </Typography>
                    <TextField
                        type='date'
                        sx={{ marginBottom: '16px', width: '85%' }}
                        value={dataNascimento}
                        variant="outlined"
                        onChange={(e) => setDataNascimento(e.target.value)}
                    />
                    <Button
                        variant="contained"
                        sx={{
                            margin: '10px',
                            width: '50%',
                            height: '52px',
                            fontSize: '20px',
                            textTransform: 'none',
                        }}
                        onClick={handleCreatePaciente}
                    >
                        Cadastrar
                    </Button>
                </Box>
            </Grid>
        </Box>
    );
}
