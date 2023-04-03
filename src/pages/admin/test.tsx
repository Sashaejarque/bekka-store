import React from 'react';
import useResponsiveScreen from '../../hooks/useResponsiveScreen';
import { Layout } from '../../templates';

const Test = () => {
    const { width, height } = useResponsiveScreen();
    // en caso de que tenga que acceder solamente al chat le paso el numero de chat por props
    // sino queda montada toda la aplicacion 

    // pregunta interesante es... si este iframe puede manejar el navegador real
    
    return <iframe id="iframe-test" title="test" src="https://app.nexusadvisor.app/chat/16" style={{ width, height }} />;
}

export default Test;
