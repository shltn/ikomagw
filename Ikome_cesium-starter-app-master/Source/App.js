var viewer = new Cesium.Viewer('cesiumContainer');

viewer.dataSources.add(Cesium.KmlDataSource.load('https://shltn.github.io/ikomagw/Ikome_cesium-starter-app-master/Source/civictechparty.kml'));

viewer.flyTo({destination : Cesium.Cartesian3.fromDegrees(135.698525,34.6918934,8000.0)});
