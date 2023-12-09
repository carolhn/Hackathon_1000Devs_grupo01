import { Button, Flex } from 'antd';
import { Box, Toolbar, Typography } from '@mui/material';
import {
    MedicineBoxOutlined,
    AlertOutlined,
    UserOutlined,
} from '@ant-design/icons';
import { Link } from 'react-router-dom';


export function Header() {

    return (
        <Box sx={{ backgroundColor: '#3C3C3D', padding: '24px 124px 24px' }}>
            <Toolbar
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                }}
            >
                <Link style={{ textDecoration: 'none' }} to="/">
                    <Typography
                        sx={{
                            color: '#fff',
                            fontFamily: 'Abhaya Libre',
                            fontWeight: '700',
                            fontSize: '44px',
                        }}

                    >Carteira de Vacinação

                    </Typography>
                </Link>
                <Flex style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Flex align="center" gap="large">

                        <Button type="text" icon={<MedicineBoxOutlined />} style={{
                            fontFamily: 'Abhaya Libre',
                            fontSize: '28px',
                            textTransform: 'none',
                            width: '180px',
                            height: '60px',
                            color: '#fff',
                        }}>
                            Vacina
                        </Button>

                        <Button type="text" icon={<AlertOutlined />} style={{
                            fontFamily: 'Abhaya Libre',
                            fontSize: '28px',
                            textTransform: 'none',
                            width: '180px',
                            height: '60px',
                            color: '#fff',
                        }}>
                            Campanha
                        </Button>

                        <Button type="text" icon={<UserOutlined />} style={{
                            fontFamily: 'Abhaya Libre',
                            fontSize: '28px',
                            textTransform: 'none',
                            width: '180px',
                            height: '60px',
                            color: '#fff',
                        }}>
                            Paciente
                        </Button>
                    </Flex>
                </Flex>
            </Toolbar>
        </Box >
    );
}
