import {Component, ViewEncapsulation} from "@angular/core";
import {Router} from '@angular/router';


@Component({
	selector: 'my-app',
	templateUrl: 'app.component.html',
	encapsulation: ViewEncapsulation.None,

})
export class AppComponent {
	title = 'Youtube Search';
}
