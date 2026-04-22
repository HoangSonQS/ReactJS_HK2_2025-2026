import { atom } from 'recoil';

export type Page = 'RecipeBox' | 'SearchResults' | 'Login' | 'Signup' | 'Dashboard' | 'Ingredients' | 'Occasions' | 'AboutUs' | 'OurCooks' | 'Features' | 'FAQ' | 'GiftSubscription' | 'Feedback';

export interface DashboardEntry {
  id: string;
  customerName: string;
  company: string;
  orderValue: string;
  orderDate: string;
  status: 'New' | 'In-progress' | 'Completed';
  avatar: string;
}

export const dashboardDataState = atom<DashboardEntry[]>({
  key: 'dashboardDataState',
  default: JSON.parse(localStorage.getItem('chefify_dashboard_data') || JSON.stringify([
    { id: '1', customerName: 'Elizabeth Lee', company: 'AvatarSystems', orderValue: '$359', orderDate: '10/07/2023', status: 'New', avatar: '/3_Data/Lab_03/avatar.png' },
    { id: '2', customerName: 'Carlos Garcia', company: 'SmoozeShift', orderValue: '$747', orderDate: '24/07/2023', status: 'New', avatar: '/3_Data/Lab_03/avatar_small.png' },
    { id: '3', customerName: 'Elizabeth Bailey', company: 'Prime Time Telecom', orderValue: '$564', orderDate: '08/08/2023', status: 'In-progress', avatar: '/3_Data/Lab_03/avatar.png' },
    { id: '4', customerName: 'Ryan Brown', company: 'OmniTech Corporation', orderValue: '$541', orderDate: '31/08/2023', status: 'In-progress', avatar: '/3_Data/Lab_03/avatar_small.png' },
    { id: '5', customerName: 'Ryan Young', company: 'DataStream Inc.', orderValue: '$769', orderDate: '01/05/2023', status: 'Completed', avatar: '/3_Data/Lab_03/avatar.png' },
  ])),
});

export const currentPageState = atom<Page>({
  key: 'currentPageState',
  default: 'RecipeBox',
});

// User State (Persisted in localStorage via effect or manual sync)
export interface User {
  email: string;
  name: string;
  avatar?: string;
}

export const userState = atom<User | null>({
  key: 'userState',
  default: JSON.parse(localStorage.getItem('chefify_user') || 'null'),
});

// Recipe Box / Saved Recipes
export const savedRecipesState = atom<string[]>({
  key: 'savedRecipesState',
  default: JSON.parse(localStorage.getItem('chefify_saved') || '[]'),
});

// Filtering State
export interface FilterState {
  categories: string[];
  rating: number[];
}

export const filterState = atom<FilterState>({
  key: 'filterState',
  default: {
    categories: ['Vegetables', 'Fruit'],
    rating: [5, 4],
  },
});

export const isLoginModalOpenState = atom<boolean>({
  key: 'isLoginModalOpenState',
  default: false,
});

export const isDiscoverModalOpenState = atom<boolean>({
  key: 'isDiscoverModalOpenState',
  default: !localStorage.getItem('chefify_seen_discover'),
});

export const searchQueryState = atom<string>({
  key: 'searchQueryState',
  default: '',
});
