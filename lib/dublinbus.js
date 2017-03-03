'use strict';

module.exports = (function() {
  const soap = require('soap');
  const inspect = require('util').inspect;
  const url = 'http://rtpi.dublinbus.ie/DublinBusRTPIService.asmx?WSDL';
  const translators = require('./translator.js');
  const initedPromise = new Promise(function(resolve, reject) {
    soap.createClient(url, function(err, client) {
      if (err) {
        reject(err);
      } else {
        resolve(client);
      }
    });
  });

  return {
    getRouteStops: function(route) {
      return new Promise(function(resolve, reject) {
        initedPromise.then(
          function(client) {
            const args = { 'route': route };
            client.GetStopDataByRoute(args, function(err, result) {
              if (err) {
                reject(err);
              } else if (!result.GetStopDataByRouteResult.diffgram) {
                reject('NODATA');
              } else {
                const stopsData = result.GetStopDataByRouteResult.diffgram.StopDataByRoute;
                stopsData.InboundStop = stopsData.InboundStop.map(translators.translateBusStopsModel);
                stopsData.OutboundStop = stopsData.OutboundStop.map(translators.translateBusStopsModel);
                resolve({
                  route: route,
                  stops: stopsData
                });
              }
            });
          },
          function(e) {
            console.error(inspect(e));
          }
        );
      });
    },
    getStopTimes: function(stopId) {
      return new Promise(function(resolve, reject) {
        initedPromise.then(
          function(client) {
            const args = { 'stopId': stopId, 'forceRefresh': '1' };
            client.GetRealTimeStopData(args, function(err, result) {
              if (err) {
                reject(err);
              } else if (!result.GetRealTimeStopDataResult.diffgram) {
                resolve({
                  stopId: stopId,
                  departures: []
                })
              } else {
                let stopData = result.GetRealTimeStopDataResult.diffgram.DocumentElement.StopData;
                stopData = stopData.length ? stopData : [ stopData ];

                const response = {
                  stopId: stopId,
                  departures: stopData.map(translators.translateBusStopDepartureModel)
                };
                resolve(response);
              }
            });
          },
          function(e) {
            console.error(inspect(e));
          }
        );
      });
    }
  };

}());
