import React from 'react';
import { Link } from 'react-router-dom';
import './TestCompletion.css';

const TestCompletion = () => {
    return (
        <div className="test-completion-container">
            <header className="completion-header">
                <div className="brand-name">soham mindpower</div>
                <div className="user-avatar">
                    <img src="https://ui-avatars.com/api/?name=Jane+Doe&background=random" alt="Profile" />
                </div>
            </header>

            <div className="completion-card">
                <div className="illustration-container">
                    {/* Placeholder for the illustration - creating a simple SVG or reusing an image if available. 
                        For now, using a placeholder image logic or a simple SVG illustration similar to the design. */}
                    <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%' }}>
                        <circle cx="100" cy="80" r="30" fill="#FCD34D" opacity="0.8" />
                        <rect x="85" y="110" width="30" height="40" fill="#1F2937" rx="5" />
                        <rect x="90" y="150" width="8" height="30" fill="#FCD34D" />
                        <rect x="102" y="150" width="8" height="30" fill="#FCD34D" />
                        <circle cx="90" cy="75" r="3" fill="#1F2937" />
                        <circle cx="110" cy="75" r="3" fill="#1F2937" />
                        <path d="M95 90 Q100 95 105 90" stroke="#1F2937" strokeWidth="2" strokeLinecap="round" />
                        {/* Confetti */}
                        <path d="M60 60 L70 50" stroke="#EF4444" strokeWidth="3" strokeLinecap="round" />
                        <path d="M140 60 L130 50" stroke="#3B82F6" strokeWidth="3" strokeLinecap="round" />
                        <path d="M100 40 L100 25" stroke="#10B981" strokeWidth="3" strokeLinecap="round" />
                        <circle cx="50" cy="100" r="4" fill="#6366F1" />
                        <circle cx="150" cy="100" r="4" fill="#F59E0B" />
                    </svg>
                </div>

                <div className="completion-text">
                    <p>
                        You've completed the test. You did well. Your results are ready whenever you feel ready to look at them.
                    </p>
                    <Link to="/patient/dashboard" className="view-result-link">
                        View Result
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default TestCompletion;
