let frameNumber = 0, // start video at frame 0
    // lower numbers = faster playback
    playBackConst = 35,
    // get page height from video duration 
    video1 = document.getElementById('v1'),
    video2 = document.getElementById('v2'),
    video3 = document.getElementById('v3'),
    video4 = document.getElementById('v4'),
    video_duration, segments,
    setHeight = document.querySelector('.set-height'),
    // select video element
    first_scroll_height = document.querySelector('#card-1').scrollHeight,
    second_scroll_height = document.querySelector('#card-2').scrollHeight,
    third_scroll_height = document.querySelector('#card-3').scrollHeight,
    fourth_scroll_height = document.querySelector('#card-4').scrollHeight;

function Video(video) {

    this.static = () => {
        video.addEventListener('loadedmetadata', this.HeightTweaks);
        video.addEventListener('loadeddata', this.videoDuration);
        window.requestAnimationFrame(this.scrollPlay)
        // console.log(video);
    }
    this.videoDuration = () => {
        video_duration = video.duration;
    }
    this.changeToRem = () => {
        let ValueInPX = Math.floor(video.duration) * playBackConst;
        // this value is in px , and being returned to Rem, 1rem = 16px
        return `${ValueInPX / 16}rem`
    }
    this.scrollPlay = () => {
        let frameNumber = window.pageYOffset / playBackConst;
        // console.log(frameNumber);
        video.currentTime = frameNumber;
        window.requestAnimationFrame(this.scrollPlay)
    }
    this.HeightTweaks = (ValueInRem) => {
        setHeight.style.height = ValueInRem;
    }

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
}

window.addEventListener('scroll', scrollW);