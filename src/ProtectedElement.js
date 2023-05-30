import { useNavigate } from 'react-router-dom';
import { Auth } from 'aws-amplify';
import React, { useEffect, useState } from 'react';

async function checkAuthenticated() {
    try {
        await Auth.currentAuthenticatedUser();
        return true;
    } catch {
        return false;
    }
}

function ProtectedElement({ children }) {
    const navigate = useNavigate();
    const [isAuth, setIsAuth] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        checkAuthenticated().then(isAuthenticated => {
            setIsAuth(isAuthenticated);
            setLoading(false);
            if (!isAuthenticated) {
                navigate("/");
            }
        });
    }, [navigate]);

    if (loading) {
        return null; // or return a loading spinner
    }

    return isAuth ? children : null;
}

export default ProtectedElement;
