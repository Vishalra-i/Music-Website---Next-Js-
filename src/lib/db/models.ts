import type { StoreData } from "@/data/stores";

export const COLLECTIONS = {
  stores: "stores",
  pages: "pages",
  templates: "templates",
  users: "users",
} as const;

export type StoreDocument = StoreData & {
  _id?: string;
  slug: string;
  createdAt?: Date;
  updatedAt?: Date;
};

export type PageDocument = {
  _id?: string;
  slug: string;
  title: string;
  templateSlug: string;
  sections: Array<Record<string, unknown>>;
  createdAt?: Date;
  updatedAt?: Date;
};

export type TemplateDocument = {
  _id?: string;
  slug: string;
  name: string;
  description?: string;
  config: Record<string, unknown>;
  createdAt?: Date;
  updatedAt?: Date;
};

export type UserDocument = {
  _id?: string;
  email: string;
  name: string;
  role: "admin" | "editor" | "viewer";
  createdAt?: Date;
  updatedAt?: Date;
};
