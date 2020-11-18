export interface FilmGridProps {
    films: Array<{
        id: number,
        title: string,
        posterUrl: string
    }>,
    totalPages: number,
    page: number,
    handlePageChange: (page: number) => void
}