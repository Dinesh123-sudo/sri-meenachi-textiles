
// Add React import to resolve namespace issues for ReactNode
import React from 'react';

export interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface ProductType {
  id: string;
  name: string;
  fabric: string;
  origin: string;
  image: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface Partner {
  name: string;
}