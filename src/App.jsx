import { Suspense } from "react";
import { BrowserRouter } from "react-router-dom";

import "./app.css"
import { Router } from "./routes/Router.tsx";

function App() {

  const styles = {
    padding: 0,
    margin: 0
  };

  return (
    <BrowserRouter>
    <div style={styles}>
      <Suspense fallback={<p>Cargando...</p>}>
        <Router />
      </Suspense>
    </div>
    </BrowserRouter>
  );
}

export default App;
