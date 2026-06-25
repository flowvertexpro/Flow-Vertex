/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  deliveryTime: string;
  startingPrice: string;
  iconName: string; // resolved to Lucide icon dynamically
}

export interface PricingPackage {
  id: string;
  name: string;
  price: string;
  description: string;
  features: string[];
  isPopular?: boolean;
  accentColor: 'cyan' | 'purple' | 'blue';
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  thumbnailUrl: string;
  videoPlaceholderUrl?: string; // high-quality video visual loop simulation
  duration: string;
  ratio: '16:9' | '9:16';
  client: string;
  tags: string[];
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  company: string;
  quote: string;
  avatarUrl: string;
  rating: number;
}

export interface TimelineClip {
  id: string;
  title: string;
  track: number; // 1: Video 1, 2: Video 2/Overlay, 3: Audio, 4: VFX
  start: number; // percentage offset
  width: number; // percentage width
  color: string;
  type: 'video' | 'audio' | 'vfx' | 'text';
  thumbnailUrl?: string;
  icon?: string;
}
