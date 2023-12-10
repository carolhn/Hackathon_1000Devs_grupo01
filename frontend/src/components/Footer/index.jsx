import { faFacebookF, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Box, Button, Stack, Typography } from '@mui/material';

export function Footer() {
    return (
        <Stack sx={{ backgroundColor: '#031A4B', padding: '15px 15px', color: '#fff', marginBottom: '-20px' }}>
            <Box display="flex" flexDirection={{ xs: 'column', md: 'row' }} justifyContent="space-around" alignItems={{ xs: 'center' }} mb={{ xs: '20px', md: '0' }}>
                <Box>
                    <Typography fontFamily="Montserrat" fontSize="20px" fontWeight={400} lineHeight="2.0">
                        Carteira de Vacinação Digital
                    </Typography>
                    <Typography fontSize="12px" fontWeight={400}>
                        Rua João da Silva, 123 - Centro<br />
                        São Paulo - SP - Brasil - 12345-678<br />
                        +55 11 1234-5678<br />
                        carteiravacinacao@carteiravacinacao.com.br
                    </Typography>
                </Box>
                <Box >
                    <Typography fontSize="12px" fontWeight={600} lineHeight="3.0">
                        Sobre nós<br />
                        Contato<br />
                        Termos e condições
                    </Typography>
                </Box>
                <Box>
                    <Typography fontSize="12px" fontWeight={600} lineHeight="3.0">
                        <FontAwesomeIcon icon={faFacebookF} style={{ color: '#ffffff', marginRight: '8px' }} /> Facebook<br />
                        <FontAwesomeIcon icon={faTwitter} style={{ color: '#ffffff', marginRight: '8px' }} /> Twitter<br />
                        <FontAwesomeIcon icon={faInstagram} style={{ color: '#ffffff', marginRight: '8px' }} /> Instagram
                    </Typography>
                </Box>
                <Box sx={{ fontFamily: 'sans-serif', lineHeight: "6" }}>
                    <Typography fontSize="12px" fontWeight={600} lineHeight="3.5">Inscreva-se em nossa newsletter</Typography>
                    <Button
                        sx={{
                            width: '100%',
                            border: '2px solid rgba(255, 255, 255, 1)',
                            backgroundColor: '#031A4B',
                            textTransform: 'none',
                            fontSize: '12px',
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
