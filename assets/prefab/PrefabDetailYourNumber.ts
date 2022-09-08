import { _decorator, Component, Node, RichText, Label, assetManager, TextAsset } from 'cc';
const { ccclass, property } = _decorator;
import { Languages } from "../common/Language";
import * as i18n from "db://i18n/LanguageData";
import { TypeAction } from '../common/Constant';
@ccclass('PrefabDetailYourNumber')
export class PrefabDetailYourNumber extends Component {


    @property(RichText)
    richTextContent: RichText |null =null;

    @property(Label)
    lblNumber: Label |null =null;


    onLoad(){
    }
    start() {

    }

    update(deltaTime: number) {
        
    }


    updateData(number, typeNumber:TypeAction) {
        var language = Languages.getLanguage();
        var url = "";
        i18n.init(language);
        switch (window["typeAction"]) {
          case TypeAction.RULING_NUMBER:
            // code block
            //number = soChuDao;
            url = language + "_rullingNumber_" + number;
            break;
          case TypeAction.PERSONAL_YEAR:
            // code block
            //number = indexByName.soulNumber;
            url = language + "_year_" + number;
            break;
          case TypeAction.DESTINY:
            //number = indexByName.totalNameNumber;
            url = language + "_namenumber_" + number;
            // code block
            break;
          case TypeAction.LIFE_PATH:
            //number = soDuongDoi;
            url = language + "_lifepath_" + number;
            // code block
            break;
          case TypeAction.KARMIC_DEBT:
            url = language + "_karmicdebt_" + number;
            console.log("url: " + url);
            break;
          case TypeAction.PERIOD1:
          case TypeAction.PERIOD2:
          case TypeAction.PERIOD3:
            url = language + "_period_" + number;
            break;
          default:
          // code block
        }
    
        this.lblNumber.string = number;
        this.loadData(url);
      }
    
      /**
       * Hàm load Data từ bundle
       * @param numberDay: Tên con số cần lấy (Đánh số theo thứ tự từ 1-9)
       * @param nameBundle : Tên bundle chứa
       * @result : Nội dung về con số tương ứng
       */
      loadData(url) {
        var self = this;
        var bundle = assetManager.getBundle("data");
        bundle.load(url, function (err, texture) {
          ////console.log(texture)
          self.richTextContent.string = `<color=#ffffff>${texture.toString()}</color>`;
        });
      }
}

