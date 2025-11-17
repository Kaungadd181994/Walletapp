// FIX: Import React to resolve 'Cannot find namespace 'React'' error.
import React from 'react';

export type NavTab = 'wallet' | 'bank' | 'card';

export interface Feature {
  name: string;
  // FIX: Changed icon type from React.ReactNode to string for better type safety and simpler implementation.
  icon: string;
}
