import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Slot } from 'src/app/services/category/category.service';

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CategoryComponent {
  @Input('data') data: Slot[] | null = [];
  @Output() onCategorySelect: EventEmitter<Slot> = new EventEmitter();

  selectCategory(slot: Slot) {
    this.onCategorySelect.emit(slot);
  }
}
