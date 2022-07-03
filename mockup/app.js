class Video {
    constructor(video, measure) {

        this.static = () => {
            video.addEventListener('loadedmetadata', this.HeightTweaks);
            window.requestAnimationFrame(this.scrollPlay);
            console.log(video.getBoundingClientRect().bottom/ 3);
        };
 // this value is in px , and being returned to Rem, 1rem = 16px
        this.changeToRem = (ValueInPX) => {
            return `${ValueInPX / 16}rem`;
        };
        this.HeightTweaks = () => {
            let ValueInPX = Math.floor(video.duration) * playBackConst;
            setHeight.style.height = this.changeToRem(ValueInPX);
        };
        this.scrollPlay = () => {
            let duration = video.duration,
                frameNumber = video.getBoundingClientRect().bottom/ 30;
            video.currentTime = duration - frameNumber;
            window.requestAnimationFrame(this.scrollPlay);
        };
    }
}
let frameNumber = 0, // start video at frame 0
    // lower numbers = faster playback
    // get page height from video duration 
    video1 = document.getElementById('v1'),
    video2 = document.getElementById('v2'),
    video3 = document.getElementById('v3'),
    video4 = document.getElementById('v4'),
    video5 = document.getElementById('v5'),
    video_duration, segments,
    setHeight = document.querySelector('.set-height'),
    window_height = document.documentElement.clientHeight

window.onload = () => {
    video1.addEventListener('loadeddata', videoDuration);
}

function videoDuration() {
    video1.currentTime = video1.duration;
}

// var video = $('#v0')[0] //jquery option

// dynamically set the page height accoding to video length
function scrollW() {

    let vid;
    if (window.pageYOffset == 0) {
        vid = new Video(video1);
        vid.static()
    }
    if (window.pageYOffset > first_scroll_height / 2) {
        vid = new Video(video2)
        vid.static()
    }
    if (window.pageYOffset > second_scroll_height / 2) {
        vid = new Video(video3)
        vid.static()
    }
    if (window.pageYOffset > third_scroll_height / 2) {
        vid = new Video(video4)
        vid.static()
    }
    // let vid = [video1, video2, video3, video4, video5]

    // for (let i = 0; i < vid.length; i++) {
    //     let element = vid[i]

    //     let video_viewTop = element.getBoundingClientRect().top;
    //     let video_viewBottom = element.getBoundingClientRect().bottom;
    //     if (video_viewTop < window_height) {
    //         // console.log(i,video_viewTop);
    //         new Video(element, video_viewTop).static()
    //     }
    // }
}

window.addEventListener('scroll', scrollW);