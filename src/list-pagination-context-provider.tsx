import React from 'react';

type PaginationState = {
  totalItems: number;
  pageSize: number;
  currentPage: number;
};

type PaginationMeta = {
  totalPages: number;
  previousEnabled: boolean;
  nextEnabled: boolean;
};

type Pagination = PaginationState & PaginationMeta;
type PaginationArgs = Pick<PaginationState, 'totalItems' | 'pageSize'>;

export const usePaginationContext = create<{
  pagination: Pagination;
  setPagination: (pg: Pagination) => void;
  setNextPage: () => void;
  setFirstPage: () => void;
}>((set, get) => ({
  pagination: {
    totalPages: 0,
    pageSize: 0,
    currentPage: 0,
    nextEnabled: false,
    previousEnabled: false,
    totalItems: 0,
  },
  setPagination: (args: PaginationArgs) => set({ pagination: args }),
  setNextPage: () => {},
  setPrevPage: () => {},
  setFirstPage: () => {},
}));

export interface ListContextProps {
  total: number;
  perPage: number;
  currentPage?: number;
}

type ListPaginationContextProps = ListContextProps;

const ListPaginationContextProvider: FCC<{ value: ListPaginationContextProps }> = ({ children, value }) => {
  const { setPagination } = usePaginationContext();

  React.useEffect(() => {
    /*
    setPagination({
      totalPages: totalPages,
      pageSize: value.perPage,
      currentPage,
      nextEnabled,
      previousEnabled,
      totalItems: value.total,
    });
*/
  }, [value]);

  return <>{children}</>;
};

export default ListPaginationContextProvider;
