function Stopwatch() {
    let startTime, stopTime, running, duration;
    this.start = () => {
        if (running) {
            throw new Error("stop watch already started")
        } else {
            startTime = Date.now();
            running = true;
        }
    }

    this.stop = () => {
        if (running) {
            stopTime = Date.now();
            running = false;
            duration = stopTime - startTime;
        } else {
            throw new Error("stop watch not started")
        }
    }

    this.reset = () => {
        startTime = null;
        stopTime = null;
    
    }

    Object.defineProperty(this, 'duration', {
        get: () => {if (startTime && stopTime ) {
            return stopTime - startTime;
        }
        return 0;}
    });
    

}
const sw = new Stopwatch();
