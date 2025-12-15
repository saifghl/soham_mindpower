import React, { useState } from 'react';
import {
    Calendar,
    ChevronRight,
    CheckCircle2,
    Bell,
    Search
} from 'lucide-react';
import './PatientDashboard.css';

const PatientDashboard = () => {
    const [habits, setHabits] = useState([
        { id: 1, name: '10min of meditation', completed: false },
        { id: 2, name: 'Go to Dental Walk', completed: false },
        { id: 3, name: 'Drink 6 Glass of Water', completed: false },
        { id: 4, name: 'Write in your Journal', completed: false },
    ]);

    const toggleHabit = (id) => {
        setHabits(habits.map(h => h.id === id ? { ...h, completed: !h.completed } : h));
    };

    return (
        <div className="dashboard-container">

            {/* Main Content Area */}
            <div className="main-content">

                {/* Header */}
                <header className="dashboard-header">
                    <div className="welcome-text">
                        <h1>Welcome back,patient!</h1>
                        <p>Let's check in on your progress today.</p>
                    </div>
                    <div className="header-actions">
                        <button className="icon-btn">
                            <Search size={24} />
                        </button>
                        <button className="icon-btn">
                            <Bell size={24} />
                            <span className="notification-dot"></span>
                        </button>
                        <div className="profile-img">
                            <img src="https://ui-avatars.com/api/?name=Jane+Doe&background=random" alt="Profile" />
                        </div>
                    </div>
                </header>

                <div className="dashboard-grid">

                    {/* Left Column (Stats & Charts) */}
                    <div className="left-column">

                        {/* Top Cards Row */}
                        <div className="stats-row">

                            {/* Mind Power Score */}
                            <div className="card mind-power-card">
                                <h3 className="card-title">Mind Power Score</h3>
                                <div className="score-circle">
                                    <svg className="w-full h-full transform -rotate-90" style={{ width: '100%', height: '100%', transform: 'rotate(-90deg)' }}>
                                        <circle
                                            cx="64"
                                            cy="64"
                                            r="56"
                                            stroke="currentColor"
                                            strokeWidth="12"
                                            fill="transparent"
                                            className="text-gray-100"
                                            style={{ color: '#f3f4f6' }}
                                        />
                                        <circle
                                            cx="64"
                                            cy="64"
                                            r="56"
                                            stroke="currentColor"
                                            strokeWidth="12"
                                            fill="transparent"
                                            strokeDasharray={2 * Math.PI * 56}
                                            strokeDashoffset={2 * Math.PI * 56 * (1 - 0.67)}
                                            style={{ color: '#22c55e' }}
                                            strokeLinecap="round"
                                        />
                                    </svg>
                                    <span className="score-value">67%</span>
                                </div>
                            </div>

                            {/* Quick Health Status */}
                            <div className="card">
                                <h3 className="card-title">Quick Health Status</h3>
                                <div className="health-status-list">
                                    <div className="health-status-item">
                                        <div className="status-label">
                                            <div className="status-icon-box bg-green-light"><CheckCircle2 size={16} /></div>
                                            <span className="text-gray-600">Mood</span>
                                        </div>
                                        <span className="status-value">Positive</span>
                                    </div>
                                    <div className="health-status-item">
                                        <div className="status-label">
                                            <div className="status-icon-box bg-orange-light"><CheckCircle2 size={16} /></div>
                                            <span className="text-gray-600">Stress</span>
                                        </div>
                                        <span className="status-value">Low</span>
                                    </div>
                                    <div className="health-status-item">
                                        <div className="status-label">
                                            <div className="status-icon-box bg-blue-light"><CheckCircle2 size={16} /></div>
                                            <span className="text-gray-600">Sleep</span>
                                        </div>
                                        <span className="status-value">7h 41m</span>
                                    </div>
                                    <div className="health-status-item">
                                        <div className="status-label">
                                            <div className="status-icon-box bg-purple-light"><CheckCircle2 size={16} /></div>
                                            <span className="text-gray-600">Medication</span>
                                        </div>
                                        <span className="status-value">Taken</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Journey Chart */}
                        <div className="card">
                            <h3 className="card-title">Your Last 7 days journey</h3>
                            <div className="chart-bar-container">
                                {/* Mock chart bars */}
                                <div className="chart-row">
                                    <div className="chart-label">Oct 24</div>
                                    <div className="bar-bg">
                                        <div className="bar-fill" style={{ width: '80%' }}></div>
                                    </div>
                                </div>
                                <div className="chart-row">
                                    <div className="chart-label">Oct 25</div>
                                    <div className="bar-bg">
                                        <div className="bar-fill" style={{ width: '60%' }}></div>
                                    </div>
                                </div>
                                <div className="chart-row">
                                    <div className="chart-label">Oct 26</div>
                                    <div className="bar-bg">
                                        <div className="bar-fill" style={{ width: '90%' }}></div>
                                    </div>
                                </div>
                                <div className="chart-row">
                                    <div className="chart-label">Oct 27</div>
                                    <div className="bar-bg">
                                        <div className="bar-fill" style={{ width: '75%' }}></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Daily Healing Habits */}
                        <div className="card">
                            <h3 className="card-title">Daily Healing Habits</h3>
                            <div className="habits-list">
                                {habits.map((habit) => (
                                    <div key={habit.id} className={`habit-item ${habit.completed ? 'completed' : ''}`} onClick={() => toggleHabit(habit.id)}>
                                        <div className="checkbox">
                                            {habit.completed && <CheckCircle2 size={14} className="text-white" style={{ color: 'white' }} />}
                                        </div>
                                        <span className="habit-text">{habit.name}</span>
                                    </div>
                                ))}
                            </div>
                            <button className="submit-btn">
                                Submit Healing Status
                            </button>
                        </div>


                        {/* Healing Videos Section */}
                        <div>
                            <h3 className="card-title" style={{ marginBottom: '1rem' }}>Healing Videos</h3>
                            <div className="videos-grid">
                                {[1, 2, 3].map((i) => (
                                    <div key={i} className="video-thumbnail group">
                                        <img src={`https://picsum.photos/seed/${i + 100}/400/300`} alt="Video thumbnail" />
                                        <div className="play-button">
                                            <div className="play-icon">
                                                <div className="triangle"></div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>

                    {/* Right Column (Sidebar) */}
                    <div className="right-column">

                        {/* Quick Actions */}
                        <div className="card">
                            <h3 className="card-title">Quick Actions</h3>
                            <div className="actions-list">
                                <button className="action-btn btn-primary">Book Appointment</button>
                                <button className="action-btn btn-outline-red">Chat with Doctor</button>
                                <button className="action-btn btn-danger">Emergency Support</button>
                            </div>
                        </div>

                        {/* Next Appointment */}
                        <div className="card">
                            <h3 className="card-title">Next Appointment</h3>
                            <div className="appointment-card">
                                <div className="date-box">
                                    <div className="date-month">Oct</div>
                                    <div className="date-day">24</div>
                                </div>
                                <div>
                                    <div className="doctor-name">Dr. Jordan</div>
                                    <div className="approintment-time">10:00 am - 11:00 am</div>
                                </div>
                            </div>
                        </div>

                        {/* Mental Chekup CTA */}
                        <div className="mental-checkup-card">
                            <h3 className="mental-title">Mental Checkup</h3>
                            <p className="mental-desc">Take a few moments for yourself today to track your mental well-being.</p>
                            <button className="start-test-btn">Start Test</button>
                        </div>

                        {/* Past test results */}
                        <div className="card">
                            <h3 className="card-title">Past test result</h3>
                            <div className="results-list">
                                {[1, 2, 3].map((_, i) => (
                                    <div key={i} className="result-item">
                                        <div className="result-date">
                                            <div className="calendar-icon-box"><Calendar size={16} /></div>
                                            <span className="date-text">10/10/25</span>
                                        </div>
                                        <button className="arrow-btn"><ChevronRight size={16} /></button>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default PatientDashboard;
