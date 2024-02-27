import { useState } from 'react';
import { Showcase1 } from './Showcase-1';
import { NavigationItemData } from './models/navigation-item-data';
import { NavigationItem } from './NavigationItem';
import { Showcase2 } from './Showcase-2';

const initialItems: NavigationItemData[] = [
  {
    id: crypto.randomUUID(),
    text: '1',
    isSelected: true,
    content: Showcase1,
  },
  {
    id: crypto.randomUUID(),
    text: '2',
    isSelected: false,
    content: Showcase2,
  },
  {
    id: crypto.randomUUID(),
    text: '3',
    isSelected: false,
  },
];

function App() {
  const [selectedItem, setSelectedItem] = useState<NavigationItemData>(
    initialItems[1],
  );
  const [navigationItems, setNavigationItems] =
    useState<NavigationItemData[]>(initialItems);

  return (
    <div className="flex h-screen flex-col">
      <div className="flex justify-center gap-2 py-2">
        {navigationItems.map((item) => (
          <NavigationItem
            key={item.id}
            text={item.text}
            isSelected={item.isSelected}
            onClick={() => {
              setNavigationItems(
                navigationItems.map((x) => ({
                  ...x,
                  isSelected: x.id === item.id,
                })),
              );
              setSelectedItem(item);
            }}
          />
        ))}
      </div>
      <div className="grow">
        {selectedItem?.content && <selectedItem.content />}
      </div>
    </div>
  );
}

export default App;
