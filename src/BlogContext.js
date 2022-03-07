import React, { createContext, useState } from "react";

export const BlogContext = createContext({ username: '', auth: false });
export const UserProvider = ({ children }) => {
    // User is the username of the "data" that gets stored in context


    const [user, setUser] = useState({ a: 1 });

    // Login updates the user data with a username parameter
    const login = (user) => {

    };

    // Logout updates the user data to default
    const logout = () => {

    };

    return (
        <BlogContext.Provider value={{ user, login, logout }}>
            {children}
        </BlogContext.Provider>
    );
}
