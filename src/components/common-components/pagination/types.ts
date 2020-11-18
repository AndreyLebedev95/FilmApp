export interface PaginationProps {
    totalPages: number,
    page: number,
    handlePageChange: (page: number) => void
}