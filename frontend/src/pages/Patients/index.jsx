import { Link, Routes, Route } from 'react-router-dom';
import { CreatePatient } from '../../components/Patient/CreatePatient';
import { ShowPatient } from '../../components/Patient/ShowPatient';
import { UpdatePatient } from '../../components/Patient/UpdatePatient';
import { Button } from 'antd';

export function Patients() {
    return (
        <div>
            <h1 style={titleStyle}>Pacientes</h1>
            <div className="action-bar" style={actionBarStyle}>
                <Button type="text" danger>
                    <Link to="create" style={linkStyle}>
                        Criar
                    </Link>
                </Button>

                <Button type="text" danger>
                    <Link to="show" style={linkStyle}>
                        Mostrar
                    </Link>
                </Button>

                <Button type="text" danger>
                    <Link to="update" style={linkStyle}>
                        Atualizar
                    </Link>
                </Button>
            </div>

            <Routes>
                <Route path="/create" element={<CreatePatient />} />
                <Route path="/show" element={<ShowPatient />} />
                <Route path="/update" element={<UpdatePatient />} />
            </Routes>
        </div>
    );
}

const actionBarStyle = {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '20px',
};

const linkStyle = {
    padding: '10px',
    margin: '0 10px',
    textDecoration: 'none',
    color: '#333',
};

const titleStyle = {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '20px',
    color: '#031A4B'
}

export default Patients;
