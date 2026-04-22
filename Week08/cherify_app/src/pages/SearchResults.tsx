import React from 'react';
import { useRecoilValue } from 'recoil';
import { searchQueryState, filterState } from '../state/atoms';
import Sidebar from '../components/Sidebar';
import RecipeCard from '../components/RecipeCard';

const allRecipes = [
  { id: '1', name: 'Italian-style tomato salad', time: '14 minutes', rating: 5, image: 'Italian-style tomato.png', category: 'Vegetables', folder: 'Lab_02_b' },
  { id: '2', name: 'Vegetable and shrimp spaghetti', time: '15 minutes', rating: 4, image: 'Vegetable and shrimp spaghetti.png', category: 'Vegetables', folder: 'Lab_02_b' },
  { id: '3', name: 'Lotus delight salad', time: '20 minutes', rating: 5, image: 'Lotus delight salad.png', category: 'Vegetables', folder: 'Lab_02_b' },
  { id: '4', name: 'Bean, shrimp, and potato salad', time: '18 minutes', rating: 5, image: 'Bean, shrimp, and potato salad.png', category: 'Seafood', folder: 'Lab_02_b' },
  { id: '5', name: 'Sunny-side up fried eggs', time: '5 minutes', rating: 4, image: 'Sunny-side up fried eggs.png', category: 'Meat', folder: 'Lab_02_b' },
  { id: '6', name: 'Snack cakes', time: '25 minutes', rating: 3, image: 'Snack cakes.png', category: 'Fruit', folder: 'Lab_02_b' },
];

const SearchResults: React.FC = () => {
  const searchQuery = useRecoilValue(searchQueryState);
  const filters = useRecoilValue(filterState);

  const filteredResults = allRecipes.filter(recipe => {
    const matchesSearch = recipe.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = filters.categories.length === 0 || filters.categories.includes(recipe.category);
    const matchesRating = filters.rating.length === 0 || filters.rating.includes(recipe.rating);
    return matchesSearch && matchesCategory && matchesRating;
  });

  return (
    <div className="search-results-page">
      <div className="page-container">
        <Sidebar />
        <main className="results-content">
          <h1 className="results-title">
            {filteredResults.length > 0 
              ? `Search Results for "${searchQuery}"` 
              : `No results found for "${searchQuery}"`}
          </h1>
          
          {filteredResults.length > 0 ? (
            <div className="results-grid">
              {filteredResults.map(recipe => (
                <RecipeCard key={recipe.id} recipe={recipe} />
              ))}
            </div>
          ) : (
            <div className="no-results">
              <img src="/3_Data/Lab_02/nothing.png" alt="No results" className="nothing-img" />
              <p>We couldn't find any recipes matching your search. Try looking for something else!</p>
            </div>
          )}
        </main>
      </div>

      <style>{`
        .search-results-page {
          background: var(--bg);
          min-height: 100vh;
        }
        .page-container {
          max-width: 1440px;
          margin: 0 auto;
          display: flex;
          padding: 0 48px;
          gap: 3rem;
        }
        .results-content {
          flex: 1;
          padding: 2rem 0 4rem;
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }
        .results-title {
          font-size: 2rem;
          font-weight: 800;
          margin: 0;
        }
        .results-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          gap: 2.5rem;
        }
        .no-results {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1.5rem;
          padding: 4rem 0;
          text-align: center;
          color: var(--on-surface-variant);
        }
        .nothing-img {
          width: 200px;
          opacity: 0.8;
        }
        @media (max-width: 1024px) {
           .page-container {
            padding: 0 20px;
          }
        }
      `}</style>
    </div>
  );
};

export default SearchResults;
