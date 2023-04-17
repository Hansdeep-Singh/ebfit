import { Component, OnInit } from '@angular/core';
import { ScreenService } from 'hans-lib';

@Component({
  selector: 'eb-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  constructor(private screenService: ScreenService) { }

  ngOnInit(): void {

  }
  get desktop() {
    return (this.screenService.screenWidth$.value > 1072);
  }

}
