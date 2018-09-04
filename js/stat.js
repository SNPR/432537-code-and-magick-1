'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 110;
var CLOUD_Y = 20;
var GAP = 10;
var TEXT_Y_GAP = 235;
var TEXT_X_GAP = 90;
var FONT_GAP = 5;
var BAR_WIDTH = 40;
var BAR_HEIGHT = 150;

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
    var maxTime = Math.max.apply({}, times);
    var proportion = maxTime / BAR_HEIGHT;
    ctx.fillText(names[i], CLOUD_X + GAP * 2 + TEXT_X_GAP * i, GAP * 2 + TEXT_Y_GAP);
    ctx.fillText(Math.round(times[i]), CLOUD_X + GAP * 2 + TEXT_X_GAP * i, TEXT_Y_GAP - FONT_GAP - (times[i] / proportion));
    ctx.fillStyle = 'rgb(255, ' + Math.random() * 255 + ', 100)';
    ctx.fillRect(CLOUD_X + GAP * 2 + TEXT_X_GAP * i, TEXT_Y_GAP, BAR_WIDTH, -(times[i] / proportion));
    ctx.font = '16px PT Mono';
    ctx.fillStyle = '#000';
  }
};

