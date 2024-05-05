import React from 'react';

const TopBar = () => {
    return (
        <div className="bg-blue-500 text-white p-4 flex justify-between items-center">
            <div className="flex items-center">
                <img src="logo.png" alt="Logo" className="h-8 mr-2" />
                <span className="font-bold text-lg">LandingPage</span>
            </div>
            <div className="flex items-center">
                <img src="profile.jpg" alt="Profile" className="h-8 rounded-full mr-2" />
                <span className="mr-2">Notifications</span>
                <span>Friday, 17 July, 2021</span>
            </div>
        </div>
    );
}

export default TopBar;
