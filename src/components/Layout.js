import React from 'react';
import Header from './header/Header';
import { useLocation } from 'react-router-dom';

export default function Layout({ children }) {
    const location = useLocation();
    return (
        <>
            {
                location.pathname == '/cart' ? null : <div>
                    <Header />
                </div>
            }
            {children}
        </>
    );
}
