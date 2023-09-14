const imageElement1 = document.getElementById('myImage1');
const buttonElement1 = document.getElementById('changeImageBtn1');
buttonElement1.addEventListener('click', function() 
{
imageElement1.src = 'AirbusA320-200.png';
buttonElement1.textContent = 'Image Changed!';


});

const imageElement2 = document.getElementById('myImage2');
const buttonElement2 = document.getElementById('changeImageBtn2');
buttonElement2.addEventListener('click', function() 
{
imageElement2.src = 'AirbusA321CEO.png';
buttonElement2.textContent = 'Image Changed!';


});

const imageElement3 = document.getElementById('myImage3');
const buttonElement3 = document.getElementById('changeImageBtn3');
buttonElement3.addEventListener('click', function() 
{
imageElement3.src = 'AirbusA330-300.png';
buttonElement3.textContent = 'Image Changed!';


});

const videoElement1 = document.getElementById('vid1');
const buttonElement4 = document.getElementById('changeVidBtn1');

buttonElement4.addEventListener('click', function() {
videoElement1.src = 'https://www.youtube.com/embed/-FNQV3tWalM?si=WO2tiDhVMEkhs0jP';
videoElement1.alt = 'A different video';
buttonElement4.textContent = 'Vid 1!';
});
const videoElement2 = document.getElementById('vid2');
const buttonElement5 = document.getElementById('changeVidBtn2');

buttonElement5.addEventListener('click', function() {
videoElement2.src = 'https://www.youtube.com/embed/4IjXNEsSWo4?si=xugy6S0nB8wONhyo';
videoElement2.alt = 'A different video';
buttonElement5.textContent = 'Vid 2!';
});
const videoElement3 = document.getElementById('vid3');
const buttonElement6 = document.getElementById('changeVidBtn3');

buttonElement6.addEventListener('click', function() {
videoElement3.src = 'https://www.youtube.com/embed/xSXurfM_0qk?si=Cyjmgmz21VTrWjWD';
videoElement3.alt = 'A different video';
buttonElement6.textContent = 'Vid 3';
});