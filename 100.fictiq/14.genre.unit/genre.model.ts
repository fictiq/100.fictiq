import Genre from "./fce/genre.interface";
import GenreBit from "./fce/genre.interface";

export class GenreModel implements Genre {
    genre: string;
    //genreBitList: GenreBit[] = [];
    //genreBits: any = {};

    list: string[] = ['genre-fantasy', 'genre-horror', 'genre-mystery', 'genre-romance']
}
