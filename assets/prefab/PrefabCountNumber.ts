import { _decorator, Component, Node, RichText, Label, assetManager, TextAsset } from 'cc';
const { ccclass, property } = _decorator;
import { Languages } from "../common/Language";
import * as i18n from "db://i18n/LanguageData";
import { TypeAction } from '../common/Constant';
@ccclass('PrefabCountNumber')
export class PrefabCountNumber extends Component {


    @property(RichText)
    richTextContent: RichText |null =null;

    @property(Label)
    lblNumbers: Label |null =null;

   
    start() {

    }

    update(deltaTime: number) {
        
    }

    updateData(result, typeNumber:TypeAction) {
        var language = Languages.getLanguage();
        i18n.init(language);
        if(result == "0") {
            this.lblNumbers.string = i18n.t("NONUMBER");
            this.richTextContent.node.active = true;
            var url = "";

            if(typeNumber==TypeAction.KARMIC_DEBT){
                url = language + "_karmicdebt_" + 0;
            }
        
            this.loadData(url);
        } else {
            this.richTextContent.node.active = false;
            this.lblNumbers.string = i18n.t("YOURNUMBERS") + ": " + result;
        }


        i18n.updateSceneRenderers()
        
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
          self.richTextContent.string = texture.toString();
        });

      }
}

