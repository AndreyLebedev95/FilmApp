export interface FilmDetailsProps {
    genre: string,
    overview?: string | null,
    originalTitle?: string,
    title: string,
    posterPath: string,
    releaseDate: string,
    score: number,
    voteCount: number
}