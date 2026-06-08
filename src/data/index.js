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

// Normalize study cards that use {front, back} shorthand
function normalizeStudyCard(card) {
  if (card.front !== undefined || card.back !== undefined) {
    return { title: card.front ?? '', content: card.back ?? '', examples: [] };
  }
  return card;
}

// Normalize questions to the schema expected by ExerciseCard
function normalizeQuestion(q, idx) {
  const base = {
    id: q.id ?? idx + 1,
    type: q.type,
    question: q.question ?? q.prompt ?? '',
    answer: q.answer ?? '',
    hint: q.hint ?? '',
    explanation: q.explanation ?? '',
  };
  if (q.type === 'drag_order') {
    base.options = q.options ?? q.items ?? [];
  } else if (q.type === 'true_false') {
    base.options = (q.options && q.options.length) ? q.options : ['True', 'False'];
  } else if (q.type === 'error_correction' && (!q.options || q.options.length === 0)) {
    // No options provided → render as fill_blank
    base.type = 'fill_blank';
    base.options = [];
  } else {
    base.options = q.options ?? [];
  }
  return base;
}

function normalizeUnit(unit) {
  return {
    ...unit,
    study_cards: (unit.study_cards || []).map(normalizeStudyCard),
    questions: (unit.questions || []).map(normalizeQuestion),
  };
}

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
].sort((a, b) => a.id - b.id).map(normalizeUnit);

export function getAllUnits() {
  return ALL_UNITS;
}

export function getUnitById(id) {
  return ALL_UNITS.find(u => u.id === id);
}

export default ALL_UNITS;
