import { _decorator, Component, Node, Button, Label, director, RichText, instantiate, Prefab, ScrollView, EditBox,sys } from 'cc';
const { ccclass, property } = _decorator;

import { AudioManager } from "../common/AudioManager";
import { Languages } from "../common/Language";
import * as i18n from "db://i18n/LanguageData";
import { Constant } from '../common/Constant';
import { CommonTS } from '../common/CommonTS';
import { PrefabLove } from '../prefab/PrefabLove';
@ccclass('Love')
export class Love extends Component {
    
    @property(Button)
    btnClose: Button = null;

    @property(Label)
    lblWarning: Label = null;
  
    @property(RichText)
    richTextDescription: RichText = null;
  
    @property(Prefab)
    prefabTools: Prefab = null;

    @property(Node)
    content: Node = null;
  
    @property(ScrollView)
    scrollView: ScrollView = null;

    @property(Prefab)
    prefabContent: Prefab = null;

    @property(EditBox)
    edtYouDay: EditBox = null;
  
    @property(EditBox)
    edtYouMonth: EditBox = null;
  
    @property(EditBox)
    edtYouYear: EditBox = null;

    @property(EditBox)
    edtPartnerDay: EditBox = null;
  
    @property(EditBox)
    edtPartnerMonth: EditBox = null;
  
    @property(EditBox)
    edtPartnerYear: EditBox = null;
    onLoad(){
        this.initLayout();


    }
    start() {

    }

    update(deltaTime: number) {
        
    }

    initLayout(){
        AudioManager.checkPlayMusic();
        this.hideWarning();

        var language = Languages.getLanguage();
        i18n.init(language);
        this.richTextDescription.string = `<color=#ffffff>${i18n.t(
            "INTROLOVE"
            )}</color>`;
            i18n.updateSceneRenderers();

            this.addPrefabTools();

        this.loadData()


    }


 loadData(){
    var dataUser = JSON.parse(sys.localStorage.getItem(Constant.PERSONAL));
    this.edtYouDay.string = parseInt(dataUser.dayOfBirth)+"";
    this.edtYouMonth.string = parseInt(dataUser.monthOfBirth)+"";
    this.edtYouYear.string = parseInt(dataUser.yearOfBirth)+"";
   
    var dataUser2 = JSON.parse(sys.localStorage.getItem(Constant.PERSONAL2));
    if(dataUser2 != null) {
    this.edtPartnerDay.string = parseInt(dataUser2.dayOfBirth)+"";
    this.edtPartnerMonth.string = parseInt(dataUser2.monthOfBirth)+"";
    this.edtPartnerYear.string = parseInt(dataUser2.yearOfBirth)+"";
    this.addPrefabContent(this.tinhDestinyNumber(dataUser, dataUser2));
    // setTimeout( () => {
    this.scrollView.scrollToBottom(0.5);
    // }, 15);
    }
 }
 addPrefabContent(loveData) {
    var nodeText = this.content.getChildByName("nodeContent");
    if (nodeText == null) {
      var nodeText = instantiate(this.prefabContent);
      nodeText.name = "nodeContent";
      this.content.insertChild(nodeText, 1);
    }
    var cell = nodeText.getComponent(PrefabLove);
    cell.updateData(loveData);
  }


  hidePrefabContent() {
    var nodeText = this.content.getChildByName("nodeContent");
    if (nodeText != null) {
      nodeText.removeFromParent();
    }
  }


  checkValidate() {
    AudioManager.playSoundClick();
    var language = Languages.getLanguage();
    i18n.init(language);
    this.lblWarning.node.active = false;
    var yDay = this.edtYouDay.string;
    var yMonth = this.edtYouMonth.string;
    var yYear = this.edtYouYear.string;
    var tDay = this.edtPartnerDay.string;
    var tMonth = this.edtPartnerMonth.string;
    var tYear = this.edtPartnerYear.string;
    if (yDay == "" || tDay == "") {
      this.lblWarning.node.active = true;
      this.lblWarning.string = i18n.t("ERROR1");
      this.hidePrefabContent();
      return;
    } else if (yMonth == "" || tMonth == "") {
      this.lblWarning.node.active = true;
      this.lblWarning.string = i18n.t("ERROR8");
      this.hidePrefabContent();
      return;
    } else if (yYear == "" || tYear == "") {
      this.lblWarning.node.active = true;
      this.lblWarning.string = i18n.t("ERROR9");
      this.hidePrefabContent();
      return;
    } else if(this.checkFormat(yDay) != -1 || this.checkFormat(tDay) != -1) {
      this.lblWarning.node.active = true;
      this.lblWarning.string = i18n.t("ERROR4");
      return;
    } else if(this.checkFormat(yMonth) != -1 || this.checkFormat(tMonth) != -1) {
      this.lblWarning.node.active = true;
      this.lblWarning.string = i18n.t("ERROR11");
      return;
    } else if(this.checkFormat(yYear) != -1 || this.checkFormat(tYear) != -1) {
      this.lblWarning.node.active = true;
      this.lblWarning.string = i18n.t("ERROR12");
      return;
    }
    var p1Day = parseInt(yDay);
    var p1Month = parseInt(yMonth);
    var p1Year = parseInt(yYear);
    var p2Day = parseInt(tDay);
    var p2Month = parseInt(tMonth);
    var p2Year = parseInt(tYear);

    var person1 = {
      dayOfBirth: p1Day,
      monthOfBirth: p1Month,
      yearOfBirth: p1Year,
    };

    var person2 = {
      dayOfBirth: p2Day,
      monthOfBirth: p2Month,
      yearOfBirth: p2Year,
    };

    var p1HopLe = CommonTS.isHopLe(p1Day, p1Month, p1Year);
    var p2HopLe = CommonTS.isHopLe(p2Day, p2Month, p2Year);
    if (p1HopLe == -1 && p2HopLe == -1) {
      sys.localStorage.setItem(Constant.PERSONAL2, JSON.stringify(person2));
      var loveData = this.tinhDestinyNumber(person1, person2);
      this.addPrefabContent(loveData);
    } else {
      if (p1HopLe == 1 || p2HopLe == 1) {
        this.lblWarning.string = i18n.t("ERROR4");
      } else if (p1HopLe == 2 || p2HopLe == 2) {
        this.lblWarning.string = i18n.t("ERROR11");
      } else {
        this.lblWarning.string = i18n.t("ERROR12");
      }
      this.lblWarning.node.active = true;
      this.hidePrefabContent();
    }
    this.scrollView.scrollToPercentVertical(0.8);
  }


  checkFormat(str) {
    var format = /[0-9]+/;
    var result = str.toString().split("");
    var len = result.length;
    var index = -1;
    for(let i = 0; i < len; i++) {
      if(format.test(result[i]) == false) {
        index = i;
      }
    }
    return index;
  }
 tinhDestinyNumber(person1, person2) {
    var number1 = CommonTS.rutGonSo(CommonTS.tinhSoChuDao(person1), 9);
    var number2 = CommonTS.rutGonSo(CommonTS.tinhSoChuDao(person2), 9);
    var loveData = {
      number1: number1,
      number2: number2,
    };
    return loveData;
  }
  hideWarning() {
    this.lblWarning.node.active = false;
  }

  showWarning() {
    this.lblWarning.node.active = true;
  }


  loadHome() {
    AudioManager.playSoundClick();

    director.loadScene("Home");
  }

  addPrefabTools() {
    var node = instantiate(this.prefabTools);
    node.name = "nodeTools";
    this.content.addChild(node);
  }

}


