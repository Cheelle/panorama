const panoDiv = document.querySelector('.pano_image');

var lookAtPositions = [
  new THREE.Vector3(5000.00, 58.23, 25.21)
];

const panorama = new PANOLENS.ImagePanorama( 'pano.jpg' );
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


// Info spot for laptop and creating google meet room

laptopSpot = new PANOLENS.Infospot( 1000, 'laptop.png' ); //src: https://pixexid.com/image/8p2bzdx-a-large-room
laptopSpot.addHoverText('Start A Meeting');
laptopSpot.addEventListener( 'click', function(){
	const y = window.outerHeight / 2 + window.screenY - ( 720 / 2);
	const x = window.outerWidth / 2 + window.screenX - ( 1080 / 2);
	window.open("http://meet.google.com/new", "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,top="+y+",left="+x+",width=1080,height=720");
} );
laptopSpot.position.set(4966.59, -721.96, 132.51);


// This is the infospot for feedback form

fileSpot = new PANOLENS.Infospot( 1000, 'folder.png' );
fileSpot.addHoverText('Feedback Form');
fileSpot.addEventListener( 'click', function(){
  const y = window.outerHeight / 2 + window.screenY - ( 720 / 2);
  const x = window.outerWidth / 2 + window.screenX - ( 1080 / 2);
  window.open("https://forms.gle/yvgaFPEqqFFZVE3CA", "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,top="+y+",left="+x+",width=1080,height=720");
} );
fileSpot.position.set(5000.00, -1720.60, -899.12);


//infospot for home button
homeSpot = new PANOLENS.Infospot(250, PANOLENS.DataImage.Arrow );
homeSpot.addHoverText('Home');
homeSpot.addEventListener( 'click', function(){
  window.location.replace("index.php");
} );
homeSpot.position.set(5000.00, 583.38, 3964.00);

//hide the initial calendar
document.querySelector('.cal').style.display = "none";

//infospot for calendar
calenSpot = new PANOLENS.Infospot(300);
calenSpot.addHoverText('Calendar');
calenSpot.addEventListener( 'click', cal_hide_show);
calenSpot.position.set(4158.04, 508.03, 5000.00);


//function for toggle hide/show calendar div
function cal_hide_show() {
  var x = document.querySelector('.cal');
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}


//infospot for bulletin board
boardSpot = new PANOLENS.Infospot( 300);
boardSpot.addHoverText('Bulletin Board');
boardSpot.addEventListener( 'click', function(){
  const y = window.outerHeight / 2 + window.screenY - ( 720 / 2);
  const x = window.outerWidth / 2 + window.screenX - ( 1080 / 2);
  window.open("https://jamboard.google.com/d/19zUtLi_7UbxYput3OH-cKG4_tmmwtI12hyTti69lBfo/edit?usp=sharing", "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,top="+y+",left="+x+",width=1080,height=720");
} );
boardSpot.position.set(1036.15, 501.28, 5000.00);

//infospot for bulletin board
outsideView = new PANOLENS.Infospot( 300);
outsideView.addHoverText('Outside View');
outsideView.addEventListener( 'click', function(){
  const y = window.outerHeight / 2 + window.screenY - ( 720 / 2);
  const x = window.outerWidth / 2 + window.screenX - ( 1080 / 2);
  window.open("https://goo.gl/maps/S4VaPZ3dufHPCjzD6", "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,top="+y+",left="+x+",width=1080,height=720");
} );
outsideView.position.set(1543.70, 498.62, -5000.00);





panorama.add(fileSpot);
panorama.add(laptopSpot);
panorama.add(homeSpot);
panorama.add(calenSpot);
panorama.add(boardSpot);
panorama.add(outsideView);


viewer.add(panorama);