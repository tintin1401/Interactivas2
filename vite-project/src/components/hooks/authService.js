const BASE_URL = 'http://localhost/calenderbackend/public/api';

const fetchConfig = {
    credentials: 'include',
    headers: {
        'Content-Type': 'application/json',
    },
};

export const register = async (userData) => {
    const response = await fetch(`${BASE_URL}/register`, {
        ...fetchConfig,
        method: 'POST',
        body: JSON.stringify(userData),
    });
    if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Error en el registro');
    }
    return response.json();
};

export const login = async (credentials) => {
    const response = await fetch(`${BASE_URL}/login`, {
        ...fetchConfig,
        method: 'POST',
        body: JSON.stringify(credentials),
    });
    if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Error en el login');
    }
    return response.json();
};

export const logout = async () => {
    const response = await fetch(`${BASE_URL}/logout`, {
        ...fetchConfig,
        method: 'POST',
    });
    if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Error en el logout');
    }
    return response.json();
};
