import {
  _decorator,
  Component,
  Node,
  director,
  RichText,
  instantiate,
  Prefab,
} from "cc";
const { ccclass, property } = _decorator;
import { AudioManager } from "../common/AudioManager";
import { Languages } from "../common/Language";
import * as i18n from "db://i18n/LanguageData";
import { TypeAction } from "../common/Constant";
@ccclass("PeriodCycle")
export class PeriodCycle extends Component {
  @property(RichText)
  richTextIntro: RichText | null = null;

  @property(Node)
  content: Node = null;

  @property(Prefab)
  prefabPeriod: Prefab = null;

  onLoad() {
    window["typeAction"] = TypeAction.PERIOD_CYCLE;

    this.initLayout();
  }
  start() {}

  update(deltaTime: number) {}

  initLayout() {
    AudioManager.checkPlayMusic();

    var language = Languages.getLanguage();
    i18n.init(language);
    this.richTextIntro.string = i18n.t("MEANINGPERIOD");
    i18n.updateSceneRenderers();

    this.addPrefab();

    setTimeout(() => {
      this.preloadScene();
    }, 50);
  }

  preloadScene() {
    director.preloadScene("Home", function () {});
    director.preloadScene("Detail", function () {});
  }
  addPrefab() {
    var nodeNumber = instantiate(this.prefabPeriod);
    nodeNumber.name = "nodeNumber";
    this.content.addChild(nodeNumber);
  }

  loadHome() {
    AudioManager.playSoundClick();

    director.loadScene("Home");
  }
}
