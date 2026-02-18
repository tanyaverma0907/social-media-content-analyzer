
function analyzeText(content) {

  
  if (!content || content.trim() === "") {
    return {
      score: 0,
      wordCount: 0,
      suggestions: ["No content found to analyze."]
    };
  }

  let suggestions = [];
  let score = 0;

  
  const wordList = content.trim().split(/\s+/);
  const totalWords = wordList.length;

  const lowerText = content.toLowerCase();

  
  const hashtagMatches = content.match(/#/g);
  const hashtagCount = hashtagMatches ? hashtagMatches.length : 0;

  if (hashtagCount > 0) {
    score += 20;
  } else {
    suggestions.push("Consider adding relevant hashtags.");
  }


  
  if (content.includes("?")) {
    score += 20;
  } else {
    suggestions.push("Try adding a question to encourage interaction.");
  }


  
  if (totalWords >= 10 && totalWords <= 120) {
    score += 20;
  } else if (totalWords < 10) {
    suggestions.push("Content feels too short. Add more details.");
  } else {
    suggestions.push("Content is too long. Keep it concise.");
  }


  

  const emotionList = ["amazing", "excited", "love", "wow", "awesome", "great"];

  let emotionFound = false;

  for (let i = 0; i < emotionList.length; i++) {
    if (lowerText.includes(emotionList[i])) {
      emotionFound = true;
      break;
    }
  }

  if (emotionFound) {
    score += 20;
  } else {
    suggestions.push("Add some emotional words to make it more engaging.");
  }


  

  
  const actionWords = ["comment", "share", "like", "follow", "click"];

  let actionFound = false;

  for (let i = 0; i < actionWords.length; i++) {
    if (lowerText.includes(actionWords[i])) {
      actionFound = true;
      break;
    }
  }

  if (actionFound) {
    score += 20;
  } else {
    suggestions.push("Add a call-to-action like 'comment' or 'share'.");
  }


  return {
    score,
    wordCount: totalWords,
    hashtagCount,
    suggestions
  };
}

module.exports = analyzeText;
