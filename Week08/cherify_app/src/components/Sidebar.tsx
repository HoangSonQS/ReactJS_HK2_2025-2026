import React from 'react';
import { useRecoilState } from 'recoil';
import { currentPageState, filterState } from '../state/atoms';

const Sidebar: React.FC = () => {
  const [currentPage, setCurrentPage] = useRecoilState(currentPageState);
  const [filters, setFilters] = useRecoilState(filterState);

  const toggleCategory = (cat: string) => {
    const updated = filters.categories.includes(cat)
      ? filters.categories.filter(c => c !== cat)
      : [...filters.categories, cat];
    setFilters({ ...filters, categories: updated });
  };

  const toggleRating = (rate: number) => {
    const updated = filters.rating.includes(rate)
      ? filters.rating.filter(r => r !== rate)
      : [...filters.rating, rate];
    setFilters({ ...filters, rating: updated });
  };

  return (
    <aside className="sidebar">
      <div className="sidebar-section">
        <h3 className="sidebar-title">Menu</h3>
        <nav className="sidebar-nav">
          <a 
            href="#" 
            className={`sidebar-link ${currentPage === 'Dashboard' ? 'active' : ''}`}
            onClick={(e) => { e.preventDefault(); setCurrentPage('Dashboard'); }}
          >
            Dashboard
          </a>
          <a 
            href="#" 
            className={`sidebar-link ${currentPage === 'RecipeBox' ? 'active' : ''}`}
            onClick={(e) => { e.preventDefault(); setCurrentPage('RecipeBox'); }}
          >
            Recipe Box
          </a>
          <a 
            href="#" 
            className={`sidebar-link ${currentPage === 'SearchResults' ? 'active' : ''}`}
            onClick={(e) => { e.preventDefault(); setCurrentPage('SearchResults'); }}
          >
            All Recipes
          </a>
        </nav>
      </div>

      <div className="sidebar-section">
        <h3 className="sidebar-title">Filter</h3>
        <div className="filter-group">
          <h4 className="filter-label">Categories</h4>
          <div className="filter-options">
            {['Vegetables', 'Fruit', 'Meat', 'Seafood'].map(cat => (
              <label className="filter-option" key={cat}>
                <input 
                  type="checkbox" 
                  checked={filters.categories.includes(cat)} 
                  onChange={() => toggleCategory(cat)}
                />
                <span className="checkbox-custom"></span>
                {cat}
              </label>
            ))}
          </div>
        </div>

        <div className="filter-group">
          <h4 className="filter-label">Rating</h4>
          <div className="rating-options">
             {[5,4,3,2,1].map(r => (
               <label key={r} className="filter-option">
                 <input 
                  type="checkbox" 
                  checked={filters.rating.includes(r)} 
                  onChange={() => toggleRating(r)}
                 />
                 <span className="checkbox-custom"></span>
                 <img src={`/3_Data/Lab_02/rating_${r}.png`} alt={`${r} stars`} className="rating-img" />
               </label>
             ))}
          </div>
        </div>
      </div>

      <style>{`
        .sidebar {
          width: 280px;
          padding: 2rem 0;
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }
        .sidebar-section {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        .sidebar-title {
          font-size: 1.1rem;
          font-weight: 700;
          margin-bottom: 0.5rem;
          padding: 0 48px;
        }
        .sidebar-nav {
          display: flex;
          flex-direction: column;
        }
        .sidebar-link {
          text-decoration: none;
          color: var(--on-surface-variant);
          padding: 0.75rem 48px;
          font-weight: 500;
          transition: all 0.2s;
          border-left: 4px solid transparent;
        }
        .sidebar-link.active {
          color: var(--primary);
          background: var(--primary-container);
          border-left-color: var(--primary);
        }
        .sidebar-link:hover:not(.active) {
          background: var(--surface-container-low);
          color: var(--on-surface);
        }
        .filter-group {
          padding: 0 48px;
          display: flex;
          flex-direction: column;
          gap: 1rem;
          margin-bottom: 1.5rem;
        }
        .filter-label {
          font-size: 0.95rem;
          font-weight: 600;
          color: var(--on-surface);
        }
        .filter-options {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }
        .filter-option {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          font-size: 0.9rem;
          color: var(--on-surface-variant);
          cursor: pointer;
          position: relative;
        }
        .filter-option input {
          position: absolute;
          opacity: 0;
          cursor: pointer;
        }
        .checkbox-custom {
          width: 18px;
          height: 18px;
          border: 2.5px solid var(--outline-variant);
          border-radius: 4px;
          display: inline-block;
          flex-shrink: 0;
          transition: all 0.2s;
        }
        .filter-option input:checked ~ .checkbox-custom {
          background: var(--primary);
          border-color: var(--primary);
        }
        .filter-option input:checked ~ .checkbox-custom::after {
          content: '✓';
          color: white;
          font-size: 12px;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .rating-img {
          height: 16px;
        }
        @media (max-width: 1024px) {
          .sidebar {
            display: none;
          }
        }
      `}</style>
    </aside>
  );
};

export default Sidebar;
