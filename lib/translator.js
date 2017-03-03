'use strict';

module.exports = (function() {
  function getMinutesBetweenTimestamps(future, now) {
    const futureDate = new Date(future);
    const nowDate = new Date(now);

    var mins = Math.abs(Math.floor(( futureDate - nowDate) / 1000 / 60));
    if (mins == 0) {
        return "DUE";
    } else {
        return mins;
    }
  }

  return {
    translateBusStopDepartureModel: function(model) {
      const response = {
        route: model.MonitoredVehicleJourney_PublishedLineName,
        inCongestion: model.MonitoredVehicleJourney_InCongestion && model.MonitoredVehicleJourney_InCongestion === "true",
        destination: model.MonitoredVehicleJourney_DestinationName,
        expectedTime: getMinutesBetweenTimestamps(model.MonitoredCall_ExpectedDepartureTime, model.Timestamp),
        duration: model.MonitoredVehicleJourney_DirectionRef,
        notes: model.LineNote
      };

      return response;
    },

    translateBusStopsModel: function(model) {
      const response = {
        route: model.Route,
        stopNumber: model.StopNumber,
        address: model.Address,
        location: model.Location,
        latitude: model.Latitude,
        longitude: model.Longitude
      };

      return response;
    }
  }
}());
