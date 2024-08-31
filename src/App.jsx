import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./views/Dashboard";
function App(){
    return(
        <Router>
            <Routes>
                {/* Dashboard */}
                <Route path="/dahsboard" element={<Dashboard />} />
            </Routes>
        </Router>
    );
}
export default App;