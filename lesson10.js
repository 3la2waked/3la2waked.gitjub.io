const Circle = function () {
    this.circles = [];

    this.configs = Object.assign({
        wrapper: "circles-wrapper",
        width: $("#width").val()
    });

    this.drawCircle = (circleSize, circleColor) => {
        let posX = (Math.random() * ($(document).width() - circleSize)).toFixed();
        let posY = (Math.random() * ($(document).height() - circleSize)).toFixed();
        return $("<div class='circle'></div>").css({
            'left': posX + 'px',
            'top': posY + 'px',
            'width': circleSize + 'px',
            'background-color': "#" + circleColor
        });
    }

    this.generateRandomColor = () => {
        return Math.floor(Math.random()*16777215).toString(16);
    }

    this.startGeneratingCircles = () => {
        let noCircles = parseInt($("#number-circles").val());
        let growAmount = parseInt($("#growth-amount").val());
        let growRate = parseInt($("#grow-rate").val());
        let initWidth = parseInt($("#width").val());

        for (let i = 0; i < noCircles; i++) {
            let newCircle = {
                element: this.drawCircle(initWidth, this.generateRandomColor()),
                growRate: growRate,
                growAmount: growAmount,
                width: initWidth,
                interval: null
            }
            newCircle.interval = setInterval(this.grow, growRate, newCircle);
            newCircle.element.on('click', function() {
                clearInterval(newCircle.interval);
                newCircle.element = null;
                this.remove();
            });
            this.circles.push(newCircle);
        }

        this.circles.forEach(element =>
            $("#" + this.configs.wrapper).append(element.element)
        );
    }

    this.grow = (circle) => {
        let newWidth = circle.width + circle.growAmount;
        circle.element.css('width', newWidth + "px");
        circle.element.css('height', newWidth + "px");
        circle.width = newWidth;
    }
}
window.onload = () => {
    const circle = new Circle();

    $("#start").on("click", function (evt) {
        evt.preventDefault();
        circle.startGeneratingCircles();
    });
}