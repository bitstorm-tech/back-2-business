import { useState } from 'react';

export default function TabBar({children}) {
  const [activeTabId, setActiveTabId] = useState(0);

  function activeTab(id) {
    return id === activeTabId ? ' text-red-500 border-b-4 font-medium border-red-500' : '';
  }

  return (
    <>
      <div className="bg-indigo-800">
        <nav className="flex flex-col sm:flex-row justify-center">
          {children && children.map((child, i) =>
            <button key={i} onClick={() => setActiveTabId(i)}
                    className={'text-indigo-200 py-4 px-6 block hover:text-red-500 focus:outline-none' + activeTab(i)}>
              {child.props.tabText}
            </button>)}
        </nav>
      </div>
      {children && children[activeTabId]}
    </>
  );
}
