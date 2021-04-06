import RAF from '../utils/RAF'
import MyGUI from '../utils/MyGUI'

class SoundReactor {

    constructor() {
        this.bind()
    }

    init() {
        this.ctx = new AudioContext();
        this.audio = new Audio("assets/chantal.mp3");
        this.audio.currentTime = 1 * 60 + 25
        this.audioSource = this.ctx.createMediaElementSource(this.audio);
        this.analyser = this.ctx.createAnalyser();
        this.analyser.smoothingTimeConstant = 0.8

        this.audioSource.connect(this.analyser);
        this.audioSource.connect(this.ctx.destination);
        this.fdata = new Uint8Array(this.analyser.frequencyBinCount);

        let playFlag = false
        let rafFlag = false
        let handleSound = {
            chantalHandler: () => {
                if (playFlag) {
                    playFlag = false
                    this.audio.pause()
                }
                else {
                    playFlag = true
                    this.audio.play()
                }

                if (rafFlag) return
                RAF.subscribe('soundReactorUpdate', this.update)
            }
        };

        MyGUI.add(handleSound, "chantalHandler")
    }

    update() {
        this.analyser.getByteFrequencyData(this.fdata);
    }

    bind() {
        this.update = this.update.bind(this)
        this.init = this.init.bind(this)
    }

}

const _instance = new SoundReactor()
export default _instance;