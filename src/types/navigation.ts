export interface NavigationItem {
  title: string;
  href: string;
  children?: NavigationItem[];
}

export interface NavigationGroup {
  title: string;
  items: NavigationItem[];
}
