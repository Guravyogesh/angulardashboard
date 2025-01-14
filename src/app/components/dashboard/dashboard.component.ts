import { Component, EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  @Output() settingsEvent = new EventEmitter<void>();
  ngAfterViewInit(): void {
    this.initializeCharts();
  }
  initializeCharts() {
   
  }

  emitSettingsEvent() {
    this.settingsEvent.emit();
  }
}
