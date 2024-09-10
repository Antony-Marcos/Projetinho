# Projetinho
Criar pasta PerguntasFrequentes em components{
Footer.jsx
NavBar.jsx
PerguntasFrequentesComponente.jsx
}
-------------------------------------------------------------------------------------

No router.jsx{
  <Route
        path="/Perguntas-Frequentes"
        element={
          
            <PerguntasFrequentes/>
          
        
        }
        />
      </Routes>
    </Router>
}
---------------------------------------------------------------------------------------

Criar arquivo PerguntasFrequentes.jsx no pages que tem {

import React from 'react';
import PerguntasFrequentesComponente from '../components/PerguntasFrequentes/PerguntasFrequentesComponente';

const PerguntasFrequentes = () => {
  return <PerguntasFrequentesComponente />;
};

export default PerguntasFrequentes;

}
