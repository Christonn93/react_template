import { Link, Outlet } from 'react-router-dom';

export const MainLayout = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <header style={{ background: '#007bff', padding: '10px', color: '#fff' }}>
        <h1>
          <Link to="/" style={{ color: '#fff', textDecoration: 'none' }}>
            My Website
          </Link>
        </h1>
      </header>

      <main style={{ flex: 1, padding: '20px' }}>
        <Outlet />
      </main>

      <footer style={{ background: '#343a40', padding: '10px', color: '#fff' }}>
        <p>&copy; 2025 My Website</p>
      </footer>
    </div>
  );
};
