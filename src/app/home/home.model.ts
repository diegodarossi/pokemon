interface Home {
  count: number;
  previous: string;
  next: string;
  results: List[];
}

interface List {
  url: string;
  name: string;
}

export { Home, List };
