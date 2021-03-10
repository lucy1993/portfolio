import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Link } from "react-router-dom";

function Navigation() {
  const [activeTab, setActiveTab] = useState(window.location.pathname.slice(1))
  const [allTabs, setAllTabs] = useState(['hola', 'technologies', 'about', 'play'])
  
  useEffect(() => {
    setActiveTab(window.location.pathname.slice(1))
  });

  const handleClick = (tab) => {
    setActiveTab(tab)
  }

  return (
    <ul className='main-navigation'>
      {allTabs && allTabs.map(tab => <li key={uuidv4()} className={`nav-li ${tab}`}>
        <Link to={`/portfolio/${tab}`}
        onClick={() => handleClick(tab)}
        className={activeTab === 'portfolio/'+tab || (activeTab === 'portfolio' && tab === 'hola') ? 'active' : ''}
        >
          {tab}
        </Link>
      </li>
      )}
    </ul>
  );
}

export default Navigation;