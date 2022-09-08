import { _decorator, Component, Node, Label, Sprite, RichText, SpriteFrame, color, sys, assetManager, TextAsset, native } from 'cc';
import { AudioManager } from '../common/AudioManager';
import { CommonTS } from '../common/CommonTS';
import { Constant, TypeActionForecast } from '../common/Constant';
import { Languages } from '../common/Language';
const { ccclass, property } = _decorator;

@ccclass('PrefabForecastMonth')

export class PrefabForecastMonth extends Component {

    @property(Label)
    lblMonth: Label = null;

    @property(Label)
    lblNextMonth: Label = null;

    @property(RichText)
    richTextMonth: RichText = null;

    monthForecast: number;

   

    onLoad(){
    
        this.initLayout()

    }
    start() {

    }


    update(deltaTime: number) {
        
    }

    clickPreOrNext(event, customEventData){

        AudioManager.playSoundClick()

        if(customEventData==TypeActionForecast.PRE){
            this.lblMonth.color = color(255, 255, 255);
            this.lblNextMonth.color = color(5, 4, 44);
            this.updateRichTextData(customEventData);

        }else if(customEventData==TypeActionForecast.NEXT){

            this.lblNextMonth.color = color(255, 255, 255);
            this.lblMonth.color = color(5, 4, 44);
            this.updateRichTextData(customEventData);
        }
        


    }


    updateRichTextData(type: TypeActionForecast){
        var url = "";
        var language = Languages.getLanguage();
        var number = 0;
        if (type == TypeActionForecast.PRE) {
            number = this.monthForecast;
          } else if(type == TypeActionForecast.NEXT) {
            number = this.checkNextNumber(this.monthForecast + 1);
          }
          url = language + "_monthpersonal_" + number;
          console.log("number: " + number);
          this.loadData(url);

    }
    checkNextNumber(number) {
        if (number > 9) {
          number = 1;
        }
        return number;
      }

    initLayout(){


        var d = new Date();
        var dateNext = new Date(d.getFullYear(), d.getMonth(), d.getDate() + 1);
        var dataUser = JSON.parse(sys.localStorage.getItem(Constant.PERSONAL));
        ////console.log(dataUser);
        var personal = CommonTS.tinhPersonalDay(dataUser, d);
        var language = Languages.getLanguage();
      


        this.lblMonth.string = d.getMonth() + 1 + "/" + d.getFullYear();
        var nextMonth = d.getMonth() + 2;
        var year = d.getFullYear();
        if (nextMonth > 12) {
          nextMonth = 1;
          year = year + 1;
        }
        this.lblNextMonth.string = nextMonth + "/" + year;
        //url = language + "/ThangCaNhan/" + personal.monthForecast;
        this.monthForecast = personal.monthForecast;
        var url = language + "_monthpersonal_" + this.monthForecast;
        this.loadData(url);


        
    }

      /**
   * Hàm load Data từ bundle
   * @param numberDay: Tên con số cần lấy (Đánh số theo thứ tự từ 1-9)
   * @param nameBundle : Tên bundle chứa
   * @result : Nội dung về con số tương ứng 
   */
  loadData(url) {
    var bundle = assetManager.getBundle("data");

    var self=this
    bundle.load(url, function (err, texture) {
      self.richTextMonth.string =`<color=#000000>${texture.toString()}</color>`;
     });
 



  }



  
}

