import React from 'react';
import { useRecoilState } from 'recoil';
import { savedRecipesState } from '../state/atoms';

export interface Recipe {
  id: string;
  name: string;
  time: string;
  image: string;
  rating: number;
  folder?: string;
}

interface RecipeCardProps {
  recipe: Recipe;
}

const RecipeCard: React.FC<RecipeCardProps> = ({ recipe }) => {
  const [savedRecipes, setSavedRecipes] = useRecoilState(savedRecipesState);
  const isSaved = savedRecipes.includes(recipe.id);

  const toggleSave = (e: React.MouseEvent) => {
    e.stopPropagation();
    let updated;
    if (isSaved) {
      updated = savedRecipes.filter(id => id !== recipe.id);
    } else {
      updated = [...savedRecipes, recipe.id];
    }
    setSavedRecipes(updated);
    localStorage.setItem('chefify_saved', JSON.stringify(updated));
  };

  const imagePath = `/3_Data/${recipe.folder || 'Lab_03'}/${recipe.image}`;

  return (
    <div className="recipe-card">
      <div className="recipe-image">
        <img src={imagePath} alt={recipe.name} />
        <button 
          className={`favorite-btn ${isSaved ? 'saved' : ''}`} 
          onClick={toggleSave}
        >
          <img src="/3_Data/Lab_03/archive_check.png" alt="Save" />
        </button>
      </div>
      <div className="recipe-info">
        <h4 className="recipe-title">{recipe.name}</h4>
        <div className="recipe-meta">
          <span className="recipe-time">{recipe.time}</span>
          <div className="recipe-rating">
            <img src={`/3_Data/Lab_02/rating_${recipe.rating}.png`} alt={`${recipe.rating} stars`} />
          </div>
        </div>
      </div>
      <style>{`
        .recipe-card {
          background: var(--surface-container-lowest);
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 4px 12px rgba(0,0,0,0.05);
          transition: transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          cursor: pointer;
        }
        .recipe-card:hover {
          transform: translateY(-8px);
        }
        .recipe-image {
          height: 200px;
          position: relative;
          background: #eee;
        }
        .recipe-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .favorite-btn {
          position: absolute;
          top: 12px;
          right: 12px;
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.9);
          border: none;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          opacity: 0;
          transform: scale(0.8);
          transition: all 0.2s;
        }
        .recipe-card:hover .favorite-btn {
          opacity: 1;
          transform: scale(1);
        }
        .favorite-btn.saved {
          opacity: 1;
          transform: scale(1);
          background: var(--primary);
        }
        .favorite-btn.saved img {
          filter: brightness(0) invert(1);
        }
        .favorite-btn img {
          width: 16px;
          height: 16px;
          filter: grayscale(1);
        }
        .favorite-btn:hover {
          background: var(--primary);
        }
        .favorite-btn:hover img {
          filter: brightness(0) invert(1);
        }
        .recipe-info {
          padding: 1.25rem;
        }
        .recipe-title {
          margin: 0 0 0.75rem;
          font-size: 1.1rem;
          font-weight: 700;
          color: var(--on-surface);
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
          line-height: 1.35;
        }
        .recipe-meta {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .recipe-time {
          font-size: 0.85rem;
          color: var(--on-surface-variant);
          font-weight: 500;
        }
        .recipe-rating img {
          height: 14px;
        }
      `}</style>
    </div>
  );
};

export default RecipeCard;
