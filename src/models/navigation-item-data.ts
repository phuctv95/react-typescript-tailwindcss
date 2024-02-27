import React from 'react';

export interface NavigationItemData {
  id: string;
  text: string;
  content?: React.FC;
}
