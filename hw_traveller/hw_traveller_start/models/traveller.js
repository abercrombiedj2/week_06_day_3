const Traveller = function(journeys) {
  this.journeys = journeys;
};

Traveller.prototype.getJourneyStartLocations = function() {
  const start = this.journeys.map((journey) => {
    return journey.startLocation;
  });
  return start;
};

Traveller.prototype.getJourneyEndLocations = function () {
  const end = this.journeys.map((journey) => {
    return journey.endLocation;
  });
  return end;
};

Traveller.prototype.getJourneysByTransport = function (transport) {
  const filterByTransport = this.journeys.filter((journey) => {
    return journey.transport === transport;
  });
  return filterByTransport;
};

Traveller.prototype.getJourneysByMinDistance = function (minDistance) {
  const filterByDistance = this.journeys.filter((journey) => {
    return journey.distance >= minDistance;
  });
  return filterByDistance;
};

Traveller.prototype.calculateTotalDistanceTravelled = function () {
  return this.journeys.reduce((total, journey) => {
    return total += journey.distance;
  }, 0);
};

Traveller.prototype.getUniqueModesOfTransport = function () {
  const transportList = this.journeys.map((journey) => {
    return journey.transport;
  });
  return Array.from(new Set (transportList));
};


module.exports = Traveller;
