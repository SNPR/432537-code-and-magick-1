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

var FIREBALL_COLORS = [
  '#ee4830',
  '#30a8ee',
  '#5ce6c0',
  '#e848d5',
  '#e6e848'
];

var ESC_KEYCODE = 27;
var ENTER_KEYCODE = 13;

var setup = document.querySelector('.setup');
var setupOpen = document.querySelector('.setup-open');
var setupClose = setup.querySelector('.setup-close');
var setupWizard = document.querySelector('.setup-wizard');
var wizardCoat = setupWizard.querySelector('.wizard-coat');
var wizardEyes = setupWizard.querySelector('.wizard-eyes');
var fireballWrap = setup.querySelector('.setup-fireball-wrap');
var fireball = setup.querySelector('.setup-fireball');
var fireballColorInput = fireballWrap.querySelector('INPUT');

var onPopupEscPress = function (evt) {
  if (evt.keyCode === ESC_KEYCODE && evt.target.tagName !== 'INPUT') {
    closePopup();
  }
};

var openPopup = function () {
  setup.classList.remove('hidden');
  document.addEventListener('keydown', onPopupEscPress);
};

var closePopup = function () {
  setup.classList.add('hidden');
  document.removeEventListener('keydown', onPopupEscPress);
  setup.removeEventListener('click', onWizardClick);
};

setupOpen.addEventListener('click', function () {
  openPopup();
});

setupOpen.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    openPopup();
  }
});

setupClose.addEventListener('click', function () {
  closePopup();
});

setupClose.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    closePopup();
  }
});

var onWizardClick = function (evt) {
  if (evt.target === wizardCoat) {
    wizardCoat.style.fill = shuffleArray(COAT_COLORS)[0];
  } else if (evt.target === wizardEyes) {
    wizardEyes.style.fill = shuffleArray(EYE_COLORS)[0];
  } else if (evt.target === fireball) {
    var randomColor = shuffleArray(FIREBALL_COLORS)[0];
    fireballWrap.style.backgroundColor = randomColor;
    fireballColorInput.value = randomColor;
  }
};

setup.addEventListener('click', onWizardClick);

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
