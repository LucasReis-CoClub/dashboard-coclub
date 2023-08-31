export interface IPagination {
  page: number;
  perPage: number;
  itemCount: number;
  pageCount: number;
  hasPreviousPage: boolean;
  hasNextPage: boolean;
  next: string;
}

export type PaginationState = Partial<IPagination>;