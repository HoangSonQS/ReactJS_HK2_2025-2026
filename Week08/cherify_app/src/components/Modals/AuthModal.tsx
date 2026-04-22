import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import { isLoginModalOpenState } from '../../state/atoms';

const AuthModal: React.FC = () => {
  const [isOpen, setIsOpen] = useRecoilState(isLoginModalOpenState);
  const [mode, setMode] = useState<'login' | 'signup'>('login');

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={() => setIsOpen(false)}>
      <div className="modal-content auth-modal" onClick={e => e.stopPropagation()}>
        <button className="modal-close" onClick={() => setIsOpen(false)}>×</button>
        
        <div className="auth-modal-body">
          <div className="auth-logo">
            <img src="/3_Data/Lab_02/chefify.png" alt="Chefify Logo" />
          </div>
          <h2 className="auth-title">{mode === 'login' ? 'Welcome Back' : 'Join Chefify'}</h2>
          <p className="auth-subtitle">
            {mode === 'login' 
              ? 'Sign in to access your curated recipe box and culinary inspirations.' 
              : 'Create an account to start saving your favorite recipes and follow world-class cooks.'}
          </p>
          
          <form className="auth-form" onSubmit={e => e.preventDefault()}>
            <div className="form-group">
              <label>Email Address</label>
              <input type="email" placeholder="emma@example.com" />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input type="password" placeholder="••••••••" />
            </div>
            {mode === 'signup' && (
              <div className="form-group">
                <label>Confirm Password</label>
                <input type="password" placeholder="••••••••" />
              </div>
            )}
            
            <div className="form-options">
               <label className="checkbox-label">
                  <input type="checkbox" />
                  <span className="checkbox-custom"></span>
                  {mode === 'login' ? 'Remember me' : 'I agree to the terms'}
               </label>
               {mode === 'login' && <a href="#" className="forgot-link">Forgot password?</a>}
            </div>
            
            <button type="submit" className="auth-submit-btn">
              {mode === 'login' ? 'Sign In' : 'Create Account'}
            </button>
          </form>
          
          <div className="auth-footer">
            <p>
              {mode === 'login' ? "Don't have an account? " : "Already have an account? "}
              <a href="#" onClick={(e) => { e.preventDefault(); setMode(mode === 'login' ? 'signup' : 'login'); }}>
                {mode === 'login' ? 'Create one for free' : 'Sign in here'}
              </a>
            </p>
          </div>
        </div>
      </div>

      <style>{`
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.4);
          backdrop-filter: blur(8px);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
        }
        .auth-modal {
          background: #ffffff;
          width: 90%;
          max-width: 480px;
          border-radius: 20px;
          position: relative;
          padding: 3.5rem 3rem;
          box-shadow: 0 25px 50px rgba(0,0,0,0.1);
        }
        .modal-close {
          position: absolute;
          top: 20px;
          right: 20px;
          background: none;
          border: none;
          font-size: 2rem;
          color: var(--on-surface-variant);
          cursor: pointer;
          line-height: 1;
        }
        .auth-modal-body {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          gap: 1.5rem;
        }
        .auth-logo img {
          height: 40px;
        }
        .auth-title {
          font-size: 2rem;
          font-weight: 800;
          margin: 0;
        }
        .auth-subtitle {
          color: var(--on-surface-variant);
          margin: 0;
          font-size: 0.95rem;
          line-height: 1.5;
        }
        .auth-form {
          width: 100%;
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
          margin-top: 1rem;
        }
        .form-group {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          text-align: left;
        }
        .form-group label {
          font-size: 0.85rem;
          font-weight: 600;
          color: var(--on-surface);
        }
        .form-group input {
          background: var(--surface-container-low);
          border: 1px solid var(--border);
          padding: 0.75rem 1rem;
          border-radius: 8px;
          font-family: var(--body);
          font-size: 1rem;
          outline: none;
          transition: border-color 0.2s;
        }
        .form-group input:focus {
          border-color: var(--primary);
        }
        .form-options {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .checkbox-label {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.85rem;
          color: var(--on-surface-variant);
          cursor: pointer;
        }
        .checkbox-label input {
          display: none;
        }
        .checkbox-custom {
          width: 16px;
          height: 16px;
          border: 2px solid var(--outline-variant);
          border-radius: 4px;
        }
        .checkbox-label input:checked + .checkbox-custom {
          background: var(--primary);
          border-color: var(--primary);
        }
        .forgot-link, .auth-footer a {
          color: var(--primary);
          text-decoration: none;
          font-size: 0.85rem;
          font-weight: 600;
        }
        .auth-submit-btn {
          background: var(--primary);
          color: white;
          border: none;
          padding: 1rem;
          border-radius: 8px;
          font-size: 1rem;
          font-weight: 700;
          cursor: pointer;
          margin-top: 0.5rem;
          transition: opacity 0.2s;
        }
        .auth-submit-btn:hover {
          opacity: 0.9;
        }
        .auth-footer {
          margin-top: 0.5rem;
          font-size: 0.9rem;
          color: var(--on-surface-variant);
        }
      `}</style>
    </div>
  );
};

export default AuthModal;
