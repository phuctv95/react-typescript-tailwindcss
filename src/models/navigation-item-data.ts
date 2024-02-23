import React from 'react';

export interface NavigationItemData {
  id: string;
  text: string;
  isSelected: boolean;
  content?: React.FC;
}
