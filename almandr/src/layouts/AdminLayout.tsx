type AdminLayoutProps = {
  children: React.ReactNode;
};

const AdminLayout = ({ children }: AdminLayoutProps) => {
  return (
    <div>
      <aside>
        <p>Admin Navigation</p>
      </aside>

      <section>{children}</section>
    </div>
  );
};

export default AdminLayout;
