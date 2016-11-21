import { Component } from '@angular/core';
import {IGame} from './games/game';
@Component({
    selector: 'pm-app-game',
    templateUrl: 'app/games/games-list.html'
})
export class AppGamesComponent {
    games: IGame[] = [
        {
            "gameTitle": 'Test1',
            "gameDescription": "test111",
            "genere": "Battle",
            "rating": 8,
            "image":"https://image.spreadshirtmedia.com/image-server/v1/compositions/1008317039/views/4,width=100,height=100,appearanceId=2,version=1445463508/fsociety-mask-full-color-mug.jpg"

        },
        {
            "gameTitle": "Test2",
            "gameDescription": "test22",
            "genere": "Battle2",
            "rating": 8,
            "image":"https://image.spreadshirtmedia.com/image-server/v1/compositions/1008317039/views/4,width=100,height=100,appearanceId=2,version=1445463508/fsociety-mask-full-color-mug.jpg"
        }];
    listFilter: string="cart";

}