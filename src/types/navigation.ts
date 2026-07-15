export interface NavigationItem {
  name: string;
  title: string;
  href: string;
  children?: NavigationItem[];
}

export interface NavigationGroup {
  name: string;
  title: string;
  items: NavigationItem[];
}
