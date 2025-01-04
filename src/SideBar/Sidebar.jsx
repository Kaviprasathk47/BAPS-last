import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Home, GraduationCap, Calendar, LayoutDashboard, LogOut,
  Activity, CreditCard, DollarSign, BookOpen, FileText, 
  ChevronDown, ChevronUp, Menu, Bell 
} from 'lucide-react';

const Sidebar = () => {
  const [menuState, setMenuState] = useState({
    menu1: false,
    menu2: false,
    menu3: false,
    menu5: false,
  });
  const [isOpen, setIsOpen] = useState(true);
  const location = useLocation();

  const toggleMenu = (menu) => {
    setMenuState((prevState) => ({
      ...prevState,
      [menu]: !prevState[menu],
    }));
  };

  const menuItems = [
    {
      id: 'menu1',
      title: 'Home',
      icon: <Home className="w-5 h-5" />,
      subItems: [
        { 
          title: 'Dashboard', 
          icon: <LayoutDashboard className="w-4 h-4" />,
          path: '/Popup'
        },
        { 
          title: 'Status', 
          icon: <Activity className="w-4 h-4" />,
          path: '/Status'
        }
      ]
    },
    {
      id: 'menu2',
      title: 'Academics',
      icon: <GraduationCap className="w-5 h-5" />,
      subItems: [
        { 
          title: 'Homework', 
          icon: <BookOpen className="w-4 h-4" />,
          path: '/homework'
        },
        { 
          title: 'Search', 
          icon: <Activity className="w-4 h-4" />,
          path: '/search'
        }
      ]
    },
    {
      id: 'menu3',
      title: 'Leave',
      icon: <Calendar className="w-5 h-5" />,
      subItems: [
        { 
          title: 'Leave Application', 
          icon: <FileText className="w-4 h-4" />,
          path: '/leave'
        },
        { 
          title: 'Leave Info', 
          icon: <FileText className="w-4 h-4" />,
          path: '/LeaveInfo'
        }
      ]
    },
    { 
      id: 'menu4',
      title: 'Exam', 
      icon: <CreditCard className="w-5 h-5" />,
      path: '/exam'
    },
    { 
      id: 'menu5',
      title: 'Fees', 
      icon: <DollarSign className="w-5 h-5" />,
      path: '/fees'
    },
    { 
      id: 'menu6',
      title: 'Communication', 
      icon: <BookOpen className="w-5 h-5" />,
      path: '/communication'
    },
    {
      id: 'menu7',
      title: 'Notice',
      icon: <Bell className="w-5 h-5" />,
      subItems: [
        { 
          title: 'Notifications', 
          icon: <Bell className="w-4 h-4" />,
          path: '/notifications'
        }
      ]
    },
    {
      id: 'menu8',
      title: 'Log-Out',
      icon: <LogOut className="w-5 h-5" />,
      path: '/about'
    }
  ];

  const renderMenuItem = (menu) => {
    // For items with direct path (no subitems)
    if (menu.path && !menu.subItems) {
      return (
        <Link
          to={menu.path}
          className={`
            w-full flex items-center justify-between p-3 rounded-lg transition-colors
            ${location.pathname === menu.path 
              ? 'bg-blue-50 text-blue-600' 
              : 'text-gray-600 hover:bg-gray-100'
            }
          `}
        >
          <div className="flex items-center space-x-3">
            <span className={location.pathname === menu.path ? 'text-blue-500' : 'text-gray-500'}>
              {menu.icon}
            </span>
            <span className="font-medium">{menu.title}</span>
          </div>
        </Link>
      );
    }

    // For items with subitems
    return (
      <>
        <button
          onClick={() => toggleMenu(menu.id)}
          className="w-full flex items-center justify-between p-3 hover:bg-gray-100 rounded-lg transition-colors group"
        >
          <div className="flex items-center space-x-3">
            <span className="text-gray-600 group-hover:text-gray-900">
              {menu.icon}
            </span>
            <span className="font-medium text-gray-700 group-hover:text-gray-900">
              {menu.title}
            </span>
          </div>
          {menu.subItems && (
            menuState[menu.id] ? 
              <ChevronUp className="w-4 h-4 text-gray-500" /> : 
              <ChevronDown className="w-4 h-4 text-gray-500" />
          )}
        </button>

        {menuState[menu.id] && menu.subItems && (
          <ul className="mt-1 ml-4 space-y-1">
            {menu.subItems.map((subItem) => (
              <li key={subItem.path}>
                <Link
                  to={subItem.path}
                  className={`
                    w-full flex items-center space-x-3 p-3 rounded-lg transition-colors
                    ${location.pathname === subItem.path 
                      ? 'bg-blue-50 text-blue-600' 
                      : 'text-gray-600 hover:bg-gray-100'
                    }
                  `}
                >
                  <span className={location.pathname === subItem.path ? 'text-blue-500' : 'text-gray-500'}>
                    {subItem.icon}
                  </span>
                  <span>{subItem.title}</span>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </>
    );
  };

  return (
    <div className="relative">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className={`
          fixed top-4 left-4 z-50 
          p-2 bg-white shadow-md rounded-lg 
          hover:bg-gray-100 transition-all duration-300
          ${isOpen ? 'left-64' : 'left-4'}
        `}
        aria-label={isOpen ? 'Close sidebar' : 'Open sidebar'}
      >
        <Menu className="w-6 h-6 text-gray-700" />
      </button>

      <div
        className={`
          fixed top-0 left-0 h-screen bg-white shadow-lg w-64 
          transition-transform duration-300 ease-in-out flex flex-col
          ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        `}
      >
        <div className="flex-shrink-0 p-4 border-b">
          <h1 className="text-xl font-semibold text-gray-800"><bold>B</bold>APS Portal</h1>
        </div>

        <nav className="flex-1 overflow-y-auto p-4">
          <ul className="space-y-2">
            {menuItems.map((menu) => (
              <li key={menu.id} className="rounded-lg overflow-hidden">
                {renderMenuItem(menu)}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;        