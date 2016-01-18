(function() {
    console.log("video streaming 1");

    var webrtc = new SimpleWebRTC({
        // the id/element dom element that will hold "our" video
        localVideoEl: 'localVideo',
        // the id/element dom element that will hold remote videos
        remoteVideosEl: 'remoteVideos',
        // immediately ask for camera access
        autoRequestMedia: true
    });

    webrtc.on('readyToCall', function() {
        // you can name it anything
        webrtc.joinRoom('test123');
    });

})();
