'use strict';

const createCandidate = function (name, skills) {
  const addRequire = function (requirement) {
    skills.push(requirement);
  };

  const conductInterview = function (requirements) {
    for (const requirement of requirements) {
      if (!skills.includes(requirement)) {
        return false;
      }
    }
    return true;
  };

  return {
    name,
    skills,
    addRequire,
    conductInterview
  };
};

const scheduleInterviews = function (candidates, requirements, ratingFunction) {
  return candidates.sort(function (a, b) {
    return ratingFunction(b, requirements) - ratingFunction(a, requirements)
  });
};

const rateCandidates = function (candidate, requirements) {
  let matchingRequirements = 0;
  for (const requirement of requirements) {
    if (candidate.skills.includes(requirement)) {
      matchingRequirements++;
    }
  }
  const percentageMatch = (matchingRequirements / requirements.length) * 100
  return Math.round(percentageMatch);
};

const candidates = [
  createCandidate('Іван', ['Java', 'Spanish', 'CSS']),
  createCandidate('Марія', ['Java Script', 'English', 'HTML']),
  createCandidate('Софія', ['Java Script', 'English', 'React'])
];

candidates[0].addRequire('Командна робота');
candidates[1].addRequire('Комунікабельність');
candidates[2].addRequire('Стресостійкість');

const interviewRequirements = ['Java Script', 'English', 'React', 'Стресостійкість'];

const sortCandidates = scheduleInterviews(candidates, interviewRequirements, rateCandidates);

console.log('Відсортовані кандидати за оцінкою:');
for (let i = 0; i < sortCandidates.length; i++) {
  const candidate = sortCandidates[i]
  console.log(candidate.name + ': ' + rateCandidates(candidate, interviewRequirements))
}

console.log('Результати співбесіди:');
for (let i = 0; i < sortCandidates.length; i++) {
  const candidate = sortCandidates[i]
  const passedInterview = candidate.conductInterview(interviewRequirements)
  if (passedInterview) {
    console.log(`Вітаю, ${candidate.name}! Ви пройшли співбесіду!`);
  }
  console.log(`Вибачте, ${candidate.name}, але Ви не відповідаєте нашим вимогам.`);
}
