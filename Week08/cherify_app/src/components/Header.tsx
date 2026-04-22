import React from 'react';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { currentPageState, searchQueryState, userState } from '../state/atoms';

const Header: React.FC = () => {
  const [searchQuery, setSearchQuery] = useRecoilState(searchQueryState);
  const [user, setUser] = useRecoilState(userState);
  const setCurrentPage = useSetRecoilState(currentPageState);

  const handleLogout = () => {
    localStorage.removeItem('chefify_user');
    setUser(null);
    setCurrentPage('RecipeBox');
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      setCurrentPage('SearchResults');
    }
  };

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo-section" onClick={() => setCurrentPage('RecipeBox')}>
          <img src="/3_Data/Lab_02/chefify.png" alt="Chefify Logo" className="header-logo" />
        </div>
        
        <form className="search-section" onSubmit={handleSearch}>
          <div className="search-bar">
            <img src="/3_Data/Lab_03/search.png" alt="Search" className="search-icon" />
            <input 
              type="text" 
              placeholder="What do you want to cook?" 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </form>

        <nav className="nav-links">
          <a href="#" className="nav-link" onClick={() => setCurrentPage('SearchResults')}>What to cook</a>
          <a href="#" className="nav-link" onClick={() => setCurrentPage('RecipeBox')}>Recipes</a>
          <a href="#" className="nav-link" onClick={() => setCurrentPage('Ingredients')}>Ingredients</a>
          <a href="#" className="nav-link" onClick={() => setCurrentPage('Occasions')}>Occasions</a>
          <a href="#" className="nav-link" onClick={() => setCurrentPage('AboutUs')}>About Us</a>
        </nav>

        <div className="profile-section">
          {user ? (
            <div className="user-info" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <span className="user-name" onClick={() => setCurrentPage('Dashboard')} style={{ cursor: 'pointer', fontWeight: 600 }}>
                Hi, {user.name}
              </span>
              <button className="auth-btn logout-btn" onClick={handleLogout}>
                Logout
              </button>
            </div>
          ) : (
            <>
              <button className="auth-btn login-btn" onClick={() => setCurrentPage('Login')}>
                Login
              </button>
              <button className="auth-btn signup-btn" onClick={() => setCurrentPage('Signup')}>
                Sign Up
              </button>
            </>
          )}
          <button className="recipe-box-btn" onClick={() => setCurrentPage('RecipeBox')}>
            <img src="/3_Data/Lab_03/archive_check.png" alt="" className="btn-icon" />
            Your Recipe Box
          </button>
          <div className="user-avatar" onClick={() => setCurrentPage('Dashboard')} style={{ cursor: 'pointer' }}>
            <img src="/3_Data/Lab_02/avatar.png" alt="User Avatar" />
          </div>
        </div>
      </div>
      <style>{`
        .header {
          background: #ffffff;
          border-bottom: 1px solid var(--border);
          padding: 0.75rem 0;
          position: sticky;
          top: 0;
          z-index: 100;
        }
        .header-container {
          max-width: 1440px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          gap: 2rem;
          padding: 0 48px;
        }
        .logo-section {
          cursor: pointer;
        }
        .header-logo {
          height: 32px;
        }
        .search-section {
          flex: 1;
        }
        .search-bar {
          background: var(--surface-container);
          border-radius: 8px;
          display: flex;
          align-items: center;
          padding: 0.5rem 1rem;
          gap: 0.75rem;
        }
        .search-icon {
          width: 20px;
          height: 20px;
          opacity: 0.5;
        }
        .search-bar input {
          background: transparent;
          border: none;
          outline: none;
          width: 100%;
          font-family: var(--body);
          font-size: 0.95rem;
          color: var(--on-surface);
        }
        .nav-links {
          display: flex;
          gap: 1.5rem;
        }
        .nav-link {
          text-decoration: none;
          color: var(--on-surface-variant);
          font-weight: 500;
          font-size: 0.95rem;
          transition: color 0.2s;
        }
        .nav-link:hover {
          color: var(--primary);
        }
        .profile-section {
          display: flex;
          align-items: center;
          gap: 1rem;
        }
        .auth-btn {
          padding: 0.5rem 1rem;
          border-radius: 6px;
          font-weight: 600;
          font-size: 0.9rem;
          cursor: pointer;
          border: none;
          background: none;
          color: var(--on-surface);
        }
        .signup-btn {
          background: var(--primary);
          color: white;
        }
        .recipe-box-btn {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          background: var(--primary-container);
          color: var(--on-primary-container);
          border: none;
          padding: 0.6rem 1.2rem;
          border-radius: 8px;
          font-weight: 600;
          font-size: 0.9rem;
          cursor: pointer;
          transition: opacity 0.2s;
        }
        .recipe-box-btn:hover {
          opacity: 0.9;
        }
        .btn-icon {
          width: 18px;
          height: 18px;
        }
        .user-avatar {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          overflow: hidden;
          cursor: pointer;
          background: var(--surface-container);
        }
        .user-avatar img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        @media (max-width: 1200px) {
          .nav-links {
            display: none;
          }
          .header-container {
            padding: 0 20px;
          }
        }
      `}</style>
    </header>
  );
};


export default Header;
