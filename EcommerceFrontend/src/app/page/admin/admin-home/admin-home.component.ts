import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent {
  dashboardItems = [
    { title: 'Products', description: 'Manage your products', link: '/admin/products' },
    { title: 'Orders', description: 'View and manage orders', link: '/admin/orders' },
    { title: 'Users', description: 'Manage users', link: '/admin/users' },
    { title: 'Reports', description: 'View reports', link: '/admin/reports' },
    // Add more dashboard items as needed
  ];

  constructor(private router: Router) {}

  navigateToAddProduct() {
    this.router.navigate(['/create-product']);
  }

  navigateTo(link: string) {
    this.router.navigate([link]);
  }
}
