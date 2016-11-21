import { Component } from '@angular/core';

@Component({
    selector: 'pm-app',
    template: `
        <h1>FSociety-Hacker News</h1>
        <pm-nav></pm-nav>
        <pm-app-game></pm-app-game>
    `
})
export class AppComponent { }
