import { Injectable, Signal, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

export interface Slot {
  type: string;
  category: string;
  group: string;
  platform: string;
  name: string;
  active: boolean;
  background: string;
  icon: string;
  multiLangName?: {
    ka: string;
    en: string;
    ru: string;
    tr: string;
  };
  order: number;
  games: Game[];
}

export interface Game {
  tags: string[];
  game_id: string;
  name: string;
  provider: string;
  image: string;
  url: string;
  order: number;
  providerName: string;
  imageSet: {
    blurhash: string | null;
    original: string;
    webp: string;
  };
  favoriteCount: number;
  gameId: string;
  image2: string;
}

export interface Provider {
  _id: string;
  name: string;
  iframeW: number;
  iframeH: number;
  vendor: string;
  provider: string;
  type: string;
  order: number;
  enabled: boolean;
  logo: string;
  tags: string[];
  gamesCount: number;
}

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  baseUrl: string = environment.API_URL;
  games = signal<Game[]>([]);

  constructor(private http: HttpClient) {}

  getCategory(): Observable<Slot[]> {
    const url = this.baseUrl + '/v2/slot/categories?include=games';

    return this.http.get<{ data: Slot[] }>(url).pipe(
      map((data: { data: Slot[] }) => {
        if (data.data[0].games) {
          this.setGames(data.data[0].games);
        }

        return data.data.filter(
          (result) => result.platform === 'desktop' || result.platform === 'all'
        );
      })
    );
  }

  getProviders(): Observable<Provider[]> {
    const url = this.baseUrl + '?type=slot&platform=desktop';

    return this.http.get<{ data: Provider[] }>(url).pipe(
      map((data: { data: Provider[] }) => {
        return data.data;
      })
    );
  }

  getSlotByProvider(providerId: string) {
    const url = this.baseUrl + '/v2/slot/providers/' + providerId;
    return this.http.get<{ data: Slot }>(url).pipe(
      map((data: { data: Slot }) => {
        this.setGames(data.data.games);
        return data.data;
      })
    );
  }

  setGames(game: Game[]) {
    this.games.set(game);
  }
}
