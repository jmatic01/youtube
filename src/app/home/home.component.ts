import { Component, OnInit } from '@angular/core';

import { User } from '../models/index';
import { UserService } from '../services/index';

@Component({
		moduleId: 'home-' + module.id,
		templateUrl: 'home.component.html',
		styleUrls: ['header.component.css']
})

export class HomeComponent implements OnInit {
		currentUser: User;
		users: User[] = [];

		constructor(private userService: UserService) {
				this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
		}

		ngOnInit() {
				this.loadAllUsers();
		}

		deleteUser(id: number) {
				this.userService.delete(id).subscribe(() => { this.loadAllUsers() });
		}

		private loadAllUsers() {
				this.userService.getAll().subscribe(users => { this.users = users; });
		}
}