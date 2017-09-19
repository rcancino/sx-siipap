import { Component, AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { TdMediaService } from '@covalent/core';

@Component({
  selector: 'sx-security-page',
  templateUrl: './security-page.component.html',
  styleUrls: ['./security-page.component.css']
})
export class SecurityPageComponent implements AfterViewInit {

  navigation: Object[] = [
    {route: 'usuarios', title: 'Usuarios', descripcion: '', icon:  'people'},
    {route: 'rols', title: 'Roles', icon: 'gamepad'},
  ];

  constructor(
    private _changeDetectorRef: ChangeDetectorRef,
    public media: TdMediaService
  ) {}

  ngAfterViewInit(): void {
    // broadcast to all listener observables when loading the page
    this.media.broadcast();
    this._changeDetectorRef.detectChanges();
  }

}
