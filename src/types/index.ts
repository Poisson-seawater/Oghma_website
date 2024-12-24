export interface Artist {
  id: string;
  name: string;
  avatar: string;
  bio: string;
  specialties: string[];
  price: {
    from: number;
    to: number;
  };
  rating: number;
  completedWorks: number;
}

export interface Memory {
  id: string;
  title: string;
  description: string;
  style: string;
  budget: number;
  status: 'open' | 'in-progress' | 'completed';
  customerId: string;
  artistId?: string;
  createdAt: Date;
}