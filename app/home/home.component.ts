import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'home',
  templateUrl: 'app/home/home.component.html',
})
export class HomeComponent implements OnInit { 
	index:number;

	constructor() {
		
	}

	ngOnInit() {
		this.next_letter(0);
	}

	next_letter(index:number) {
		let self = this;
		let type_this = "Joshua Sisley";
		let demo_input = <HTMLInputElement>document.getElementById('demo_input');
		setTimeout(function() {
	    	if (index <= type_this.length) {
	    		demo_input.value = type_this.substr(0, index++);
	    		self.next_letter(index++);
	    	} else {
	    		// self.next_page();
	    	}
	    }, 120);
	}

	next_page() {
		setTimeout(function() {
			window.location.href = "aboutMe.html";
		}, 500)
	}

	// Configure the auto typing in the search bo

}