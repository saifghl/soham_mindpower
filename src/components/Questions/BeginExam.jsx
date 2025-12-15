
import React, { useState } from 'react';
import './BeginExam.css';

const BeginExam = () => {
    const [selectedOption, setSelectedOption] = useState(null);

    const options = [
        "Not at all",
        "A few days",
        "Most of the days",
        "Nearly every day"
    ];

    return (
        <div className="begin-exam-container">
            {/* Header */}
            <header className="exam-header">
                <h1 className="brand-title">sohaam mindpower</h1>
                <div className="user-avatar">
                    {/* Placeholder for user avatar - reusing the one from screenshot idea */}
                    <img
                        src="https://ui-avatars.com/api/?name=User&background=random"
                        alt="User Profile"
                    />
                </div>
            </header>

            {/* Main Content */}
            <div className="exam-content">
                <h2 className="exam-prompt">
                    “Select the option that feels right to you.”
                </h2>

                <div className="exam-card">
                    <div className="que-count">Que 1/16</div>
                    <h3 className="que-text">Feeling Sad, Down, Depressed or Hopeless?</h3>

                    <div className="options-list">
                        {options.map((option, index) => (
                            <div
                                key={index}
                                className={`option-row ${selectedOption === index ? 'selected' : ''}`}
                                onClick={() => setSelectedOption(index)}
                            >
                                <div className="custom-radio">
                                    {selectedOption === index && (
                                        <div
                                            style={{
                                                width: '12px',
                                                height: '12px',
                                                backgroundColor: '#111827', // Blackish fill for selected
                                                borderRadius: '50%'
                                            }}
                                        />
                                    )}
                                </div>
                                <span className="option-text">{option}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Footer */}
            <div className="exam-footer">
                <button className="next-btn">
                    Next
                </button>
                <button className="end-exam-btn">
                    End Exam
                </button>
            </div>
        </div>
    );
};

export default BeginExam;
