import { _decorator, Component, Node, RichText, Label, assetManager, TextAsset } from 'cc';
import { Languages } from '../common/Language';
const { ccclass, property } = _decorator;

@ccclass('PrefabLove')
export class PrefabLove extends Component {

    @property(RichText)
    richTextContent: RichText=null;


   @property(Label)
    lblNumberPartner: Label=null;

    @property(Label)
    lblNumberYou: Label=null;
    onLoad(){
       
        this.initLayout()

    }
    start() {

    }

    update(deltaTime: number) {
        
    }

    initLayout(){
     

    }

    // update (dt) {}
    updateData(loveData) {
        var p1 = loveData.number1;
        var p2 = loveData.number2;
        this.lblNumberYou.string = p1;
        this.lblNumberPartner.string = p2;
        var language = Languages.getLanguage();
        var url = "";
        
        if(p1 > p2) {
         // url = language + "/LoveData/" + p2 +"" +p1;
        // url = language + "/LoveData/" + p2 +"" +p1;
         url = language + "_love_" +  p2 +"" +p1;
        } else {
          //url = language + "/LoveData/" + p1 +"" +p2;
          url = language + "_love_" + p1 +"" +p2;
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
            self.richTextContent.string = texture.toString();
          });
        }
}

