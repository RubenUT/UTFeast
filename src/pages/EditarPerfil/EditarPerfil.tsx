import React, { useState } from 'react';
import { IonIcon } from '@ionic/react';
import { home } from 'ionicons/icons';
import { useHistory } from 'react-router-dom';
import './EditarPerfil.css';

const EditarPerfil: React.FC = () => {
    const history = useHistory();

    const initialConfig = {
        config1: 'Valor Configuración 1',
        config2: 'Valor Configuración 2',
        config3: 'Valor Configuración 3',
        config4: 'Valor Configuración 4'
    };

    const [config, setConfig] = useState(initialConfig);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setConfig({ ...config, [name]: value });
    };

    const handleSaveChanges = () => {
        console.log('Configuración guardada:', config);
        history.push('/tab3');
    };

    const handleCancelChanges = () => {
        setConfig(initialConfig);
        history.push('/tab3');
    };

    return (
        <div className="editar-perfil-container">
            <div className="header">
                <h1>Editar Perfil</h1>
            </div>
            <div className="config-list">
                <div className="config-item">
                    <label>Configuración 1:</label>
                    <input
                        type="text"
                        name="config1"
                        value={config.config1}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="config-item">
                    <label>Configuración 2:</label>
                    <input
                        type="text"
                        name="config2"
                        value={config.config2}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="config-item">
                    <label>Configuración 3:</label>
                    <input
                        type="text"
                        name="config3"
                        value={config.config3}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="config-item">
                    <label>Configuración 4:</label>
                    <input
                        type="text"
                        name="config4"
                        value={config.config4}
                        onChange={handleInputChange}
                    />
                </div>
            </div>
            <div className="button-group">
                <button className="save-btn" onClick={handleSaveChanges}>
                    Guardar Cambios
                </button>
                <button className="cancel-btn" onClick={handleCancelChanges}>
                    Deshacer Cambios
                </button>
            </div>
        </div>
    );
};

export default EditarPerfil;
