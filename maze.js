const Maze = function () {
    this.gameOn = false;
    this.gameOnStatus = 'Game started!';
    this.gameLostStatus = 'You lost!';
    this.gameWonStatus = 'You won!';

    this.startGame = () => {
        this.resetGame();
    }

    this.resetGame = () => {
        this.gameOn = true;
        $('#maze div.boundary').removeClass('youlose');
        this.updateStatus(this.gameOnStatus);
    }

    this.lostGame = () => {
        if (this.gameOn) {
            this.gameOn = false;
            $('#maze div.boundary').addClass('youlose');
            this.updateStatus(this.gameLostStatus);
        }
    }

    this.wonGame = () => {
        if (this.gameOn) {
            this.gameOn = false;
            this.updateStatus(this.gameWonStatus);
        }
    }

    this.updateStatus = (status) => {
        $('#status').text(status);
    }
}

window.onload = () => {
    let maze = new Maze();

    $('#maze #start').on('click', function() {
        maze.startGame();
    });

    $('#maze div.boundary').mouseenter(function() {
        maze.lostGame();
    });

    $('#maze').mouseleave(function() {
        maze.lostGame();
    });

    $('#maze #end').mouseenter(function() {
        maze.wonGame();
    });
}