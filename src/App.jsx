import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./HomePage.jsx";
import NextPage from "./NextPage.jsx";
import ImagesPage from "./ImagesPage.jsx";
import ValentineQuestion from "./ValentineQuestion.jsx";
import Yes from "./Yes.jsx";

function App() {
  return (
    <BrowserRouter basename="/be-my-valentine">
      <Routes>
        <Route path="/" element={<HomePage />} /> 
        <Route path="/NextPage" element={<NextPage />} />
        <Route path="/ImagesPage" element={<ImagesPage />} />
        <Route path="/ValentineQuestion" element={<ValentineQuestion />} />
        <Route path="/Yes" element={<Yes />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
