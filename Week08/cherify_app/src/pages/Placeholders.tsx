import React from 'react';

interface PlaceholderPageProps {
  title: string;
  description: string;
}

const PlaceholderPage: React.FC<PlaceholderPageProps> = ({ title, description }) => (
  <div className="placeholder-page" style={{ padding: '4rem 2rem', textAlign: 'center', background: '#fcfcfc', minHeight: '80vh' }}>
    <div style={{ maxWidth: '800px', margin: '0 auto' }}>
      <h1 style={{ fontSize: '3rem', color: 'var(--primary)', marginBottom: '1.5rem' }}>{title}</h1>
      <p style={{ fontSize: '1.2rem', color: '#666', lineHeight: '1.6' }}>{description}</p>
      <div style={{ marginTop: '3rem', opacity: 0.1 }}>
         <img src="/3_Data/Lab_02_b/Lotus delight salad.png" style={{ width: '300px', filter: 'grayscale(1)' }} alt="" />
      </div>
    </div>
  </div>
);

export const IngredientsPage = () => <PlaceholderPage title="Ingredients" description="Explore the finest culinary components. From exotic spices to farm-fresh vegetables, discover how to source and prepare the best ingredients for your masterpieces." />;
export const OccasionsPage = () => <PlaceholderPage title="Occasions" description="Find the perfect recipes for every moment. Whether it's a cozy family dinner or a grand celebration, we have curated menus for every occasion." />;
export const AboutUsPage = () => <PlaceholderPage title="About Chefify" description="We are a community of food lovers, dedicated to preserving heirloom recipes and fostering modern culinary techniques. Join us in our mission to make gastronomy accessible to everyone." />;
