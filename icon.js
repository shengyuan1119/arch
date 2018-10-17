var myLatLng = {lat:25.047923,lng:121.516954};
    map = new google.maps.Map(document.getElementById('map'), {
        zoom: 15,
        maxZoom: 20,
        minZoom: 13,
        center: myLatLng,
        //gestureHandling: 'greedy',
      });
function initialize(){
  var myLatLng = {lat:25.047923,lng:121.516954};
    map = new google.maps.Map(document.getElementById('map'), {
    zoom: 15,
    maxZoom: 20,
    minZoom: 13,
        center: myLatLng,
  //scrollwheel:false,
  //gestureHandling:'greedy',
      });
}



function toggle(value) {
  //googleLayer.setVisible(!googleLayer.getVisible());
  //osmLayer.setVisible(!osmLayer.getVisible());
  initialize();
const wmsMapType = new google.maps.ImageMapType({
    //maxZoom: 11,
   // minZoom: 10,
    name: "EMAP",
    // 每個磚格設定為 256 X 256
    tileSize: new google.maps.Size(256, 256),
    isPng: true,
    getTileUrl: function(coord, zoom) {
      return `http://gis.sinica.edu.tw/taipei/file-exists.php?img=Taipei_1895-png-${zoom}-${coord.x}-${coord.y}`;
    }
  });
  map.overlayMapTypes.insertAt(0, wmsMapType);
  map.overlayMapTypes.getAt(0).setOpacity(0.6);
};



function toggle2(value) {
  //googleLayer.setVisible(!googleLayer.getVisible());
  //osmLayer.setVisible(!osmLayer.getVisible());
initialize();
const wmsMapType = new google.maps.ImageMapType({
   // maxZoom: 11,
    //minZoom: 10,
    name: "EMAP",
    // 每個磚格設定為 256 X 256
    tileSize: new google.maps.Size(256, 256),
    isPng: true,
    getTileUrl: function(coord, zoom) {
      return `http://gis.sinica.edu.tw/taipei/file-exists.php?img=Taipei_1903-png-${zoom}-${coord.x}-${coord.y}`;
    }
  });
  map.overlayMapTypes.insertAt(0, wmsMapType);
  map.overlayMapTypes.getAt(0).setOpacity(0.6);
};


function toggle3(value) {
  //googleLayer.setVisible(!googleLayer.getVisible());
  //osmLayer.setVisible(!osmLayer.getVisible());
initialize();
const wmsMapType = new google.maps.ImageMapType({
   // maxZoom: 15,
   // minZoom: 10,
    name: "EMAP",
    // 每個磚格設定為 256 X 256
    tileSize: new google.maps.Size(256, 256),
    isPng: true,
    getTileUrl: function(coord, zoom) {
      return `http://gis.sinica.edu.tw/taipei/file-exists.php?img=Taipei_1907-png-${zoom}-${coord.x}-${coord.y}`;
    }
  });
  map.overlayMapTypes.insertAt(0, wmsMapType);
  map.overlayMapTypes.getAt(0).setOpacity(0.6);
};

function toggle4(value) {
  //googleLayer.setVisible(!googleLayer.getVisible());
  //osmLayer.setVisible(!osmLayer.getVisible());
initialize();
const wmsMapType = new google.maps.ImageMapType({
   // maxZoom: 15,
   // minZoom: 10,
    name: "EMAP",
    // 每個磚格設定為 256 X 256
    tileSize: new google.maps.Size(256, 256),
    isPng: true,
    getTileUrl: function(coord, zoom) {
      return `http://gis.sinica.edu.tw/taipei/file-exists.php?img=Taipei_1910-png-${zoom}-${coord.x}-${coord.y}`;
    }
  });
  map.overlayMapTypes.insertAt(0, wmsMapType);
  map.overlayMapTypes.getAt(0).setOpacity(0.6);
};


function toggle5(value) {
  //googleLayer.setVisible(!googleLayer.getVisible());
  //osmLayer.setVisible(!osmLayer.getVisible());
initialize();
const wmsMapType = new google.maps.ImageMapType({
   // maxZoom: 15,
   // minZoom: 10,
    name: "EMAP",
    // 每個磚格設定為 256 X 256
    tileSize: new google.maps.Size(256, 256),
    isPng: true,
    getTileUrl: function(coord, zoom) {
      return `http://gis.sinica.edu.tw/taipei/file-exists.php?img=Taipei_1911-png-${zoom}-${coord.x}-${coord.y}`;
    }
  });
  map.overlayMapTypes.insertAt(0, wmsMapType);
  map.overlayMapTypes.getAt(0).setOpacity(0.6);
};


function toggle6(value) {
  //googleLayer.setVisible(!googleLayer.getVisible());
  //osmLayer.setVisible(!osmLayer.getVisible());
initialize();
const wmsMapType = new google.maps.ImageMapType({
    //maxZoom: 15,
    //minZoom: 10,
    name: "EMAP",
    // 每個磚格設定為 256 X 256
    tileSize: new google.maps.Size(256, 256),
    isPng: true,
    getTileUrl: function(coord, zoom) {
      return `http://gis.sinica.edu.tw/taipei/file-exists.php?img=Taipei_1903-png-${zoom}-${coord.x}-${coord.y}`;
    }
  });
  map.overlayMapTypes.insertAt(0, wmsMapType);
  map.overlayMapTypes.getAt(0).setOpacity(0.6);
};


function toggle7(value) {
  //googleLayer.setVisible(!googleLayer.getVisible());
  //osmLayer.setVisible(!osmLayer.getVisible());
initialize();
const wmsMapType = new google.maps.ImageMapType({
    //maxZoom: 15,
   // minZoom: 10,
    name: "EMAP",
    // 每個磚格設定為 256 X 256
    tileSize: new google.maps.Size(256, 256),
    isPng: true,
    getTileUrl: function(coord, zoom) {
      return `http://gis.sinica.edu.tw/taipei/file-exists.php?img=Taipei_1914-png-${zoom}-${coord.x}-${coord.y}`;
    }
  });
  map.overlayMapTypes.insertAt(0, wmsMapType);
  map.overlayMapTypes.getAt(0).setOpacity(0.6);
};


function toggle8(value) {
  //googleLayer.setVisible(!googleLayer.getVisible());
  //osmLayer.setVisible(!osmLayer.getVisible());
initialize();
const wmsMapType = new google.maps.ImageMapType({
   // maxZoom: 15,
   // minZoom: 10,
    name: "EMAP",
    // 每個磚格設定為 256 X 256
    tileSize: new google.maps.Size(256, 256),
    isPng: true,
    getTileUrl: function(coord, zoom) {
      return `http://gis.sinica.edu.tw/taipei/file-exists.php?img=Taipei_1916-png-${zoom}-${coord.x}-${coord.y}`;
    }

  });
  map.overlayMapTypes.insertAt(0, wmsMapType);
  map.overlayMapTypes.getAt(0).setOpacity(0.6);
};


function toggle9(value) {
  //googleLayer.setVisible(!googleLayer.getVisible());
  //osmLayer.setVisible(!osmLayer.getVisible());
initialize();
const wmsMapType = new google.maps.ImageMapType({
   // maxZoom: 15,
   // minZoom: 10,
    name: "EMAP",

            // 每個磚格設定為 256 X 256
    tileSize: new google.maps.Size(256, 256),
    isPng: true,
    getTileUrl: function(coord, zoom) {
      return `http://gis.sinica.edu.tw/taipei/file-exists.php?img=Taipei_10K_1919-png-${zoom}-${coord.x}-${coord.y}`;
    }
  });
  
  map.overlayMapTypes.insertAt(0, wmsMapType);
  map.overlayMapTypes.getAt(0).setOpacity(0.6);
};

function changeOpacity(element) {
  var value = element.value /100;
 // var valueElement = document.getElementById('opacityValue');
  opacityValue.innerHTML = Math.floor(100-value*100)/1;
  //document.write(value.toFixed(3));
  //value = value * 100;
 // value.toFixed(5);
  //opacityValue.innerHTML = Math.floor(value*1)/1;

  map.overlayMapTypes.getAt(0).setOpacity(value);
}