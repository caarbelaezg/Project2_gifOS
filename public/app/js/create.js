/*Function that opens camera*/
function getStreamAndRecord() {
    navigator.mediaDevices.getUserMedia({ audio: false, video: { width: 835, height: 398 } }).then(function(stream) {
        video.srcObject = stream;
        video.play()
    })
    hideInstructions()
}


/* -----------The event listener that calls the previous function */
const startBtn = document.getElementById('btn-start')
startBtn.addEventListener('click', getStreamAndRecord)



/*-----------------change stiles on click event when start recording ----------------*/

const startRecording = document.getElementById('r-elements')

startRecording.addEventListener('click', () => {
    changeColorCapture()
})