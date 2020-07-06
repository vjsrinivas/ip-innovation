import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { TimelineComponent } from './widgets/timeline/timeline.component';
import { ClickableEventComponent } from './widgets/timeline/asset/clickable-event/clickable-event.component';
import { BarComponent } from './widgets/timeline/asset/bar/bar.component';
import { TimelineDateComponent } from './widgets/timeline/asset/timeline-date/timeline-date.component';
import { StickerComponent } from './widgets/sticker/sticker.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TimelineComponent,
    ClickableEventComponent,
    BarComponent,
    TimelineDateComponent,
    StickerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
