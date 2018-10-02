var myLatLng = {lat:25.047923,lng:121.516954};
    map = new google.maps.Map(document.getElementById('map'), {
        zoom: 14,
        center: myLatLng,});
function initialize(){
  var myLatLng = {lat:25.047923,lng:121.516954};
    map = new google.maps.Map(document.getElementById('map'), {
        zoom: 14,
        center: myLatLng,});
}



function toggle(value) {
  //googleLayer.setVisible(!googleLayer.getVisible());
  //osmLayer.setVisible(!osmLayer.getVisible());
  initialize();
const wmsMapType = new google.maps.ImageMapType({
    maxZoom: 18,
    minZoom: 7,
    name: "EMAP",
    // 每個磚格設定為 256 X 256
    tileSize: new google.maps.Size(256, 256),
    isPng: true,
    getTileUrl: function(coord, zoom) {
      return `http://gis.sinica.edu.tw/taipei/file-exists.php?img=Taipei_1895-png-${zoom}-${coord.x}-${coord.y}`;
    }
  });
  map.overlayMapTypes.insertAt(0, wmsMapType);
};



function toggle2(value) {
  //googleLayer.setVisible(!googleLayer.getVisible());
  //osmLayer.setVisible(!osmLayer.getVisible());
initialize();
const wmsMapType = new google.maps.ImageMapType({
    maxZoom: 18,
    minZoom: 7,
    name: "EMAP",
    // 每個磚格設定為 256 X 256
    tileSize: new google.maps.Size(256, 256),
    isPng: true,
    getTileUrl: function(coord, zoom) {
      return `http://gis.sinica.edu.tw/taipei/file-exists.php?img=Taipei_1903-png-${zoom}-${coord.x}-${coord.y}`;
    }
  });
  map.overlayMapTypes.insertAt(0, wmsMapType);
};


function toggle3(value) {
  //googleLayer.setVisible(!googleLayer.getVisible());
  //osmLayer.setVisible(!osmLayer.getVisible());
initialize();
const wmsMapType = new google.maps.ImageMapType({
    maxZoom: 18,
    minZoom: 7,
    name: "EMAP",
    // 每個磚格設定為 256 X 256
    tileSize: new google.maps.Size(256, 256),
    isPng: true,
    getTileUrl: function(coord, zoom) {
      return `http://gis.sinica.edu.tw/taipei/file-exists.php?img=Taipei_1907-png-${zoom}-${coord.x}-${coord.y}`;
    }
  });
  map.overlayMapTypes.insertAt(0, wmsMapType);
};

function toggle4(value) {
  //googleLayer.setVisible(!googleLayer.getVisible());
  //osmLayer.setVisible(!osmLayer.getVisible());
initialize();
const wmsMapType = new google.maps.ImageMapType({
    maxZoom: 18,
    minZoom: 7,
    name: "EMAP",
    // 每個磚格設定為 256 X 256
    tileSize: new google.maps.Size(256, 256),
    isPng: true,
    getTileUrl: function(coord, zoom) {
      return `http://gis.sinica.edu.tw/taipei/file-exists.php?img=Taipei_1910-png-${zoom}-${coord.x}-${coord.y}`;
    }
  });
  map.overlayMapTypes.insertAt(0, wmsMapType);
};


function toggle5(value) {
  //googleLayer.setVisible(!googleLayer.getVisible());
  //osmLayer.setVisible(!osmLayer.getVisible());
initialize();
const wmsMapType = new google.maps.ImageMapType({
    maxZoom: 18,
    minZoom: 7,
    name: "EMAP",
    // 每個磚格設定為 256 X 256
    tileSize: new google.maps.Size(256, 256),
    isPng: true,
    getTileUrl: function(coord, zoom) {
      return `http://gis.sinica.edu.tw/taipei/file-exists.php?img=Taipei_1911-png-${zoom}-${coord.x}-${coord.y}`;
    }
  });
  map.overlayMapTypes.insertAt(0, wmsMapType);
};


function toggle6(value) {
  //googleLayer.setVisible(!googleLayer.getVisible());
  //osmLayer.setVisible(!osmLayer.getVisible());
initialize();
const wmsMapType = new google.maps.ImageMapType({
    maxZoom: 18,
    minZoom: 7,
    name: "EMAP",
    // 每個磚格設定為 256 X 256
    tileSize: new google.maps.Size(256, 256),
    isPng: true,
    getTileUrl: function(coord, zoom) {
      return `http://gis.sinica.edu.tw/taipei/file-exists.php?img=Taipei_1903-png-${zoom}-${coord.x}-${coord.y}`;
    }
  });
  map.overlayMapTypes.insertAt(0, wmsMapType);
};


function toggle7(value) {
  //googleLayer.setVisible(!googleLayer.getVisible());
  //osmLayer.setVisible(!osmLayer.getVisible());
initialize();
const wmsMapType = new google.maps.ImageMapType({
    maxZoom: 18,
    minZoom: 7,
    name: "EMAP",
    // 每個磚格設定為 256 X 256
    tileSize: new google.maps.Size(256, 256),
    isPng: true,
    getTileUrl: function(coord, zoom) {
      return `http://gis.sinica.edu.tw/taipei/file-exists.php?img=Taipei_1914-png-${zoom}-${coord.x}-${coord.y}`;
    }
  });
  map.overlayMapTypes.insertAt(0, wmsMapType);
};


function toggle8(value) {
  //googleLayer.setVisible(!googleLayer.getVisible());
  //osmLayer.setVisible(!osmLayer.getVisible());
initialize();
const wmsMapType = new google.maps.ImageMapType({
    maxZoom: 18,
    minZoom: 7,
    name: "EMAP",
    // 每個磚格設定為 256 X 256
    tileSize: new google.maps.Size(256, 256),
    isPng: true,
    getTileUrl: function(coord, zoom) {
      return `http://gis.sinica.edu.tw/taipei/file-exists.php?img=Taipei_1916-png-${zoom}-${coord.x}-${coord.y}`;
    }
  });
  map.overlayMapTypes.insertAt(0, wmsMapType);
};


function toggle9(value) {
  //googleLayer.setVisible(!googleLayer.getVisible());
  //osmLayer.setVisible(!osmLayer.getVisible());
initialize();
const wmsMapType = new google.maps.ImageMapType({
    maxZoom: 18,
    minZoom: 7,
    name: "EMAP",
    // 每個磚格設定為 256 X 256
    tileSize: new google.maps.Size(256, 256),
    isPng: true,
    getTileUrl: function(coord, zoom) {
      return `http://gis.sinica.edu.tw/taipei/file-exists.php?img=Taipei_10K_1919-png-${zoom}-${coord.x}-${coord.y}`;
    }
  });
  map.overlayMapTypes.insertAt(0, wmsMapType);
};

