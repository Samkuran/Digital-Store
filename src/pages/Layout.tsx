import React, { ReactNode } from 'react';
import { Header } from '../components/Header/Header';
import { Footer } from '../components/Footer/Footer';

interface LayoutProps {
    children: ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <div>
            <Header />
            <main>
                {children}
            </main>
            <Footer />
        </div>
    )
}