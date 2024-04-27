import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Provider } from 'src/app/services/category/category.service';

@Component({
  selector: 'app-provider',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './provider.component.html',
  styleUrls: ['./provider.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProviderComponent {
  @Input('data') data: Provider[] | null = [];
  @Output() onProviderSelect: EventEmitter<string> = new EventEmitter();

  selectProvider(providerId: string) {
    this.onProviderSelect.emit(providerId);
  }
}
