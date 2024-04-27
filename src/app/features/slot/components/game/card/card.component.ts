import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Game } from 'src/app/services/category/category.service';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input('game') game: Game | null = null;
}
