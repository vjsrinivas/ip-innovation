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
import { AdminComponent } from './components/admin/admin.component';
import { ExportCsvComponent } from './components/export-csv/export-csv.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from "@angular/material/button";
import { EventBoxComponent, EventDialogBox } from './components/event-box/event-box.component';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TimelineComponent,
    ClickableEventComponent,
    BarComponent,
    TimelineDateComponent,
    StickerComponent,
    AdminComponent,
    ExportCsvComponent,
    EventBoxComponent,
    EventDialogBox
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatDialogModule
  ],
  entryComponents: [EventDialogBox],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
