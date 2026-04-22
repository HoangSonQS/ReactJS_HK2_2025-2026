import React, { useState } from 'react';
import { useRecoilValue } from 'recoil';
import { savedRecipesState, userState } from '../state/atoms';
import RecipeCard from '../components/RecipeCard';
import type { User } from '../state/atoms';

const RecipeBox: React.FC = () => {
  const [activeTab, setActiveTab] = useState('Saved');
  const savedIds = useRecoilValue(savedRecipesState);
  const user = useRecoilValue(userState) as User | null;

  const allRecipes = [
    { id: '1', name: 'Italian-style tomato salad', time: '14 minutes', rating: 5, image: 'Italian-style tomato.png', folder: 'Lab_02_b' },
    { id: '2', name: 'Vegetable and shrimp spaghetti', time: '15 minutes', rating: 4, image: 'Vegetable and shrimp spaghetti.png', folder: 'Lab_02_b' },
    { id: '3', name: 'Lotus delight salad', time: '20 minutes', rating: 5, image: 'Lotus delight salad.png', folder: 'Lab_02_b' },
    { id: '4', name: 'Bean, shrimp, and potato salad', time: '18 minutes', rating: 5, image: 'Bean, shrimp, and potato salad.png', folder: 'Lab_02_b' },
    { id: '5', name: 'Sunny-side up fried eggs', time: '5 minutes', rating: 4, image: 'Sunny-side up fried eggs.png', folder: 'Lab_02_b' },
    { id: '6', name: 'Snack cakes', time: '25 minutes', rating: 3, image: 'Snack cakes.png', folder: 'Lab_02_b' },
  ];

  const savedRecipes = allRecipes.filter(r => savedIds.includes(r.id));

  return (
    <main className="recipe-box-page">
      <div className="profile-hero">
        <div className="profile-container">
          <div className="profile-avatar">
            <img src={user?.avatar || "/3_Data/Lab_03/avatar.png"} alt={user?.name || "Emma Gonzalez"} />
          </div>
          <div className="profile-info">
            <h1 className="profile-name">{user?.name || "Emma Gonzalez"}</h1>
            <p className="profile-bio">
              Culinary storyteller and plant-based enthusiast. Sharing my favorite kitchen experiments and heirloom family recipes from my home in Barcelona.
            </p>
            <div className="profile-stats">
              <span className="stat"><b>{savedRecipes.length}</b> Saved</span>
              <span className="stat"><b>{allRecipes.length}</b> Total</span>
            </div>
            <button className="share-btn">
               <img src="/3_Data/Lab_03/Share fat.png" alt="" />
               Share Profile
            </button>
          </div>
        </div>
      </div>

      <div className="content-tabs">
        <div className="tabs-container">
          {['Saved', 'Your Recipes', 'Collections'].map(tab => (
            <button 
              key={tab} 
              className={`tab ${activeTab === tab ? 'active' : ''}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      <div className="recipe-grid-section">
        {activeTab === 'Saved' ? (
          savedRecipes.length > 0 ? (
            <div className="recipe-grid">
              {savedRecipes.map(recipe => (
                <RecipeCard key={recipe.id} recipe={recipe} />
              ))}
            </div>
          ) : (
            <div className="empty-box">
              <p>No recipes saved yet. Start exploring!</p>
            </div>
          )
        ) : (
          <div className="empty-box">
            <p>{activeTab === 'Your Recipes' ? 'No recipes created yet.' : 'Private Collections coming soon.'}</p>
          </div>
        )}
      </div>

      <style>{`
        .recipe-box-page {
          background: var(--bg);
          min-height: 100vh;
        }
        .profile-hero {
          background: #ffffff;
          padding: 4rem 48px;
        }
        .profile-container {
          max-width: 1440px;
          margin: 0 auto;
          display: flex;
          gap: 3rem;
          align-items: center;
        }
        .profile-avatar {
          width: 180px;
          height: 180px;
          border-radius: 50%;
          overflow: hidden;
          background: #f0f0f0;
          flex-shrink: 0;
        }
        .profile-avatar img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .profile-info {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          text-align: left;
        }
        .profile-name {
          font-size: 2.5rem;
          margin: 0;
          font-weight: 800;
        }
        .profile-bio {
          font-size: 1.1rem;
          color: var(--on-surface-variant);
          max-width: 600px;
          line-height: 1.6;
        }
        .profile-stats {
          display: flex;
          gap: 2rem;
          font-size: 1rem;
        }
        .share-btn {
          align-self: flex-start;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          background: var(--primary-container);
          color: var(--on-primary-container);
          border: none;
          padding: 0.75rem 1.5rem;
          border-radius: 8px;
          font-weight: 600;
          cursor: pointer;
        }
        .content-tabs {
          background: #ffffff;
          border-top: 1px solid var(--border);
          border-bottom: 1px solid var(--border);
        }
        .tabs-container {
          max-width: 1440px;
          margin: 0 auto;
          padding: 0 48px;
          display: flex;
          gap: 3rem;
        }
        .tab {
          background: none;
          border: none;
          padding: 1.5rem 0;
          font-size: 1rem;
          font-weight: 600;
          color: var(--on-surface-variant);
          cursor: pointer;
          position: relative;
        }
        .tab.active {
          color: var(--primary);
        }
        .tab.active::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 3px;
          background: var(--primary);
        }
        .recipe-grid-section {
          padding: 4rem 48px;
          max-width: 1440px;
          margin: 0 auto;
        }
        .recipe-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          gap: 2.5rem;
        }
        @media (max-width: 1024px) {
          .profile-container {
            flex-direction: column;
            text-align: center;
            gap: 1.5rem;
          }
          .profile-info {
            text-align: center;
            align-items: center;
          }
          .share-btn {
            align-self: center;
          }
           .recipe-grid-section {
            padding: 2rem 20px;
          }
        }
      `}</style>
    </main>
  );
};

export default RecipeBox;
