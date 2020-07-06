import {
  ComponentFactoryResolver,
  Injectable,
  Inject,
  // ReflectiveInjector,
  ComponentRef
} from '@angular/core'

import {ClickableEventComponent} from './asset/clickable-event/clickable-event.component';
import { BarComponent } from './asset/bar/bar.component';
import { TimelineDateComponent } from './asset/timeline-date/timeline-date.component';

@Injectable({
  providedIn: 'root'
})
export class TimelineServiceService {
  factoryResolver: any;
  rootViewContainer: any;

  constructor(@Inject(ComponentFactoryResolver) factoryResolver) {
    this.factoryResolver = factoryResolver;
  }
  
  setRootViewContainerRef(viewContainerRef) {
    this.rootViewContainer = viewContainerRef;
  }
  
  public addClickableComponent(eventInstance) {
    const factory = this.factoryResolver.resolveComponentFactory(ClickableEventComponent);
    const component: ComponentRef<ClickableEventComponent> = factory.create(this.rootViewContainer.parentInjector);
    component.instance.eventInstance = eventInstance;
    this.rootViewContainer.insert(component.hostView);
  }

  public addBarComponent() {
    const factory = this.factoryResolver.resolveComponentFactory(BarComponent);
    const component: ComponentRef<BarComponent> = factory.create(this.rootViewContainer.parentInjector);
    this.rootViewContainer.insert(component.hostView);
  }

  public addDateComponent(date) {
    const factory = this.factoryResolver.resolveComponentFactory(TimelineDateComponent);
    const component: ComponentRef<TimelineDateComponent> = factory.create(this.rootViewContainer.parentInjector);
    component.instance.date = date;
    this.rootViewContainer.insert(component.hostView);
  }
}
