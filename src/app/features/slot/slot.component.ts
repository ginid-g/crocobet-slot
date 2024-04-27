import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BannerComponent } from './components/banner/banner.component';
import {
  CategoryService,
  Slot,
  Provider,
  Game,
} from 'src/app/services/category/category.service';
import { CategoryComponent } from './components/category/category.component';
import { ProviderComponent } from './components/provider/provider.component';
import { GameComponent } from './components/game/game.component';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-slot',
  standalone: true,
  imports: [
    CommonModule,
    BannerComponent,
    CategoryComponent,
    ProviderComponent,
    GameComponent,
  ],
  templateUrl: './slot.component.html',
  styleUrls: ['./slot.component.scss'],
})
export class SlotComponent {
  slotCategories$: Observable<Slot[]> = this.categoryService.getCategory();
  providers$: Observable<Provider[]> = this.categoryService.getProviders();
  games = this.categoryService.games;

  constructor(private categoryService: CategoryService) {}

  onProviderSelect(providerId: string) {
    this.categoryService.getSlotByProvider(providerId).subscribe();
  }

  onCategorySelect(slot: Slot) {
    this.categoryService.setGames(slot.games);
  }
}
