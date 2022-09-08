import { _decorator, Component, Node, Label, Sprite, RichText, SpriteFrame, Prefab, instantiate, color, sys, native, resources, assetManager, TextAsset } from 'cc';
import { AudioManager } from '../common/AudioManager';
import { CommonTS } from '../common/CommonTS';
import { Constant, TypeActionForecast } from '../common/Constant';
import { Languages } from '../common/Language';
const { ccclass, property } = _decorator;

@ccclass('PrefabForecast')

export class PrefabForecast extends Component {

    @property(Label)
    lblToday: Label = null;

    @property(Label)
    lblTomorrow: Label = null;




    @property(RichText)
    richTextDay: RichText = null;


    @property(Sprite)
    imgArrowUpDown: Sprite = null;
    

     isShowPrefabMonth =false;


     @property(Node)
     nodeParentForecast: Node = null;
 

     @property(Prefab)
     prefabForecastMonth: Prefab | null = null;
   
     dayForecast: number;

    onLoad(){
    
        this.initLayout()

    }
    start() {

    }


    update(deltaTime: number) {
        
    }


    initLayout(){


        this.hideNodeMonth()



        var d = new Date();
        var dateNext = new Date(d.getFullYear(), d.getMonth(), d.getDate() + 1);
        var dataUser = JSON.parse(sys.localStorage.getItem(Constant.PERSONAL));
        ////console.log(dataUser);
        var personal = CommonTS.tinhPersonalDay(dataUser, d);
        var language = Languages.getLanguage();
      


        this.lblToday.string =
        d.getDate() + "/" + (d.getMonth() + 1) + "/" + d.getFullYear();
      this.lblTomorrow.string = dateNext.getDate() + "/" + (dateNext.getMonth() + 1) + "/" + dateNext.getFullYear();
      this.dayForecast = personal.dayForecast;
      var url = language + "_daypersonal_" + this.dayForecast;


        this.loadData(url);


        
    }



    showHideNodeMonth(){
      AudioManager.playSoundClick()


        this.isShowPrefabMonth ? this.hideNodeMonth() : this.showNodeMonth()
    }



    hideNodeMonth(){
        this.isShowPrefabMonth=false
    
        this.imgArrowUpDown.node.angle=0

        var node = this.nodeParentForecast.getChildByName("monthForecast");
        if (node != null) {
          node.removeFromParent();
        }





    // this.imgArrowUpDown.getComponent(Sprite).spriteFrame= AudioManager.getMusic()==="true"? this.icON : this.icOFF

    }

    showNodeMonth(){
        this.isShowPrefabMonth=true
        this.imgArrowUpDown.node.angle=180

        var nodeMonth = instantiate(this.prefabForecastMonth);
        nodeMonth.name = "monthForecast";
        this.nodeParentForecast.insertChild(nodeMonth,1)

    }


    clickPreOrNext(event, customEventData){

        AudioManager.playSoundClick()

        if(customEventData==TypeActionForecast.PRE){
            this.lblToday.color = color(255, 255, 255);
            this.lblTomorrow.color = color(5, 4, 44);
            this.updateRichTextData(customEventData);

        }else if(customEventData==TypeActionForecast.NEXT){

            this.lblTomorrow.color = color(255, 255, 255);
            this.lblToday.color = color(5, 4, 44);
            this.updateRichTextData(customEventData);
        }
        


    }


    updateRichTextData(type: TypeActionForecast){
        var url = "";
        var language = Languages.getLanguage();
        var number = 0;
        if (type == TypeActionForecast.PRE) {
            number = this.dayForecast;
        } else if(type == TypeActionForecast.NEXT) {
            number = this.checkNextNumber(this.dayForecast + 1);
        }
        url = language + "_daypersonal_" + number;
          console.log("number: " + number);

          this.loadData(url);

    }
    checkNextNumber(number) {
        if (number > 9) {
          number = 1;
        }
        return number;
      }

  
      /**
   * Hàm load Data từ bundle
   * @param numberDay: Tên con số cần lấy (Đánh số theo thứ tự từ 1-9)
   * @param nameBundle : Tên bundle chứa
   * @result : Nội dung về con số tương ứng 
   */
  loadData(url) {
    var self=this
    var bundle = assetManager.getBundle("data");

    bundle.load(url, function (err, texture) {
     self.richTextDay.string =`<color=#000000>${texture.toString()}</color>`;
    });

  }

}

