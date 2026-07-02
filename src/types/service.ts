import type { BaseEntity } from "./common";

export interface Service extends BaseEntity {
  slug: string;

  title: string;

  shortDescription: string;

  description: string;

  icon: string;

  image: string;

  highlights: string[];

  active: boolean;
}
