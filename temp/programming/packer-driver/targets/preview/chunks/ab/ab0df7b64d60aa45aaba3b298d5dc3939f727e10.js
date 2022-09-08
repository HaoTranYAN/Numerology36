System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, assert, assetManager, AudioClip, log, AudioManager, _crd;

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
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "b0506be6h9PcaeX2afn6NVu", "AudioManager", undefined);

      __checkObsolete__(['assert', 'assetManager', 'AudioClip', 'AudioSource', 'log']);

      _export("AudioManager", AudioManager = class AudioManager {
        // init AudioManager in GameRoot component.
        static init(audioSource) {
          log('Init AudioManager !');
          AudioManager._audioSource = audioSource;
        }

        static playMusic() {
          var audioSource = AudioManager._audioSource;
          assert(audioSource, 'AudioManager not inited!');
          audioSource.play();
        }

        static isMusicOn() {
          return AudioManager._audioSource.playing;
        }

        static pauseMusic() {
          var audioSource = AudioManager._audioSource;
          assert(audioSource, 'AudioManager not inited!');
          audioSource.pause();
        }

        static playSound(name) {
          var audioSource = AudioManager._audioSource;
          assert(audioSource, 'AudioManager not inited!');
          var path = "sound/" + name;
          var cachedAudioClip = AudioManager._cachedAudioClipMap[path];

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

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=ab0df7b64d60aa45aaba3b298d5dc3939f727e10.js.map