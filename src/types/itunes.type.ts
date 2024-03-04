export interface ItunesType {
  results: ItunesDataType[];
}

export interface ItunesDataType {
  trackName: string;
  artistId: number;
  kind: string;
  wrapperType: string;
  collectionId: number;
  artistName: string;
  trackCensoredName: string;
  collectionName: string;
  collectionExplicitness: string;
  trackId: number;
  artistViewUrl: string;
  collectionViewUrl: string;
  previewUrl: string;
  country: string;
  collectionCensoredName: string;
  artworkUrl30: string;
  trackViewUrl: string;
  trackPrice: number;
  releaseDate: string;
  artworkUrl100: string;
  trackCount: number;
  artworkUrl60: string;
  trackExplicitness: string;
  isStreamable: boolean;
  discNumber: number;
  trackNumber: number;
  trackTimeMillis: number;
  discCount: number;
  collectionPrice: number;
  currency: string;
  contentAdvisoryRating: string;
  primaryGenreName: string;
}
