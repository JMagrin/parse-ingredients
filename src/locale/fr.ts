import {Locale} from '../types/general';
import {defineLocale} from '../locales';

const locale: Locale = {
  units: {
    cup: ['coupes', 'coupe', 'cp.', 'cp', 'cps', 'cps.', 'c.', 'c'],
    gallon: ['gallons', 'gallon', 'gal.', 'gal'],
    ounce: ['onces', 'once', 'oz.', 'oz', 'oc.', 'oc'],
    pint: ['pintes', 'pinte', 'pt.', 'pt'],
    pound: ['pounds', 'pound', 'lbs.', 'lbs', 'lb.', 'lb'],
    quart: ['quarts', 'quart', 'qts.', 'qts', 'qt.', 'qt'],
    tablespoon: [
      'cuilleres a soupe',
      'cuillere a soupe',
      'c.a soupe',
      'c. a s.',
      'c. a soupe',
      'c a soupe',
      'cas.',
      'c a s',
      'c.a s.',
      'c.a.s',
    ],
    coffeespoon: [
      'cuilleres a cafe',
      'cuillere a cafe',
      'c a cafe',
      'c.a cafe',
      'c. a cafe',
      'c.a c.',
      'c. a c.',
      'c.a.c',
      'cac.',
      'c a c',
      'cac',
    ],
    teaspoon: [
      'cuilleres a the',
      'cuillere a the',
      'c a the',
      'c.a the',
      'c. a the',
      'c.a t.',
      'c. a t.',
      'cat.',
      'c a t',
      'cat',
      'c.a.t',
    ],
    gram: ['grammes', 'gramme', 'gr.', 'gr', 'g.', 'g'],
    kilogram: ['kilogrammes', 'kilogramme', 'kilos', 'kilo', 'kg.', 'kg'],
    liter: ['litres', 'litre', 'lit.', 'l.', 'l', 'L', 'L.'],
    centiliter: ['centilitres', 'centilitre', 'cl', 'cl.'],
    milligram: ['milligrammes', 'milligramme', 'mlg.', 'mlg', 'mg.', 'mg'],
    milliliter: ['millilitres', 'millilitre', 'mlt', 'ml.', 'ml'],
    package: ['paquet', 'paquets'],
    stick: ['baton', 'batons'],
    piece: ['morceau', 'morceaux'],
    pinch: ['pincee', 'pincees', 'pince'],
    clove: ['gousse', 'gousses'],
    slice: ['tranche', 'tranches'],
    can: ['conserve', 'conserves'],
    box: ['boite', 'boites'],
    bag: ['sac', 'sacs'],
    leaf: ['feuille', 'feuilles'],
    sprig: ['brin', 'brins'],
    unit: ['unité', 'unités'],
    packet: ['sachet', 'sachets'],
    dose: ['dose', 'doses'],
    drop: ['goutte', 'gouttes'],
    cube: ['carré', 'carrés'],
    dosingcup: ['gobelet doseur', 'gobelets doseur'],
    small: ['petit'],
    medium: ['moyen'],
    large: ['grand'],
  },
  translations: {
    cup: ['coupe', 'coupes'],
    gallon: ['gallon', 'gallons'],
    ounce: ['once', 'onces'],
    pint: ['pinte', 'pintes'],
    pound: ['pound', 'pounds'],
    quart: ['quart', 'quarts'],
    tablespoon: ['cuillère à soupe', 'cuillères à soupe'],
    coffeespoon: ['cuillère à café', 'cuillères à cafés'],
    teaspoon: ['cuillère à thé', 'cuillères à thé'],
    gram: ['gramme', 'grammes'],
    kilogram: ['kilogramme', 'kilogrammes'],
    liter: ['littre', 'littres'],
    centiliter: ['centilitre', 'centilitres'],
    milligram: ['milligramme', 'milligrammes'],
    milliliter: ['millilitre', 'millilitres'],
    package: ['paquet', 'paquets'],
    stick: ['bâton', 'bâtons'],
    piece: ['morceau', 'morceaux'],
    pinch: ['pincée', 'pincées'],
    clove: ['gousse', 'gousses'],
    slice: ['tranche', 'tranches'],
    can: ['conserve', 'conserves'],
    box: ['boite', 'boites'],
    bag: ['sac', 'sacs'],
    leaf: ['feuille', 'feuilles'],
    sprig: ['brin', 'brins'],
    unit: ['unité', 'unités'],
    packet: ['sachet', 'sachets'],
    dose: ['dose', 'doses'],
    drop: ['goutte', 'gouttes'],
    cube: ['carré', 'carrés'],
    dosingcup: ['gobelet doseur', 'gobelets doseur'],
    small: ['petit', 'petits'],
    medium: ['moyen', 'moyens'],
    large: ['grand', 'grands'],
  },
  symbols: {
    cup: 'c',
    gallon: 'gal',
    ounce: 'oz',
    pint: 'pt',
    pound: 'lb',
    quart: 'qt',
    tablespoon: 'c. à s.',
    coffeespoon: 'c. à c.',
    teaspoon: 'c. à t.',
    gram: 'g',
    kilogram: 'kg',
    liter: 'lt',
    centiliter: 'cl',
    milligram: 'mg',
    milliliter: 'ml',
    package: '',
    stick: '',
    piece: '',
    pinch: '',
    clove: '',
    slice: '',
    can: '',
    box: '',
    bag: '',
    leaf: '',
    sprig: '',
    unit: '',
    packet: '',
    dose: '',
    drop: '',
    cube: '',
    dosingcup: '',
    small: '',
    medium: '',
    large: '',
  },
  prepositions: ['a', 'ou'],
  articles: [
    /^(un) \w+/i,
    /^(une) \w+/i,
    /^(de) \w+/i,
    /^(des) \w+/i,
    /^(d') ?\w+/i,
  ],
};

export default defineLocale('fr', locale);
