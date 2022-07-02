let frameNumber = 0, // start video at frame 0
    // lower numbers = faster playback
    // get page height from video duration 
    video1 = document.getElementById('v1'),
    video2 = document.getElementById('v2'),
    video3 = document.getElementById('v3'),
    video4 = document.getElementById('v4'),
    video5 = document.getElementById('v5'),
    video_duration, segments,
    setHeight = document.querySelector('.set-height');
    
window.onload = ()=>{
    video1.addEventListener('loadeddata', videoDuration);
}

function videoDuration() {
    video1.currentTime = video1.duration;
}

function Video(video) {

    this.static = () => {
        video.addEventListener('loadedmetadata', this.HeightTweaks);
        window.requestAnimationFrame(this.scrollPlay)
        frameNumber = window.pageYOffset / 62;
        // console.log(frameNumber);
        console.log(video.duration - frameNumber, window.pageYOffset);
    }

    this.changeToRem = () => {
        let ValueInPX = Math.floor(video.duration) * playBackConst;
        // this value is in px , and being returned to Rem, 1rem = 16px
        return `${ValueInPX / 16}rem`
    }
    this.scrollPlay = () => {
        let duration = video.duration,
            frameNumber = window.pageYOffset / 62;
        // console.log(frameNumber);
        video.currentTime = duration - frameNumber;
        window.requestAnimationFrame(this.scrollPlay)
    }
    this.HeightTweaks = (ValueInRem) => {
        setHeight.style.height = ValueInRem;
    }

}

// var video = $('#v0')[0] //jquery option

// dynamically set the page height accoding to video length
function scrollW() {
    let vid = [video1, video2, video3, video4, video5]
    for (let i = 0; i < vid.length; i++) {
        let element = new Video(vid[i]);
        element.static()

    }
}

window.addEventListener('scroll', scrollW);