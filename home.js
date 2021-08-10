const panoDiv = document.querySelector('.pano_image');

var lookAtPositions = [
  new THREE.Vector3(5000.00, 58.23, 25.21)
];

const panorama = new PANOLENS.ImagePanorama( 'home.jpg' );
panorama.addEventListener( 'enter-fade-start', function(){
  viewer.tweenControlCenter( lookAtPositions[0], 0 );
} );


const viewer = new PANOLENS.Viewer({
	container: panoDiv,
	controlBar: true,             // Vsibility of bottom control bar
	autoHideControlBar: false,        // Auto hide control bar
    autoHideInfospot: false,            // Auto hide infospots
    horizontalView: false,            // Allow only horizontal camera control
    cameraFov: 70,                // Camera field of view in degree
    enableReticle: false,            // Enable reticle for mouseless interaction
    dwellTime: 1500,            // Dwell time for reticle selection in millisecond
    autoReticleSelect: true,        // Auto select a clickable target after dwellTime
    viewIndicator: false,            // Adds an angle view indicator in upper left corner
    indicatorSize: 30,            // Size of View Indicator
    output: 'console' 
});

viewer.add(panorama);