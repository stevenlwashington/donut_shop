'use strict';

var DonutShop = function(location, minCustPerHr, maxCustPerHr, avgDonutsPerCust){
  this.location = location;
  this.minCustPerHr = minCustPerHr;
  this.maxCustPerHr = maxCustPerHr;
  this.avgDonutsPerCust = avgDonutsPerCust;
  this.hoursOp = 12;
  this.hourlyDonuts = [];
  this.dailyDonuts = 0;
}

DonutShop.prototype.generateRandom = function(){
  for (var i = 0; i < this.hoursOp; i++){
    this.hourlyDonuts[i] = Math.floor((Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust) * this.avgDonutsPerCust;
  }
}

DonutShop.prototype.getCustPerHr = function(){
  return Math.floor(Math.random() * (this.maxCustPerHr - this. minCustPerHr + 1)) + this.minCustPerHr;
}

DonutShop.prototype.getDonutPerHr = function(){
  return this.avgDonutsPerCust * this.getCustPerHr();
}

DonutShop.prototype.getDonutsByTheHr = function(){
  for(var i = 0; i < 12; i++){
    this.hourlyDonuts[i] = this.getDonutPerHr();
  }
}

DonutShop.prototype.hourlyTotal = function (){
  for(var i = 0; i < this.hourlyDonuts.length; i++){
    this.dailyDonuts += this.hourlyDonuts[i];
  }
}

DonutShop.prototype.render = function(){
  downtown.getDonutsByTheHr();
  capitolHill.getDonutsByTheHr();
  southLakeUnion.getDonutsByTheHr();
  wedgewood.getDonutsByTheHr();
  ballard.getDonutsByTheHr();
//append name
      var table = document.getElementById("donut-table");
      var tr = document.createElement("tr");
      tr.innerHTML = this.location;
      table.appendChild(tr);
      //append hrs
      for(var i = 0; i < this.hourlyDonuts.length; i++){
        var td = document.createElement("td");
        td.innerHTML = this.hourlyDonuts[i];
        tr.appendChild(td);
        this.dailyDonuts += this.hourlyDonuts[i];
      }

      //append total
      var total = document.createElement("td");
      total.innerHTML = this.dailyDonuts;
      tr.appendChild(total);
  }

var downtown = new DonutShop("Downtown", 8, 43, 4.50);
var capitolHill = new DonutShop("Capitol Hill", 4, 37, 2);
var southLakeUnion = new DonutShop("South Lake Union", 9, 23, 6.33);
var wedgewood = new DonutShop("Wedgewood", 2, 28, 1.25);
var ballard = new DonutShop("Ballard", 8, 58, 3.75);

downtown.render();
capitolHill.render();
southLakeUnion.render();
wedgewood.render();
ballard.render();





