import { DOCUMENT } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BackendService } from './services/backend.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'keycloak-angular-sample';

  window: any;
  loading: boolean = true;

    constructor(
      @Inject(DOCUMENT) private _document: any,
    private backendService : BackendService

  ) {
        this.window = this._document.defaultView
        console.log('document', this.window)
      }


  interval: any;
   ngOnInit(): void
   {
    const that = this;
    this.interval = setInterval( () => {
      if(that.window.keycloak) {
        if(that.interval) {
          clearInterval(that.interval)
        }
          
        that.loading = false;
        that.loadFromBack();
      }}
    , 3000)
  }

  loadFromBack() {
   this.backendService.getHellword().subscribe(respon => this.title = respon)
  }
  
}
