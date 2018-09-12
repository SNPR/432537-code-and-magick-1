'use strict';

var WIZARDS_NAMES = [
  'Иван',
  'Хуан Себастьян',
  'Мария',
  'Кристоф',
  'Виктор',
  'Юлия',
  'Люпита',
  'Вашингтон'
];

var WIZARD_SURNAMES = [
  'да Марья',
  'Верон',
  'Мирабелла',
  'Вальц',
  'Онопко',
  'Топольницкая',
  'Нионго',
  'Ирвинг'
];

var COAT_COLORS = [
  'rgb(101, 137, 164)',
  'rgb(241, 43, 107)',
  'rgb(146, 100, 161)',
  'rgb(56, 159, 117)',
  'rgb(215, 210, 55)',
  'rgb(0, 0, 0)'
];

var EYE_COLORS = [
  'black',
  'red',
  'blue',
  'yellow',
  'green'
];


var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

var shuffleArray = function (arr) {
  var arrCopy = arr.slice();
  var result = [];
  while (arrCopy.length) {
    var randomArrayIndex = Math.floor(Math.random() * arrCopy.length);
    result.push(arrCopy[randomArrayIndex]);
    arrCopy.splice(randomArrayIndex, 1);
  }
  return result;
};

var makeWizards = function (names, surnames, coatColors, eyeColors, wizardsAmount) {
  var wizards = [];

  names = shuffleArray(names);
  surnames = shuffleArray(surnames);
  coatColors = shuffleArray(coatColors);
  eyeColors = shuffleArray(eyeColors);

  for (var i = 0; i < wizardsAmount; i++) {
    wizards.push({
      name: names[i] + ' ' + surnames[i],
      coatColor: coatColors[i],
      eyesColor: eyeColors[i]
    });
  }
  return wizards;
};

var wizards = makeWizards(WIZARDS_NAMES, WIZARD_SURNAMES, COAT_COLORS, EYE_COLORS, 4);
var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return wizardElement;
};

var fragment = document.createDocumentFragment();

for (var i = 0; i < wizards.length; i++) {
  fragment.appendChild(renderWizard(wizards[i]));
}

similarListElement.appendChild(fragment);

document.querySelector('.setup-similar').classList.remove('hidden');
