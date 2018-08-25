import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../authentication/auth.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  dropdownLi : string = "nav-item dropdown";
  dropdownMenu : string = "dropdown-menu";

  constructor(
    private router : Router,
    private authService : AuthService
  ) {  }

  ngOnInit() {
  }

  logout() {
    localStorage.clear();
    this.router.navigate(['/signin']);
  }
}
