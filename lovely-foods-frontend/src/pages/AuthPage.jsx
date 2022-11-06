import { Routes, Route, Navigate } from 'react-router-dom';

import Login from '../components/auth/Login';
import SignUp from '../components/auth/SignUp';

import './css/auth.css';


const AuthPage = (props) => {
  return (<>
    <div className="text-center">
      <h1 className="pt-5">Lovely Foods</h1>
      <h2 className="h4 mt-2">Authentication</h2>

      <div className="auth-container mx-auto my-5 rounded-2 p-3 text-left">
        <Routes>
          <Route path="/" element={<Navigate to='login' replace />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </div>

    </div>
  </>);
}

export default AuthPage;