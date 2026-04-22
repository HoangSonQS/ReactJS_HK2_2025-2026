import React, { useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { currentPageState, userState } from '../state/atoms';

const Signup: React.FC = () => {
  const setCurrentPage = useSetRecoilState(currentPageState);
  const setUser = useSetRecoilState(userState);
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple mock persistence
    const existingUsers = JSON.parse(localStorage.getItem('chefify_users_db') || '[]');
    const userExists = existingUsers.some((u: any) => u.email === formData.email);
    
    if (userExists) {
      alert('User with this email already exists!');
      return;
    }

    const newUser = { ...formData, avatar: '/3_Data/Lab_02/avatar.png' };
    const updatedUsers = [...existingUsers, newUser];
    localStorage.setItem('chefify_users_db', JSON.stringify(updatedUsers));
    
    // Log the user in immediately
    localStorage.setItem('chefify_user', JSON.stringify(newUser));
    setUser(newUser);
    setCurrentPage('RecipeBox');
    alert('Account created successfully!');
  };

  return (
    <div className="auth-page">
      <div className="auth-container">
        <div className="auth-card">
          <div className="auth-header">
            <img src="/3_Data/Lab_02/chefify.png" alt="Chefify Logo" className="auth-logo" />
            <h1 className="auth-title">Join Chefify</h1>
            <p className="auth-subtitle">Create an account to start your culinary journey.</p>
          </div>

          <form className="auth-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Full Name</label>
              <input 
                type="text" 
                placeholder="Emma Gonzalez" 
                required 
                value={formData.name}
                onChange={e => setFormData({...formData, name: e.target.value})}
              />
            </div>

            <div className="form-group">
              <label>Email Address</label>
              <input 
                type="email" 
                placeholder="emma.gonzalez@example.com" 
                required 
                value={formData.email}
                onChange={e => setFormData({...formData, email: e.target.value})}
              />
            </div>
            
            <div className="form-group">
              <label>Password</label>
              <input 
                type="password" 
                placeholder="••••••••" 
                required 
                value={formData.password}
                onChange={e => setFormData({...formData, password: e.target.value})}
              />
            </div>

            <button type="submit" className="auth-submit">Create Account</button>
          </form>

          <div className="auth-divider">
            <span>OR</span>
          </div>

          <div className="social-auth">
             <button className="social-btn google">
              <img src="/3_Data/Lab_03/Share fat.png" style={{width: '18px', filter: 'grayscale(1)'}} alt="" />
              Sign up with Google
            </button>
          </div>

          <p className="auth-switch">
            Already have an account? <a href="#" onClick={(e) => { e.preventDefault(); setCurrentPage('Login'); }}>Sign in</a>
          </p>
        </div>
      </div>

       <style>{`
        .auth-page {
          min-height: calc(100vh - 200px);
          display: flex;
          align-items: center;
          justify-content: center;
          background: var(--bg);
          padding: 4rem 20px;
        }
        .auth-container {
          width: 100%;
          max-width: 500px;
        }
        .auth-card {
          background: #ffffff;
          padding: 3.5rem;
          border-radius: 24px;
          box-shadow: 0 12px 40px rgba(0,0,0,0.06);
          text-align: center;
        }
        .auth-header {
          margin-bottom: 2.5rem;
        }
        .auth-logo {
          height: 40px;
          margin-bottom: 1.5rem;
        }
        .auth-title {
          font-size: 2.2rem;
          font-weight: 800;
          margin: 0 0 0.5rem;
        }
        .auth-subtitle {
          color: var(--on-surface-variant);
          font-size: 1rem;
          line-height: 1.5;
        }
        .auth-form {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          text-align: left;
        }
        .form-group {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }
        .form-group label {
          font-size: 0.9rem;
          font-weight: 700;
          color: var(--on-surface);
        }
        .form-group input {
          width: 100%;
          padding: 0.9rem 1.2rem;
          border: 1px solid var(--border);
          border-radius: 10px;
          font-size: 1rem;
          outline: none;
          transition: border-color 0.2s;
        }
        .form-group input:focus {
          border-color: var(--primary);
        }
        .auth-submit {
          background: var(--primary);
          color: white;
          border: none;
          padding: 1rem;
          border-radius: 10px;
          font-size: 1.1rem;
          font-weight: 700;
          cursor: pointer;
          margin-top: 0.5rem;
          transition: transform 0.2s;
        }
        .auth-submit:hover {
          transform: scale(1.02);
        }
        .auth-divider {
          margin: 2rem 0;
          position: relative;
          text-align: center;
        }
        .auth-divider::before {
          content: '';
          position: absolute;
          top: 50%;
          left: 0;
          width: 100%;
          height: 1px;
          background: var(--border);
        }
        .auth-divider span {
          position: relative;
          background: #ffffff;
          padding: 0 1rem;
          color: var(--on-surface-variant);
          font-size: 0.85rem;
          font-weight: 600;
        }
        .social-btn {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.75rem;
          padding: 0.85rem;
          border: 1px solid var(--border);
          border-radius: 10px;
          background: white;
          font-weight: 600;
          font-size: 0.95rem;
          cursor: pointer;
          transition: background 0.2s;
        }
        .social-btn:hover {
          background: var(--surface-container-lowest);
        }
        .auth-switch {
          margin-top: 2rem;
          font-size: 0.95rem;
          color: var(--on-surface-variant);
        }
        .auth-switch a {
          color: var(--primary);
          text-decoration: none;
          font-weight: 700;
        }
        @media (max-width: 600px) {
          .auth-card {
            padding: 2.5rem 1.5rem;
          }
        }
      `}</style>
    </div>
  );
};

export default Signup;
