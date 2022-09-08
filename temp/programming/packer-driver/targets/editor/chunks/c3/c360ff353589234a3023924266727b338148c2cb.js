System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, assert, assetManager, AudioClip, log, sys, AudioManager, _crd, SOUND, MUSIC;

  _export("AudioManager", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      assert = _cc.assert;
      assetManager = _cc.assetManager;
      AudioClip = _cc.AudioClip;
      log = _cc.log;
      sys = _cc.sys;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "b0506be6h9PcaeX2afn6NVu", "AudioManager", undefined);

      __checkObsolete__(['assert', 'assetManager', 'AudioClip', 'AudioSource', 'log', 'sys']);

      SOUND = "SOUND";
      MUSIC = "MUSIC";

      _export("AudioManager", AudioManager = class AudioManager {
        // init AudioManager in GameRoot component.
        static init(audioSource) {
          log("Init AudioManager !");
          AudioManager._audioSource = audioSource;
        }

        static playMusic() {
          const audioSource = AudioManager._audioSource;
          assert(audioSource, "AudioManager not inited!");
          audioSource.play();
        }

        static isMusicOn() {
          return AudioManager._audioSource.playing;
        }

        static checkPlayMusic() {
          if (this.getMusic() === "true" && !this.isMusicOn()) {
            this.playMusic();
          }
        }

        static pauseMusic() {
          const audioSource = AudioManager._audioSource;
          assert(audioSource, "AudioManager not inited!");
          audioSource.pause();
        }

        static playSoundClick() {
          if (this.getSound() === "true") {
            this.playSound("click");
          }
        }

        static setMusic(state) {
          sys.localStorage.setItem(MUSIC, state);
        }

        static getMusic() {
          var sound = sys.localStorage.getItem(MUSIC);
          return sound != null ? sound : "true";
        }

        static setSound(state) {
          sys.localStorage.setItem(SOUND, state);
        }

        static getSound() {
          var sound = sys.localStorage.getItem(SOUND);
          return sound != null ? sound : "true";
        }

        static playSound(name) {
          const audioSource = AudioManager._audioSource;
          assert(audioSource, "AudioManager not inited!");
          const path = `sound/${name}`;
          let cachedAudioClip = AudioManager._cachedAudioClipMap[path];

          if (cachedAudioClip) {
            audioSource.playOneShot(cachedAudioClip, 1);
          } else {
            var _assetManager$resourc;

            (_assetManager$resourc = assetManager.resources) == null ? void 0 : _assetManager$resourc.load(path, AudioClip, (err, clip) => {
              if (err) {
                console.warn(err);
                return;
              }

              AudioManager._cachedAudioClipMap[path] = clip;
              audioSource.playOneShot(clip, 1);
            });
          }
        }

      });

      AudioManager._audioSource = void 0;
      AudioManager._cachedAudioClipMap = {};
      AudioManager._audioSource2 = void 0;

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=c360ff353589234a3023924266727b338148c2cb.js.map