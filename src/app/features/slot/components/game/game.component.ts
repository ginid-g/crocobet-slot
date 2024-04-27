import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { Game } from 'src/app/services/category/category.service';

@Component({
  selector: 'app-game',
  standalone: true,
  imports: [CommonModule, CardComponent],
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss'],
})
export class GameComponent {
  @Input() games: Game[] | null = [];

  constructor() {}

  ngOnChanges() {
    console.log('games', this.games);
  }
}
