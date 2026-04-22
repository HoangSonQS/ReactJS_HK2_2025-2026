import React, { useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { currentPageState, userState } from '../state/atoms';

const Login: React.FC = () => {
  const setCurrentPage = useSetRecoilState(currentPageState);
  const setUser = useSetRecoilState(userState);
  const [formData, setFormData] = useState({ email: '', password: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const existingUsers = JSON.parse(localStorage.getItem('chefify_users_db') || '[]');
    const user = existingUsers.find((u: any) => u.email === formData.email && u.password === formData.password);
    
    if (user) {
      localStorage.setItem('chefify_user', JSON.stringify(user));
      setUser(user);
      setCurrentPage('RecipeBox');
      alert('Logged in successfully!');
    } else {
      alert('Invalid email or password.');
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-container">
        <div className="auth-card">
          <div className="auth-header">
            <img src="/3_Data/Lab_02/chefify.png" alt="Chefify Logo" className="auth-logo" />
            <h1 className="auth-title">Welcome Back</h1>
            <p className="auth-subtitle">Log in to your Chefify account to save recipes and more.</p>
          </div>

          <form className="auth-form" onSubmit={handleSubmit}>
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
              <div className="password-input">
                <input 
                  type="password" 
                  placeholder="••••••••" 
                  required 
                  value={formData.password}
                  onChange={e => setFormData({...formData, password: e.target.value})}
                />
                <button type="button" className="toggle-password">
                    <img src="/3_Data/Lab_03/search.png" style={{filter: 'invert(1)', width: '16px', opacity: 0.5}} alt="Show" />
                </button>
              </div>
            </div>

            <div className="auth-actions">
              <label className="checkbox-container">
                <input type="checkbox" />
                <span className="checkmark"></span>
                Remember me
              </label>
              <a href="#" className="forgot-password">Forgot password?</a>
            </div>

            <button type="submit" className="auth-submit">Login</button>
          </form>

          <div className="auth-divider">
            <span>OR</span>
          </div>

          <div className="social-auth">
            <button className="social-btn google">
              <img src="/3_Data/Lab_03/Share fat.png" style={{width: '18px', filter: 'grayscale(1)'}} alt="" />
              Continue with Google
            </button>
          </div>

          <p className="auth-switch">
            Don't have an account? <a href="#" onClick={(e) => { e.preventDefault(); setCurrentPage('Signup'); }}>Sign up for free</a>
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
        .password-input {
          position: relative;
        }
        .toggle-password {
          position: absolute;
          right: 12px;
          top: 50%;
          transform: translateY(-50%);
          background: none;
          border: none;
          cursor: pointer;
        }
        .auth-actions {
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 0.9rem;
        }
        .checkbox-container {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          cursor: pointer;
          color: var(--on-surface-variant);
        }
        .forgot-password {
          color: var(--primary);
          text-decoration: none;
          font-weight: 600;
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

export default Login;
