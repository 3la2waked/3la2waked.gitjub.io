const Animation = function () {

    this.animations = ANIMATIONS;
    this.frame = 0;
    this.timer = null;
    const fontsize = ["7pt", "10pt", "12pt", "16pt", "24pt", "32pt"];

    this.configs = Object.assign({
        animationContainerElement: "text-area",
        startBtnElement: "start",
        stopBtnElement: "stop",
        animationType: "Blank",
        animationDropdownElement: "animation",
        fontsizeDropdownElement: "fontsize",
        turboBtnElement: "turbo",
        speed: 250,
    });

    this.startAnimation = () => {
        this.disableControls();
        let frames = this.animations[this.configs["animationType"]].split("=====\n");
        this.timer = setInterval(() => {
            if (this.frame === frames.length)
                this.frame = 0;
            document.getElementById(this.configs.animationContainerElement).value = frames[this.frame++];
        }, this.configs.speed);
    }

    this.stopAnimation = () => {
        if (this.timer) {
            clearInterval(this.timer);
        }
        this.enableControls();
    }

    this.changeAnimation = (type) => {
        if (this.configs.animationType !== type) {
            this.frame = 0;
            this.configs.animationType = type;
        }
    }

    this.setTurbo = (turbo) => {
        this.configs.speed = turbo ? 50 : 250;
    }

    this.changeFontsize = (size) => {
        let index = ["Tiny", "Small", "Medium", "Large", "Extra Large", "XXL"].indexOf(size);
        document.getElementById(this.configs.animationContainerElement).style.fontSize = fontsize[index];
    }

    this.enableControls = () => {
        document.getElementById(this.configs.startBtnElement).disabled = false;
        document.getElementById(this.configs.stopBtnElement).disabled = true;
        document.getElementById(this.configs.animationDropdownElement).disabled = false;
        document.getElementById(this.configs.fontsizeDropdownElement).disabled = false;
        document.getElementById(this.configs.turboBtnElement).disabled = false;
    }

    this.disableControls = () => {
        document.getElementById(this.configs.startBtnElement).disabled = true;
        document.getElementById(this.configs.stopBtnElement).disabled = false;
        document.getElementById(this.configs.animationDropdownElement).disabled = true;
        document.getElementById(this.configs.fontsizeDropdownElement).disabled = true;
        document.getElementById(this.configs.turboBtnElement).disabled = true;
    }
}

window.onload = () => {
    let animation = new Animation();

    document.getElementById("start").onclick = () => {
        animation.startAnimation();
    }

    document.getElementById("stop").onclick = () => {
        animation.stopAnimation();
    }

    document.getElementById("animation").onchange = (e) => {
        animation.changeAnimation(e.target.value);
    }

    document.getElementById("fontsize").onchange = (e) => {
        animation.changeFontsize(e.target.value);
    }

    document.getElementById("turbo").onchange = (e) => {
        animation.setTurbo(e.target.checked);
    }
}