import presentAndPast from './units/presentAndPast';
import presentPerfectAndPast from './units/presentPerfectAndPast';
import future from './units/future';
import modals from './units/modals';
import ifAndWish from './units/ifAndWish';
import passive from './units/passive';
import reportedSpeech from './units/reportedSpeech';
import questionsUnit from './units/questionsUnit';
import ingAndTo from './units/ingAndTo';
import articlesAndNouns from './units/articlesAndNouns';
import pronounsAndDeterminers from './units/pronounsAndDeterminers';
import relativeClauses from './units/relativeClauses';
import adjectivesAndAdverbs from './units/adjectivesAndAdverbs';
import conjunctionsAndPrepositions from './units/conjunctionsAndPrepositions';
import prepositions from './units/prepositions';
import phrasalVerbs from './units/phrasalVerbs';

const ALL_UNITS = [
  ...(presentAndPast || []),
  ...(presentPerfectAndPast || []),
  ...(future || []),
  ...(modals || []),
  ...(ifAndWish || []),
  ...(passive || []),
  ...(reportedSpeech || []),
  ...(questionsUnit || []),
  ...(ingAndTo || []),
  ...(articlesAndNouns || []),
  ...(pronounsAndDeterminers || []),
  ...(relativeClauses || []),
  ...(adjectivesAndAdverbs || []),
  ...(conjunctionsAndPrepositions || []),
  ...(prepositions || []),
  ...(phrasalVerbs || []),
].sort((a, b) => a.id - b.id);

export function getAllUnits() {
  return ALL_UNITS;
}

export function getUnitById(id) {
  return ALL_UNITS.find(u => u.id === id);
}

export default ALL_UNITS;
