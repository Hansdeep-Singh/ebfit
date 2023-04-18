import { Component } from '@angular/core';
import { EngineService, LoadingService } from 'hans-lib';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'EbFit';
  constructor(private engineService: EngineService, public loadingService: LoadingService) { }
  ngOnInit(): void {
    this.loadingService.isloading$.subscribe((data) => { console.log(data) });
    this.engineService.currentNotifyMessage.subscribe((message) => {
      if (message && !message?.success) {
        this.flagShowHide = !message.success;
      }
      else if (message && message?.success) {
        this.flagShowHide = message.success;
      }
    });
  }
  flagShowHide: boolean = false;
  closeNotification($event: boolean): void {
    this.flagShowHide = $event;
  }
}