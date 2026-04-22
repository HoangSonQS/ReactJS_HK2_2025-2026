import React from 'react';
import { useRecoilState } from 'recoil';
import { isDiscoverModalOpenState } from '../../state/atoms';

const DiscoverModal: React.FC = () => {
  const [isOpen, setIsOpen] = useRecoilState(isDiscoverModalOpenState);

  if (!isOpen) return null;

  const handleClose = () => {
    localStorage.setItem('chefify_seen_discover', 'true');
    setIsOpen(false);
  };

  return (
    <div className="modal-overlay" onClick={handleClose}>
      <div className="modal-content discover-modal" onClick={e => e.stopPropagation()}>
        <button className="modal-close" onClick={handleClose}>×</button>

        <div className="discover-body">
          <div className="discover-image">
            <img src="/3_Data/Lab_01/Image 93.png" alt="Discover" />
          </div>
          <div className="discover-info">
            <h2 className="discover-title">Discover Chefify</h2>
            <p className="discover-text">
              Join our community of food lovers and professional chefs. Get access to exclusive heirloom recipes and modern techniques.
            </p>
            <div className="discover-gallery">
              <img src="/3_Data/Lab_01/Image 72.png" alt="" />
              <img src="/3_Data/Lab_01/Image 73.png" alt="" />
              <img src="/3_Data/Lab_01/Image 93.png" alt="" />
            </div>
            <button className="discover-action-btn" onClick={() => setIsOpen(false)}>Get Started</button>
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
        .discover-modal {
          max-width: 1000px; /* Unified Proportions */
          width: 90%;
          padding: 0;
          overflow: hidden;
          background: #ffffff;
          border-radius: 24px;
        }
        .modal-close {
           position: absolute;
          top: 20px;
          right: 20px;
          background: white;
          border-radius: 50%;
          width: 32px;
          height: 32px;
          border: none;
          font-size: 1.5rem;
          color: var(--on-surface-variant);
          cursor: pointer;
          z-index: 10;
          box-shadow: 0 4px 12px rgba(0,0,0,0.1);
        }
        .discover-body {
          display: flex;
          height: 600px;
        }
        .discover-image {
          flex: 1.2;
          background: #f0f0f0;
        }
        .discover-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .discover-info {
          flex: 1;
          padding: 4rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          gap: 2rem;
          text-align: left;
        }
        .discover-title {
          font-size: 2.8rem;
          margin: 0;
          font-weight: 800;
          line-height: 1.1;
        }
        .discover-text {
          color: var(--on-surface-variant);
          line-height: 1.6;
          font-size: 1.1rem;
        }
        .discover-gallery {
          display: flex;
          gap: 1rem;
          margin-top: 0.5rem;
        }
        .discover-gallery img {
          width: 80px;
          height: 80px;
          border-radius: 12px;
          object-fit: cover;
          box-shadow: 0 4px 12px rgba(0,0,0,0.05);
        }
        .discover-action-btn {
          background: var(--primary);
          color: white;
          border: none;
          padding: 1.25rem 2.5rem;
          border-radius: 12px;
          font-weight: 700;
          font-size: 1.1rem;
          cursor: pointer;
          align-self: flex-start;
          transition: all 0.2s;
          box-shadow: 0 8px 24px rgba(181, 3, 87, 0.2);
        }
        .discover-action-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 32px rgba(181, 3, 87, 0.3);
        }
        @media (max-width: 1024px) {
          .discover-body {
            flex-direction: column;
            height: auto;
          }
          .discover-image {
            height: 300px;
          }
          .discover-info {
            padding: 2.5rem;
          }
          .discover-title {
            font-size: 2rem;
          }
        }
      `}</style>
    </div>
  );
};

export default DiscoverModal;
