type View = 'hero' | 'catalog' | 'admin';

interface NavigationProps {
  activeView: View;
  onNavigate: (view: View) => void;
}

export function Navigation({ activeView, onNavigate }: NavigationProps) {
  const links: {
    id: View;
    label: string;
  }[] = [
    {
      id: 'hero',
      label: 'Home',
    },
    {
      id: 'catalog',
      label: 'Catalog',
    },
    {
      id: 'admin',
      label: 'Admin',
    },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14">
          <div className="cursor-pointer" onClick={() => onNavigate('hero')}>
            <span className="text-lg font-semibold tracking-tight text-ink">ALMANDR</span>
          </div>

          <div className="hidden md:flex space-x-8">
            {links.map((link) => (
              <button
                key={link.id}
                onClick={() => onNavigate(link.id)}
                className={`relative py-4 text-sm font-medium transition-colors duration-200 ${activeView === link.id ? 'text-ink border-b-2 border-ink' : 'text-gray-500 hover:text-ink border-b-2 border-transparent'}`}
              >
                {link.label}
              </button>
            ))}
          </div>

          <div className="md:hidden">
            <div className="flex space-x-4">
              {links.map((link) => (
                <button
                  key={link.id}
                  onClick={() => onNavigate(link.id)}
                  className={`text-xs font-medium ${activeView === link.id ? 'text-ink font-bold' : 'text-gray-500'}`}
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
