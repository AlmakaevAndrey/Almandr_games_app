import { useState } from 'react';
import { Navigation } from '../components/Navigation';
import { HeroPage } from '../pages/public/HeroPage';
import { CatalogPage } from '../pages/public/CatalogPage';
import { AdminDashboard } from '../pages/admin/AdminDashboard';
import Footer from '../components/Footer';

type View = 'hero' | 'catalog' | 'admin';

const App = () => {
  const [activeView, setActiveView] = useState<View>('hero');

  return (
    <>
      <div className="min-h-screen bg-cream text-ink font-body selection:bg-accent/20 selection:text-ink flex flex-col">
        <Navigation activeView={activeView} onNavigate={setActiveView} />

        <main className="flex-grow">
          {activeView === 'hero' && <HeroPage onNavigate={(view) => setActiveView(view)} />}
          {activeView === 'catalog' && <CatalogPage />}
          {activeView === 'admin' && <AdminDashboard />}
        </main>

        <Footer />
      </div>
    </>
  );
};

export default App;
