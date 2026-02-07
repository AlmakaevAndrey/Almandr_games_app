import { useState } from 'react';
import AdminDashboard from '../pages/admin/AdminDashboard';
import { Navigation } from '../components/Navigation';
import { HeroPage } from '../pages/public/HeroPage';
import { CatalogPage } from '../pages/public/CatalogPage';

const App = () => {
  type View = 'hero' | 'catalog' | 'admin';

  const [activeView, setActiveView] = useState<View>('hero');

  return (
    <>
      <Navigation activeView={activeView} onNavigate={setActiveView} />
      <main className="flex-grow">
        {activeView === 'hero' && <HeroPage onNavigate={(view) => setActiveView(view)} />}
        {activeView === 'catalog' && <CatalogPage />}
        {activeView === 'admin' && <AdminDashboard />}
      </main>
      <AdminDashboard />
    </>
  );
};

export default App;
