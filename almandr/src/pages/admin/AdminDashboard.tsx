import Footer from '../../components/Footer';
import Header from '../../components/Header';
import { games } from '../../data/games';
import { metrics } from '../../data/metrics';

const AdminDashboard = () => {
  return (
    <>
      <div className="min-h-screen flex flex-col bg-gray-50">
        <Header />
        <h2>Dashboard</h2>

        <section>
          <h2>Metrics</h2>
          <ul>
            {metrics.map((metric) => (
              <li key={metric.id}>
                {metric.label}: ${metric.value}
              </li>
            ))}
          </ul>
        </section>
      </div>
      <section>
        <h2>Games</h2>
        <ul>
          {games.map((game) => (
            <li key={game.id}>
              {game.title} - ${game.price} ({game.status})
            </li>
          ))}
        </ul>
      </section>
      <Footer />
    </>
  );
};

export default AdminDashboard;
