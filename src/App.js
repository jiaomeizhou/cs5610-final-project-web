import {BrowserRouter, Navigate} from "react-router-dom";
import {Routes, Route} from "react-router";
import LoginScreen from "./screens/login-screen";
import RegisterScreen from "./screens/register-screen";
import HomeScreen from "./screens/home-screen";

function App() {
    return (
        <BrowserRouter>
            <div className="container">
                <Routes>
                    <Route path="/" element={<Navigate to="/home"/>}/>
                    <Route path="/login" element={<LoginScreen/>}/>
                    <Route path="/register" element={<RegisterScreen/>}/>
                    <Route path="/home" element={<HomeScreen/>}/>
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;