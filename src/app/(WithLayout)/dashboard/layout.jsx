import Footer from '@/components/Footer';
import React from 'react';

const DashboardLayout = ({ children }) => {
    return (
        <div>
            <div className='min-h-screen'>
                {children}
            </div>
            <Footer />
        </div>
    );
};

export default DashboardLayout;