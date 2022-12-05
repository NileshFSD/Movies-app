import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./Style/style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import View from "./Component/View";
import Data from "./Component/Data";
import Movies from "./Component/Movies";
import Error from "./Component/Error";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route element={<Data />}>
            <Route index path="/" element={<Movies />} />
            <Route path=":movieId" element={<View />} />
          </Route>
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
