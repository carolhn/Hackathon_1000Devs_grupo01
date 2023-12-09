import { faFacebookF, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Box, Button, Stack, Typography } from '@mui/material';

export function Footer() {
    return (
        <Stack sx={{ backgroundColor: '#3C3C3D', padding: '40px 20px', color: '#fff' }} width="100%">
            <Box display="flex" flexDirection={{ xs: 'column', md: 'row' }} justifyContent="space-around" alignItems={{ xs: 'center', md: 'flex-start' }} mb={{ xs: '20px', md: '0' }}>
                <Box>
                    <Typography variant="h6" fontFamily="Montserrat" fontSize="29px" fontWeight={400} lineHeight="2.2">
                        Carteira de Vacinação Digital
                    </Typography>
                    <Typography fontSize="16px" fontWeight={400}>
                        Rua João da Silva, 123 - Centro<br />
                        São Paulo - SP - Brasil - 12345-678<br />
                        +55 11 1234-5678<br />
                        carteiravacinacao@carteiravacinacao.com.br
                    </Typography>
                </Box>
                <Box >
                    <Typography fontSize="20px" fontWeight={600} lineHeight="2.5">
                        Sobre nós<br />
                        Contato<br />
                        Termos e condições
                    </Typography>
                </Box>
                <Box>
                    <Typography fontSize="20px" fontWeight={600} lineHeight="2.5">
                        <FontAwesomeIcon icon={faFacebookF} style={{ color: '#ffffff', marginRight: '8px' }} /> Facebook<br />
                        <FontAwesomeIcon icon={faTwitter} style={{ color: '#ffffff', marginRight: '8px' }} /> Twitter<br />
                        <FontAwesomeIcon icon={faInstagram} style={{ color: '#ffffff', marginRight: '8px' }} /> Instagram
                    </Typography>
                </Box>
                <Box sx={{ fontFamily: 'sans-serif', lineHeight: "6" }}>
                    <Typography variant="h6" mb="10px">Inscreva-se em nossa newsletter</Typography>
                    <Button
                        sx={{
                            width: '100%',
                            border: '2px solid rgba(255, 255, 255, 1)',
                            backgroundColor: '#3C3C3D',
                            textTransform: 'none',
                            fontSize: '16px',
                        }}
                        variant="contained"
                    >
                        Email
                    </Button>
                </Box>
            </Box>
        </Stack>
    );
}
