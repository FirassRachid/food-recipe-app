import Main from "./pages/homepage/main/Main";
import { Route, Routes } from "react-router-dom";
import Details from "./pages/details/Details";
function App() {
  return (
    <>
    <Routes>
       <Route
          index
          element={<Main />}
        />
       <Route
          path="/:mealid"
          element={<Details />}
        />
    </Routes>
      
    </>
  );
}

export default App;
