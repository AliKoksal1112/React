import React from 'react'

import { ProviderWrapper as TacheProvider } from 'contexts/tachesContext';
import App from 'components/App/App.jsx'

const AppContainer = () => {
    return (
        <TacheProvider>
            <App />
        </TacheProvider>
    );
}
export default AppContainer