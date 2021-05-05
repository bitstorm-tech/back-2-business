import { useState } from 'react';

export default function TabBar({children}) {
  const [activeTabId, setActiveTabId] = useState(0);

  function activeTab(id) {
    return id === activeTabId ? ' text-blue-500 border-b-2 font-medium border-blue-500' : '';
  }

  return (
    <>
      <div className="bg-white">
        <nav className="flex flex-col sm:flex-row justify-center">
          {children && children.map((child, i) =>
            <button key={i} onClick={() => setActiveTabId(i)}
                    className={'text-gray-600 py-4 px-6 block hover:text-blue-500 focus:outline-none' + activeTab(i)}>
              {child.props.tabText}
            </button>)}
        </nav>
      </div>
      <div className="h-full">
        {children && children[activeTabId]}
      </div>
    </>
  );
}
