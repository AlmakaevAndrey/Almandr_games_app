import AdminLayout from '../layouts/AdminLayout';
import AdminDashboard from '../pages/admin/AdminDashboard';
import { HeroPage } from '../pages/public/HeroPage';

const App = () => {
  return (
    <AdminLayout>
      <HeroPage />
      <AdminDashboard />
    </AdminLayout>
  );
};

export default App;
