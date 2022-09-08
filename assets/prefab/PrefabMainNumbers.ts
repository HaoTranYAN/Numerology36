import { _decorator, Component, Node, director, Label, sys } from 'cc';
const { ccclass, property } = _decorator;
import { AudioManager } from "../common/AudioManager";
import { CommonTS } from '../common/CommonTS';
import { Constant, TypeAction } from '../common/Constant';
@ccclass('PrefabMainNumbers')
export class PrefabMainNumbers extends Component {

    @property(Label)
    lblLifePath:Label|null =null

    @property(Label)
    lblRuling:Label|null =null
    
    @property(Label)
    lblDestiny:Label|null =null

    @property(Label)
    lblPersonalYear:Label|null =null

    @property(Label)
    lblPeriodCycle:Label|null =null

    @property(Label)
    lblKarmicDebt:Label|null =null
    onLoad(){


        this.initLayout()


    }
    start() {

    }

    update(deltaTime: number) {
        
    }

    initLayout(){
        var date = new Date();
        var dataUser = JSON.parse(sys.localStorage.getItem(Constant.PERSONAL));
        this.lblRuling.string = CommonTS.tinhSoChuDao(dataUser).toString();
        this.lblLifePath.string = CommonTS.tinhSoDuongDoi(dataUser);
        this.lblPersonalYear.string = CommonTS.tinhPersonalDay(dataUser, date).yearForecast;
        //  
        var noNghiep = CommonTS.karmicDebt(dataUser);
        if(noNghiep.length == 0) {
          this.lblKarmicDebt.string = "0";
        } else {
          this.lblKarmicDebt.string = noNghiep.toString().replace(/,/g,", ");
        }

        var chuKi = CommonTS.tinhGiaiDoan(dataUser);
        this.lblPeriodCycle.string = "" + chuKi.gd1 + ", " + chuKi.gd2 + ", " + chuKi.gd3;
        

        this.lblDestiny.string = CommonTS.tinhNameDestiny(dataUser.nameText).toString();


    }


    nextScreen(event, customEventData){
        AudioManager.playSoundClick();
        var number = parseInt(customEventData);
        if(window["typeAction"] == number) return
        window["typeAction"] = number;
        if (window["typeAction"] == TypeAction.PERIOD_CYCLE) {
          this.loadPeriodCycle();
        } else {
          
          this.loadDetailNumber();



    }

}


loadDetailNumber() {
    director.loadScene("Detail");
  }

  loadPeriodCycle() {
    director.loadScene("PeriodCycle");
  }

}



