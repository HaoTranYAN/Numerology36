import {
  _decorator,
  Component,
  Node,
  RichText,
  Label,
  Prefab,
  ScrollView,
  director,
  sys,
  instantiate,
} from "cc";
const { ccclass, property } = _decorator;
import { AudioManager } from "../common/AudioManager";
import { Languages } from "../common/Language";
import * as i18n from "db://i18n/LanguageData";
import { Constant, TypeAction } from "../common/Constant";
import { CommonTS } from "../common/CommonTS";
import { PrefabCountNumber } from "../prefab/PrefabCountNumber";
import { PrefabDetailYourNumber } from "../prefab/PrefabDetailYourNumber";
@ccclass("Detail")
export class Detail extends Component {
  @property(RichText)
  richTextContentInfo: RichText | null = null;

  @property(Label)
  lblTitle: Label | null = null;

  @property(Label)
  lblTitleInfo: Label | null = null;

  @property(Node)
  content: Node = null;

  @property(Prefab)
  prefabMainNumbers: Prefab = null;

  @property(Prefab)
  prefabPeriod: Prefab = null;

  @property(ScrollView)
  scrollView: ScrollView = null;

  @property(Node)
  bgInfo: Node = null;

  @property(Node)
  bgTop: Node = null;
  @property(Prefab)
  prefabDetailYourNumber: Prefab = null;

  @property(Prefab)
  prefabCountNumber: Prefab = null;

  onLoad() {
    this.initLayout();
  }
  start() {}

  update(deltaTime: number) {}

  initLayout() {
    AudioManager.checkPlayMusic();
    this.hideDialogInfo();
    this.tinhNumber();
    var self = this;

    setTimeout(function () {
      self.addPrefabForDetail();
    }, 50);
    setTimeout(() => {
      this.preloadScene();
    }, 50);
  
  
  
    }
  
    preloadScene(){
      director.preloadScene("Home",function(){})
      director.preloadScene("PeriodCycle",function(){})
      director.preloadScene("Detail",function(){})


    }
  addPrefabForDetail() {
    switch (window["typeAction"]) {
      case TypeAction.PERIOD1:
      case TypeAction.PERIOD2:
      case TypeAction.PERIOD3:
        this.addPrefabPeriod();
        break;

      case TypeAction.LIFE_PATH:
      case TypeAction.RULING_NUMBER:
      case TypeAction.DESTINY:
      case TypeAction.PERSONAL_YEAR:
      case TypeAction.KARMIC_DEBT:
        this.addPrefabMainNumber();

        break;
      default:
        break;
    }
  }
  backScreen() {
    switch (window["typeAction"]) {
      case TypeAction.PERIOD1:
      case TypeAction.PERIOD2:
      case TypeAction.PERIOD3:
        this.loadPeriodCycle();
        break;
      default:
        this.loadHome();

        break;
    }
  }

  tinhNumber() {
    var language = Languages.getLanguage();
    i18n.init(language);

    var dataUser = JSON.parse(sys.localStorage.getItem(Constant.PERSONAL));
    var indexByName = CommonTS.tinhSoTheoTen(dataUser.nameText);
    var nameDestiny = CommonTS.tinhNameDestiny(dataUser.nameText);
    var soChuDao = CommonTS.tinhSoChuDao(dataUser);
    var soDuongDoi = CommonTS.tinhSoDuongDoi(dataUser);
    var date = new Date();
    var namCaNhan = CommonTS.tinhPersonalDay(dataUser, date).yearForecast;
    var period = CommonTS.tinhGiaiDoan(dataUser);
    var karmicDebt = CommonTS.karmicDebt(dataUser);
    // var karmicLesson = common.karmicLesson(dataUser.nameText);

    if (window["typeAction"] == TypeAction.KARMIC_DEBT) {
      this.loadDataKarmic(karmicDebt);
    } else {
      this.loadData(
        soChuDao,
        soDuongDoi,
        namCaNhan,
        period,
        indexByName,
        nameDestiny
      );
    }
    this.lblTitle.string = this.lblTitle.string.toUpperCase();
    i18n.updateSceneRenderers();
  }

  loadData(soChuDao, soDuongDoi, namCaNhan, period, indexByName, nameDestiny) {
    var number = 0;
    var date = new Date();
    switch (window["typeAction"]) {
      case TypeAction.RULING_NUMBER:
        // code block
        number = soChuDao;
        this.lblTitle.string = i18n.t("MASTERNUMBER");
        break;
      case TypeAction.PERSONAL_YEAR:
        // code block
        number = namCaNhan;
        this.lblTitle.string =
          i18n.t("PERSONALYEAR") + " " + date.getFullYear();
        break;

      case TypeAction.DESTINY:
        number = nameDestiny;
        this.lblTitle.string = i18n.t("DESTINY");
        // code block
        break;
      case TypeAction.LIFE_PATH:
        number = soDuongDoi;
        this.lblTitle.string = i18n.t("LIFEPATH");
        break;
      case TypeAction.PERIOD1:
        number = period.gd1;
        this.lblTitle.string = i18n.t("PERIOD1");
        break;
      case TypeAction.PERIOD2:
        number = period.gd2;
        this.lblTitle.string = i18n.t("PERIOD2");
        break;
      case TypeAction.PERIOD3:
        number = period.gd3;
        this.lblTitle.string = i18n.t("PERIOD3");
        break;
      default:
      // code block
    }
    this.addPrefab(number);
  }

  loadDataKarmic(karmicDebt) {
    this.lblTitle.string = i18n.t("KARMICDEBT");

    var len = karmicDebt.length;
    if (len == 0) {
      this.addPrefabCountNumber("0");
    } else {
      this.addPrefabCountNumber(karmicDebt.toString().replace(/,/g, ", "));
      for (let i = 0; i < len; i++) {
        this.addPrefab(karmicDebt[i]);
      }
    }
  }

  addPrefab(dataNumber) {
    var typeNumber: TypeAction = window["typeAction"];
    var nodeText = instantiate(this.prefabDetailYourNumber);
    nodeText.name = "nodePrefabDetailYourNumber";
    var cell = nodeText.getComponent(PrefabDetailYourNumber);
    cell.updateData(dataNumber, typeNumber);
    this.content.addChild(nodeText);
  }

  addPrefabCountNumber(str) {
    var nodeText = instantiate(this.prefabCountNumber);
    nodeText.name = "nodeCountNumber";
    var cell = nodeText.getComponent(PrefabCountNumber);
    cell.updateData(str, TypeAction.KARMIC_DEBT);
    this.content.addChild(nodeText);
  }

  addPrefabPeriod() {
    var nodeNumber = instantiate(this.prefabPeriod);
    nodeNumber.name = "nodePeriod";
    this.content.addChild(nodeNumber);
  }

  addPrefabMainNumber() {
    var nodeNumber = instantiate(this.prefabMainNumbers);
    nodeNumber.name = "nodeMainNumbers";
    this.content.addChild(nodeNumber);
  }

  clickInfo() {
    AudioManager.playSoundClick();
    this.bgInfo.active == true ? this.hideDialogInfo() : this.showDialogInfo();
  }

  clickCloseInfo() {
    AudioManager.playSoundClick();
    this.hideDialogInfo();
  }

  hideDialogInfo() {
    this.bgInfo.active = false;
    this.scrollView.node.active = true;
    this.bgTop.active=true;
  }

  showDialogInfo() {
    this.bgInfo.active = true;
    this.scrollView.node.active = false;
    this.bgTop.active=false;
  
    this.loadDataInfo();
  }
  loadDataInfo() {
    switch (window["typeAction"]) {
      case TypeAction.LIFE_PATH:
        this.lblTitleInfo.string = i18n.t("LIFEPATH");

        this.richTextContentInfo.string = `<color=#05042C>${i18n.t(
          "MEANINGLIFEPATH"
        )}</color>`;
        break;

      case TypeAction.RULING_NUMBER:
        this.lblTitleInfo.string = i18n.t("MASTERNUMBER");
        this.richTextContentInfo.string = `<color=#05042C>${i18n.t(
          "MEANINGMASTERNUMBER"
        )}</color>`;
        break;

      case TypeAction.DESTINY:
        this.lblTitleInfo.string = i18n.t("DESTINY");
        this.richTextContentInfo.string = `<color=#05042C>${i18n.t(
          "MEANINGDESTINY"
        )}</color>`;
        break;

      case TypeAction.PERSONAL_YEAR:
        this.lblTitleInfo.string = i18n.t("PERSONALYEAR");
        this.richTextContentInfo.string = `<color=#05042C>${i18n.t(
          "MEANINGPERSONALYEAR"
        )}</color>`;
        break;

      case TypeAction.KARMIC_DEBT:
        this.lblTitleInfo.string = i18n.t("KARMICDEBT");
        this.richTextContentInfo.string = `<color=#05042C>${i18n.t(
          "MEANINGKARMICDEBT"
        )}</color>`;
        break;

      case TypeAction.PERIOD1:
        this.lblTitleInfo.string = i18n.t("PERIOD1");
        this.richTextContentInfo.string = `<color=#05042C>${i18n.t(
          "MEANINGPERIOD1"
        )}</color>`;
        break;

      case TypeAction.PERIOD2:
        this.lblTitleInfo.string = i18n.t("PERIOD2");
        this.richTextContentInfo.string = `<color=#05042C>${i18n.t(
          "MEANINGPERIOD2"
        )}</color>`;
        break;

      case TypeAction.PERIOD3:
        this.lblTitleInfo.string = i18n.t("PERIOD3");
        this.richTextContentInfo.string = `<color=#05042C>${i18n.t(
          "MEANINGPERIOD3"
        )}</color>`;
        break;
    }
  }

  loadHome() {
    AudioManager.playSoundClick();

    director.loadScene("Home");
  }

  loadPeriodCycle() {
    AudioManager.playSoundClick();

    director.loadScene("PeriodCycle");
  }
}
