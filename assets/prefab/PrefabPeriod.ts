import { _decorator, Component, Node, director } from 'cc';
const { ccclass, property } = _decorator;
import { AudioManager } from "../common/AudioManager";
import { TypeAction } from '../common/Constant';

@ccclass('PrefabPeriod')
export class PrefabPeriod extends Component {

    onLoad(){

    }
    start() {

    }

    update(deltaTime: number) {
        
    }


    nextScreen(event, customEventData){
        AudioManager.playSoundClick();
        var number = parseInt(customEventData);
        if(window["typeAction"] == number) return
        window["typeAction"] = number;
        this.loadDetailNumber();

    }

    loadDetailNumber() {
        director.loadScene("Detail");
      }
}


