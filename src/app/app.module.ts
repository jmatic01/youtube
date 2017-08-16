import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpModule } from "@angular/http";

import { AppComponent } from "./app.component";
import { AppState } from "./shared/app-state.service";
import { HeaderComponent } from "./shared/nav/header/header.component";
import { SearchBoxComponent } from "./shared/nav/search-box/search-box.component";
import { VideoListComponent } from "./videos/video-list/video-list.component";
import { VideoListItemComponent } from "./videos/video-list-item/video-list-item.component";
import { VideoDetailComponent } from "./videos/video-detail/video-detail.component";
import { VideosComponent } from "./videos/videos.component";
import { VideoService } from "./videos/shared/video.service";
import { YoutubeSafeUrlPipe } from "./shared/youtube-safe-url.pipe";
import { PaginationControlsCmp, PaginatePipe, PaginationService } from "ng2-pagination";
import { routing }        from './app.routing';
import { AlertService, AuthenticationService, UserService } from './services/index';
import { LoginComponent } from './login/index';
import { FormsModule }    from '@angular/forms';
import { HomeComponent } from './home/index';
import { fakeBackendProvider } from './helpers/index';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { BaseRequestOptions } from '@angular/http';
import { RegisterComponent } from './register/index';
import { AuthGuard } from './guards/index';
import { AlertComponent } from './directives/index';

@NgModule({
	imports: [
		BrowserModule,
		HttpModule,
		FormsModule,
		routing
	],
	declarations: [
		AppComponent,
		HeaderComponent,
		SearchBoxComponent,
		VideosComponent,
		VideoListComponent,
		VideoListItemComponent,
		VideoDetailComponent,
		PaginationControlsCmp,
		YoutubeSafeUrlPipe,
		PaginatePipe,
		LoginComponent,
		HomeComponent,
		RegisterComponent,
		AlertComponent
	],
	bootstrap: [
		AppComponent
	],
	providers: [
		AppState,
		VideoService,
		PaginationService,
		AuthenticationService,
		UserService,
		AlertService,
		fakeBackendProvider,
		MockBackend,
		BaseRequestOptions,
		AuthGuard
	]
})
export class AppModule {
}
