import { Component, Input, OnInit,AfterViewInit, ViewChild, ViewContainerRef,ComponentFactoryResolver, OnDestroy } from '@angular/core';
import { ModalDirective } from './directives/modal.directive';
import { ModalComponent } from '../modal/modal.component';
interface AdComponent {
data: any;
}

@Component({
  selector: 'app-lazy',
  templateUrl: './lazy.component.html',
  styleUrls: ['./lazy.component.css']
})
export class LazyComponent implements OnInit, AfterViewInit {
@ViewChild("vc", {read: ViewContainerRef}) modal: ViewContainerRef;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }
	ngAfterViewInit () {
		debugger;
		let data = {}; 
		let componentFactory = this.componentFactoryResolver.resolveComponentFactory(ModalComponent);
		debugger;
		let viewContainerRef = this.modal;
		let componentRef = viewContainerRef.createComponent(componentFactory);
	}
  
  ngOnInit() {}

}
