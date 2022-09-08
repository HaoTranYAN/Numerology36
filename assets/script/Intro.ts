import { _decorator, Component, Node, RichText, director } from "cc";
const { ccclass, property } = _decorator;
import { AudioManager } from "../common/AudioManager";
import { Languages } from "../common/Language";
import * as i18n from "db://i18n/LanguageData";
@ccclass("Intro")
export class Intro extends Component {
  @property(RichText)
  meaning: RichText | null = null;

  start() {
    AudioManager.checkPlayMusic();

    var language = Languages.getLanguage();
    i18n.init(language);
    this.meaning.string = i18n.t("MEANING");
    i18n.updateSceneRenderers();

    setTimeout(() => {
      this.preloadScene();
    }, 50);
  }

  preloadScene() {
    director.preloadScene("Home", function () {});
  }

  update(deltaTime: number) {}

  loadSettings() {
    AudioManager.playSoundClick();

    director.loadScene("Settings");
  }
}
