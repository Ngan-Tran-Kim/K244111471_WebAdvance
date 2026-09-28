import { Component } from '@angular/core';

@Component({
  selector: 'app-binding-style-component',
  standalone: false,
  styleUrl: './binding-style-component.css',
  templateUrl: './binding-style-component.html',
})
export class BindingStyleComponent {
  progressValue: number = 75;
  statusColor: string = 'green';

  readonly progressColors: string[] = [
    '#ff4d4d',
    '#ff7a59',
    '#ffb84d',
    '#ffd166',
    '#9adf5b',
    '#4cd964',
    '#4cc9f0',
    '#3a86ff',
    '#6f42c1',
    '#ff3d81',
  ];

  getProgressColor(): string {
    const index = Math.min(
      Math.max(Math.floor(this.progressValue / 10), 0),
      this.progressColors.length - 1,
    );

    return this.progressColors[index];
  }

  getProgressGradient(): string {
    const gradientStops = this.progressColors
      .map((color, index) => `${color} ${index * 10}% ${(index + 1) * 10}%`)
      .join(', ');

    return `linear-gradient(to right, ${gradientStops})`;
  }

  isCritical(): boolean {
    return this.progressValue > 80;
  }
}
