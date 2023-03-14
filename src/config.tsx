const config = {
    backendUrl: process.env.REACT_APP_BACKEND_URL || "http://localhost",
    authUsername: process.env.REACT_APP_BACKEND_AUTH_USERNAME || "",
    authPassword: process.env.REACT_APP_BACKEND_AUTH_PASSWORD || "",
}

export default config;