import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

declare var bootstrap: any;
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NavbarComponent, SidebarComponent, DashboardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'admin-dashboard';
  isSidebarClosed = false;
  handleSidebarToggle(isClosed: boolean) {
    this.isSidebarClosed = isClosed;
  }
  openSettingsModal() {
    const settingsModal = new bootstrap.Modal(document.getElementById('settingsModal'), {
      keyboard: false
    });
    settingsModal.show();
  }
}
