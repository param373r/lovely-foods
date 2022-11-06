import React from "react";
import { Route, Routes } from "react-router-dom";

import Homepage from "./pages/Homepage";

const AuthPage = React.lazy(() => import('./pages/AuthPage'));
const ProfilePage = React.lazy(() => import('./pages/ProfilePage'));
const ShopPage = React.lazy(() => import('./pages/ShopPage'));
const FoodPage = React.lazy(() => import('./pages/FoodPage'));
const DiscoverFoods = React.lazy(() => import('./pages/DiscoverFoods'));
const DiscoverShops = React.lazy(() => import('./pages/DiscoverShops'));

function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/auth/*" element={<AuthPage />} />
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="/shops" element={<DiscoverShops />} />
       <Route path="/shops/:shopId" element={<ShopPage />} />
      <Route path="/foods" element={<DiscoverFoods />} />
      <Route path="/foods/:foodId" element={<FoodPage />} />
    </Routes>
  );
}

export default App;
