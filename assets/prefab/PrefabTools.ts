import { _decorator, Component, Node, director } from 'cc';
const { ccclass, property } = _decorator;

import { AudioManager } from "../common/AudioManager";
import { TypeAction } from '../common/Constant';

@ccclass('PrefabTools')
export class PrefabTools extends Component {
    start() {

    }

    update(deltaTime: number) {
        
    }



    clickLove(){
        AudioManager.playSoundClick();
        
      if(window["typeAction"] == TypeAction.LOVE) {
        return;
      }
      window["typeAction"]=TypeAction.LOVE
      director.loadScene("Love");

    }

    clickPhone(){
        AudioManager.playSoundClick();
      if(window["typeAction"] == TypeAction.PHONE) {
        return;
      }
      window["typeAction"]=TypeAction.PHONE
      director.loadScene("PhoneAddress");

    }

    clickAddress(){
        AudioManager.playSoundClick();
      if(window["typeAction"] == TypeAction.ADDRESS) {
        return;
      }
      window["typeAction"]=TypeAction.ADDRESS
      director.loadScene("PhoneAddress");

    }

}

