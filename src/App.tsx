import React, { useEffect } from 'react';
import { Header } from './components/Header';
import { ProductGrid } from './components/ProductGrid';
import { Filters } from './components/Filters';
import { useStore } from './store/useStore';

function App() {
  const { recommendations, updateRecommendations } = useStore();

  useEffect(() => {
    updateRecommendations();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1">
            <Filters />
          </div>
          
          <div className="lg:col-span-3">
            <ProductGrid products={recommendations} />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;