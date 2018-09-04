'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 110;
var CLOUD_Y = 20;
var GAP = 10;
var TEXT_Y_GAP = 230;
var TEXT_X_GAP = 90;
// var FONT_GAP = 15;
// var TEXT_WIDTH = 50;
// var BAR_HEIGHT = 20;

var renderCloud = function (x, y, width, height, color, ctx) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, width, height);
};

window.renderStatistics = function (ctx, names, times) {
  renderCloud(CLOUD_X, CLOUD_Y, CLOUD_WIDTH, CLOUD_HEIGHT, 'rgba(0, 0, 0, 0.7)', ctx);
  renderCloud(CLOUD_X - GAP, CLOUD_Y - GAP, CLOUD_WIDTH, CLOUD_HEIGHT, '#fff', ctx);

  ctx.font = '16px PT Mono';
  ctx.fillStyle = '#000';
  ctx.fillText('Ура, вы победили!', CLOUD_X + GAP, CLOUD_Y + GAP * 2);
  ctx.fillText('Список результатов:', CLOUD_X + GAP, CLOUD_Y + GAP * 4);
  for (var i = 0; i < names.length; i++) {
    ctx.fillText(names[i], CLOUD_X + GAP * 2 + TEXT_X_GAP * i, GAP * 2 + TEXT_Y_GAP);
  }

};

