function getConnectedDevices(type, callback) {
  navigator.mediaDevices.enumerateDevices()
      .then(devices => {
          const filtered = devices.filter(device => device.kind === type);
          callback(filtered);
      });
}

getConnectedDevices('videoinput', cameras => console.log('Cameras found', cameras));


cameraW = 1280;
caermaH = 720;
cameraFR = 25; 

var cameraOptions = {
    audio: false,
    video:{
      
    }
}

// navigator.mediaDevices.enumerateDevices()
// .then(function(devices) {
//   var counter = 0;
//   var deviceIds = [];var deviceNames = [];

//   devices.forEach(function(device){
//     console.log(device.kind + ": "+ device.label + " id = "+ device.deviceId);
    
//     if(device.kind == "videoinput"){
//       console.log(device);
//       deviceIds[counter] = (device.deviceId);
//       deviceNames[counter] = (device.label);
//       counter++;
//     }
  
//   })
// });