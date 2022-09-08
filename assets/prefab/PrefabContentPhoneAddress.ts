import { _decorator, Component, Node, Label, RichText, assetManager, TextAsset } from 'cc';
import { Languages } from '../common/Language';
const { ccclass, property } = _decorator;
import * as i18n from "db://i18n/LanguageData";
import { TypeAction } from '../common/Constant';


@ccclass('PrefabContentPhoneAddress')
export class PrefabContentPhoneAddress extends Component {



    @property(Label)
    lblNumber: Label = null;

    @property(RichText)
    richTextNumber: RichText = null;


    onLoad(){

    }
    start() {

    }

    update(deltaTime: number) {
        
    }



    updateData(number :number,type:TypeAction ) {
        var language = Languages.getLanguage();
        //this.numberMobile.string = "Số của bạn: " + mobileNumber;
        i18n.init(language);
        this.lblNumber.string = i18n.t("YOURNUMBER") +": " + number;
        var url = "";
        if(type == TypeAction.PHONE) {
          url = language +"_phone_" + number;
        } else if(type==TypeAction.ADDRESS) {
          url = language +"_address_" + number;
        }
        this.loadData(url);
      }

        /**
   * Hàm load Data từ bundle
   * @param numberDay: Tên con số cần lấy (Đánh số theo thứ tự từ 1-9)
   * @param "Data" : Tên bundle chứa
   * @result : Nội dung về con số tương ứng 
   */
         loadData(url) {
            var self = this;
            var bundle = assetManager.getBundle("data");
            bundle.load(url, function (err, texture) {
              self.richTextNumber.string = texture.toString();
            });
          }
}

