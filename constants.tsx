
import React from 'react';
import { Truck, Receipt, Database, Globe, ShoppingBag, Clock } from 'lucide-react';
import { ServiceCardProps, NavItem, ProductType, Partner } from './types.ts';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'Collections', href: '#collections' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

export const SERVICES: ServiceCardProps[] = [
  {
    title: 'Pan-India Distribution',
    description: 'Bridging the gap from local artisans to wholesalers across all corners of India.',
    icon: <Globe className="w-8 h-8 text-amber-500" />,
  },
  {
    title: 'Safe Logistics',
    description: 'Exporting stocks through premium domestic logistics partners with end-to-end safety.',
    icon: <Truck className="w-8 h-8 text-amber-500" />,
  },
  {
    title: 'Transparent Billing',
    description: 'Automated bookkeeping and clear billing for audits and accounts management.',
    icon: <Receipt className="w-8 h-8 text-amber-500" />,
  },
  {
    title: 'Data Security',
    description: 'Secure records of sales and customer data to ensure business privacy and efficiency.',
    icon: <Database className="w-8 h-8 text-amber-500" />,
  },
  {
    title: 'Wholesale Ordering',
    description: 'Digital ordering system optimized for both long-term and new bulk buyers.',
    icon: <ShoppingBag className="w-8 h-8 text-amber-500" />,
  },
  {
    title: '20 Years Legacy',
    description: 'Built on trust and customer support since the last two decades.',
    icon: <Clock className="w-8 h-8 text-amber-500" />,
  },
];

export const PRODUCTS: ProductType[] = [
  { id: '1', name: 'Traditional Kanchipuram', fabric: 'Pure Silk', origin: 'Kanchipuram', image: 'https://lh3.googleusercontent.com/d/1YTirxuqY6szLgbn796yBFsBZJHV3Bw8o' },
  { id: '2', name: 'Surat Designer Silk', fabric: 'High-quality Silk', origin: 'Surat', image: 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&q=80&w=800' },
  { id: '3', name: 'Wedding Bridal Special', fabric: 'Embroidered Net', origin: 'Pan-India', image: 'https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&q=80&w=800' },
  { id: '4', name: 'Bangalore Cotton', fabric: 'Suti Cotton', origin: 'Bangalore', image: 'https://lh3.googleusercontent.com/d/18D4NThZ0xgVQ2svrz9ibf89yKlRNkDb5' },
  { id: '5', name: 'Fancy Georgette', fabric: 'Georgette', origin: 'Surat', image: 'https://lh3.googleusercontent.com/d/1L2vIyOd3FzVDy9u5aLMLv73DjzO2ibqI' },
  { id: '6', name: 'Traditional Banarasi', fabric: 'Silk & Zari', origin: 'Varanasi', image: 'https://lh3.googleusercontent.com/d/1-B4g5vANOfZeaEfBiU7JDW-Ghnxj6lwn' },
];

export const PARTNERS: Partner[] = [
  { name: 'Kesaria Textile Company' },
  { name: 'Ajmera Fashion' },
  { name: 'Divya Saree Emporium' },
  { name: 'Vandana Textiles' },
  { name: 'Mahotsav Sarees' },
  { name: 'Patel Sarees' },
];
