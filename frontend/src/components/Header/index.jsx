import { Button, Dropdown, Flex } from 'antd';
import { Box, Toolbar, Typography } from '@mui/material';
import {
    MedicineBoxOutlined,
    AlertOutlined,
    UserOutlined,
} from '@ant-design/icons';
import { Link } from 'react-router-dom';

export function Header() {

    const vaccineList = [
        {
            label: 'Cadastrar Vacina',
            key: '1',
            style: { fontSize: '14px' }
        },
        {
            type: 'divider',
        },
        {
            label: 'Mostar Vacinas',
            key: '2',
            style: { fontSize: '14px' }
        },
        {
            type: 'divider',
        },
        {
            label: 'Atualizar Vacina',
            key: '3',
            style: { fontSize: '14px' }
        },
    ];

    const campaignList = [
        {
            label: 'Cadastrar Campanha',
            key: '1',
            style: { fontSize: '14px' }
        },
        {
            type: 'divider',
        },
        {
            label: 'Mostar Campanhas',
            key: '2',
            style: { fontSize: '14px' }
        },
        {
            type: 'divider',
        },
        {
            label: 'Atualizar Campanha',
            key: '3',
            style: { fontSize: '14px' }
        },
    ];

    const patientList = [
        {
            label: <Link to="/pacientes/create">Cadastrar Paciente</Link>,
            key: '1',

            style: { fontSize: '14px' }
        },
        {
            type: 'divider',
        },
        {
            label: <Link to="/pacientes/show">Mostar Paciente</Link>,
            key: '2',
            style: { fontSize: '14px' }
        },
        {
            type: 'divider',
        },
        {
            label: <Link to="/pacientes/update">Atualizar Paciente</Link>,
            key: '3',
            style: { fontSize: '14px' }
        },
    ];

    return (
        <Box sx={{ backgroundColor: '#031A4B', padding: '10px 70px 10px' }}>
            <Toolbar
                sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Link style={{ textDecoration: 'none' }} to="/">
                    <Typography
                        sx={{
                            color: '#fff',
                            fontFamily: 'Abhaya Libre',
                            fontWeight: '600',
                            fontSize: '28px',
                        }}

                    >Carteira de Vacinação
                    </Typography>
                </Link>
                <Flex style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Flex align="center" gap="large">
                        <Dropdown menu={{ items: vaccineList }}>
                            <Button type="text" icon={<MedicineBoxOutlined />} style={{
                                fontFamily: 'Abhaya Libre',
                                fontSize: '22px',
                                textTransform: 'none',
                                width: '150px',
                                height: '60px',
                                color: '#fff',
                            }}>
                                Vacina
                            </Button>
                        </Dropdown>
                        <Dropdown menu={{ items: campaignList }}>
                            <Button type="text" icon={<AlertOutlined />} style={{
                                fontFamily: 'Abhaya Libre',
                                fontSize: '22px',
                                textTransform: 'none',
                                width: '150px',
                                height: '60px',
                                color: '#fff',
                            }}>
                                Campanha
                            </Button>
                        </Dropdown>
                        <Dropdown menu={{ items: patientList }}>
                            <Button type="text" icon={<UserOutlined />} style={{
                                fontFamily: 'Abhaya Libre',
                                fontSize: '22px',
                                textTransform: 'none',
                                width: '150px',
                                height: '60px',
                                color: '#fff',
                            }}>
                                Paciente
                            </Button>
                        </Dropdown>
                    </Flex>
                </Flex>
            </Toolbar>
        </Box >
    );
}
