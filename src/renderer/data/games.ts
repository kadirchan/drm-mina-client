export interface Game {
  name: string;
  creator: string;
  cover: string;
  price: number;
  discount: number;
  rating: number;
  releaseDate: string;
  tags: string[];
}

export const games: Game[] = [
  {
    name: 'Barbarian',
    creator: 'Eren Kardas',
    cover: '/img/barbarian.webp',
    price: 20,
    discount: 0,
    rating: 4.5,
    releaseDate: '2021-09-15',
    tags: ['Action', 'Adventure', 'RPG'],
  },
  {
    name: 'Car Race',
    creator: 'Hokus Pokus Games',
    cover: '/img/car-race.webp',
    price: 10,
    discount: 0,
    rating: 3.5,
    releaseDate: '2021-09-15',
    tags: ['Racing', 'Sports'],
  },
  {
    name: 'Cyberpunk',
    creator: 'Cyborg Games',
    cover: '/img/cyberpunk.webp',
    price: 60,
    discount: 0,
    rating: 4.5,
    releaseDate: '2021-09-15',
    tags: ['Action', 'Adventure', 'RPG'],
  },
  {
    name: 'Doll House',
    creator: 'Ponchik Games',
    cover: '/img/doll-house.webp',
    price: 30,
    discount: 0,
    rating: 4.5,
    releaseDate: '2021-09-15',
    tags: ['Action', 'Adventure', 'RPG'],
  },
  {
    name: 'Medieval',
    creator: 'duldul osman',
    cover: '/img/medieval.webp',
    price: 40,
    discount: 0,
    rating: 4.5,
    releaseDate: '2021-09-15',
    tags: ['Action', 'Adventure', 'RPG'],
  },
  {
    name: 'Soul Hunting',
    creator: 'Soul Games',
    cover: '/img/soul-hunting.webp',
    price: 50,
    discount: 0,
    rating: 4.5,
    releaseDate: '2021-09-15',
    tags: ['Action', 'Adventure', 'RPG'],
  },
  {
    name: 'Super Plant',
    creator: 'Super Games',
    cover: '/img/super-plant.webp',
    price: 50,
    discount: 0,
    rating: 4.5,
    releaseDate: '2021-09-15',
    tags: ['Action', 'Adventure', 'RPG'],
  },
  {
    name: 'Lost in Space',
    creator: 'Space Games',
    cover: '/img/lost-in-space.webp',
    price: 50,
    discount: 0,
    rating: 4.5,
    releaseDate: '2021-09-15',
    tags: ['Action', 'Adventure', 'RPG'],
  },
  {
    name: 'Murderer Chicken',
    creator: 'Chicken Wings',
    cover: '/img/murderer-chicken.webp',
    price: 50,
    discount: 0,
    rating: 4.5,
    releaseDate: '2020-09-12',
    tags: ['Action', 'Adventure', 'RPG'],
  },
];
