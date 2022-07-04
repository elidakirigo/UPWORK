class Video {
    constructor(video) {
        this.static = () => {
            // video.addEventListener('loadedmetadata', this.HeightTweaks);
            window.requestAnimationFrame(this.scrollPlay);
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
            let duration = video.duration;
            // frameNumber = window.pageYOffset / 60;
            if (video.getBoundingClientRect().bottom < document.documentElement.clientHeight && video.getBoundingClientRect().bottom > 0) {
                let frameNumber;
                if (video == video1) {
                    frameNumber = ((document.documentElement.clientHeight / 2) - video.getBoundingClientRect().bottom) / 6;
                } else if (video == video5) {
                    frameNumber = ((document.documentElement.clientHeight / 2) - video.getBoundingClientRect().top) / 1.4;
                    // console.log(frameNumber);/
                } else {
                    frameNumber = (document.documentElement.clientHeight - video.getBoundingClientRect().bottom) / 10;
                }
                video.currentTime = duration - frameNumber;
                window.requestAnimationFrame(this.scrollPlay);
            }

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
    video_duration, segments;
// first_scroll_height = document.querySelector('#v1').getBoundingClientRect(),
// second_scroll_height = document.querySelector('#card-2').scrollHeight,
// third_scroll_height = document.querySelector('#card-3').scrollHeight,
// fourth_scroll_height = document.querySelector('#card-4').scrollHeight,
// setHeight = document.querySelector('.set-height'),
// window_height = document.documentElement.clientHeight
// video1.addEventListener('click', () => {
//     // video1.currentTime = video1.duration;
//     console.log('in')
// })
// }
// window.onload = () => {
// );
//     console.log('ink');

// }


let h = 1;
let time = 0

function scrollW() {

    // let vid;
    // if (window.pageYOffset < first_scroll_height) {
    //     vid = new Video(video1);
    //     vid.static()
    // }
    // if (window.pageYOffset > first_scroll_height / 2) {
    //     vid = new Video(video2)
    //     vid.static()
    // }
    // if (window.pageYOffset > second_scroll_height / 2) {
    //     vid = new Video(video3)
    //     vid.static()
    // }
    // if (window.pageYOffset > third_scroll_height / 2) {
    //     vid = new Video(video4)
    //     vid.static()
    // }
    let vid = [video1, video2, video3, video4, video5]

    for (let i = 0; i < vid.length; i++) {
        let element = vid[i]
        // if (h > i && vid[i].getBoundingClientRect().bottom < document.documentElement.clientHeight && vid[i].getBoundingClientRect().bottom > 0) {
        //     // console.log('okiju', i);
        //     new Video(element).static();
        // }

        // if (video_viewTop < window_height) {
        //     // console.log(i,video_viewTop);
        new Video(element).static()
        // }
    }
}

window.addEventListener('scroll', scrollW);