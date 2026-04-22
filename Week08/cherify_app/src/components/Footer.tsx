import React from 'react';
import { useSetRecoilState } from 'recoil';
import { currentPageState } from '../state/atoms';

const Footer: React.FC = () => {
  const setCurrentPage = useSetRecoilState(currentPageState);

  return (
    <footer className="footer-section">
      <div className="footer-content">
        <div className="footer-brand">
          <div className="brand-logo" onClick={() => setCurrentPage('RecipeBox')}>
            <img src="/3_Data/Lab_02/chefifywhite.png" alt="Chefify" />
          </div>
          <p className="brand-text">
            Explore and learn how to cook like a pro. Your curated destination for premium recipes and kitchen techniques.
          </p>
          <div className="subscribe-form">
            <input type="email" placeholder="Enter your email" />
            <button className="btn-primary">Send</button>
          </div>
          <div className="footer-info">
             <img src="/3_Data/Lab_02/chefifywhite.png" style={{height: '20px', opacity: 0.5}} alt="" />
             <span>2023 Chefify Company</span>
             <a href="#">Terms of Service</a>
             <a href="#">Privacy Policy</a>
          </div>
        </div>

        <div className="footer-links-grid">
          <div className="links-column">
            <h3>Learn More</h3>
            <ul>
              <li><button onClick={() => setCurrentPage('OurCooks')}>Our Cooks</button></li>
              <li><button onClick={() => setCurrentPage('Features')}>See Our Features</button></li>
              <li><button onClick={() => setCurrentPage('FAQ')}>FAQ</button></li>
            </ul>
            <h3 style={{marginTop: '2rem'}}>Shop</h3>
            <ul>
              <li><button onClick={() => setCurrentPage('GiftSubscription')}>Gift Subscription</button></li>
              <li><button onClick={() => setCurrentPage('Feedback')}>Send Us Feedback</button></li>
            </ul>
          </div>

          <div className="links-column">
            <h3>Recipes</h3>
            <ul className="recipes-grid">
              <li><button onClick={() => setCurrentPage('SearchResults')}>What to Cook This Week</button></li>
              <li><button onClick={() => setCurrentPage('SearchResults')}>Pasta</button></li>
              <li><button onClick={() => setCurrentPage('SearchResults')}>Dinner</button></li>
              <li><button onClick={() => setCurrentPage('SearchResults')}>Healthy</button></li>
              <li><button onClick={() => setCurrentPage('SearchResults')}>Vegetarian</button></li>
              <li><button onClick={() => setCurrentPage('SearchResults')}>Vegan</button></li>
              <li><button onClick={() => setCurrentPage('SearchResults')}>Christmas</button></li>
            </ul>
          </div>
        </div>
      </div>

      <style>{`
        .footer-section {
          background: #1e1e1e;
          color: white;
          padding: 4rem 2rem;
          margin-top: 5rem;
          font-family: var(--body);
        }
        .footer-content {
          max-width: 1400px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
        }
        .brand-logo img {
          height: 48px;
          cursor: pointer;
          margin-bottom: 1.5rem;
        }
        .brand-text {
          color: #aaa;
          line-height: 1.6;
          max-width: 400px;
          margin-bottom: 2rem;
        }
        .subscribe-form {
          display: flex;
          gap: 0.5rem;
          margin-bottom: 3rem;
        }
        .subscribe-form input {
          flex: 1;
          background: #333;
          border: none;
          padding: 0.8rem 1.2rem;
          border-radius: 10px;
          color: white;
          outline: none;
        }
        .subscribe-form button {
          background: #ff4b6e;
          color: white;
          border: none;
          padding: 0.8rem 1.5rem;
          border-radius: 10px;
          font-weight: 700;
          cursor: pointer;
        }
        .footer-info {
          display: flex;
          align-items: center;
          gap: 1.5rem;
          color: #777;
          font-size: 0.85rem;
        }
        .footer-info a { color: #777; text-decoration: none; }

        .footer-links-grid {
          display: grid;
          grid-template-columns: 1fr 2fr;
          gap: 2rem;
        }
        .links-column h3 {
          font-size: 1.1rem;
          margin-bottom: 1.5rem;
          font-weight: 700;
        }
        .links-column ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        .links-column li { margin-bottom: 0.75rem; }
        .links-column button {
          background: none;
          border: none;
          color: #999;
          font-size: 0.95rem;
          cursor: pointer;
          padding: 0;
          transition: color 0.2s;
        }
        .links-column button:hover { color: #ff4b6e; }

        .recipes-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0.5rem 2rem;
        }

        @media (max-width: 1000px) {
          .footer-content { grid-template-columns: 1fr; }
          .footer-links-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
