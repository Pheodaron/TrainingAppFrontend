import './App.css';
import useAuth from "./hooks/useAuth";
import Routes from "./routes/Routes";
import { axiosRefreshInstance } from './services/api/axios';
import { useEffect } from 'react';

import AppToolbar from './components/AppToolbar';

function App() {
  const {logout} = useAuth();

  useEffect(() => {
    console.log("addResponseInterceptor");
    const responseInterceptor = axiosRefreshInstance.interceptors.response.use(
        response => response,
        error => {
            logout();
            return Promise.reject(error);
        }
    )
    return () => {
      axiosRefreshInstance.interceptors.response.eject(responseInterceptor);
      console.log("removeResponseInterceptor");
    }
}, [])


  return (
    <div>
      <AppToolbar />
      <Routes />
    </div>
  );
}

export default App;
