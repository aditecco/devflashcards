const fs = require("fs");
const PATH = "";

fs.readFile(PATH, (err, data) => {
  if (err) return;

  const SPLITTER = [/#{6}\s[0-9]\./g, /\n-{3}\n\n/g];

  const EXTRACTOR_PATTERNS = {
    QUESTION_HEADING: /<h6>(\d\.\s\w.*)<\/h6>/g,
    ANSWER_REVEAL: /<details><summary><b>Answer<\/b><\/summary>/g,
    PARAGRAPHS: /<[\/]?p>/g,
    MISC_TAGS: /\<[\/]?(p|details|summary)\>/g,
    ANSWER_HEADING: /\<h4\>(Answer\:\s[A-Z]{1})\<\/h4\>/g,
    _QUESTION_HEADING: /<h6>\d\.\s(\w.*)<\/h6>/,
    _ANSWER_REVEAL: /<details><summary><b>Answer<\/b><\/summary>/,
    _PARAGRAPHS: /<[\/]?p>/,
    _MISC_TAGS: /\<[\/]?(p|details|summary)\>/,
    _ANSWER_HEADING: /\<h4\>(Answer\:\s[A-Z]{1})\<\/h4\>/,
  };

  const {
    ANSWER_HEADING,
    ANSWER_REVEAL,
    QUESTION_HEADING,
    MISC_TAGS,
    PARAGRAPHS,
    _ANSWER_HEADING,
    _ANSWER_REVEAL,
    _QUESTION_HEADING,
    _MISC_TAGS,
    _PARAGRAPHS,
  } = EXTRACTOR_PATTERNS;

  const processedSource = data.toString().split(SPLITTER[1]);

  // console.log(processedSource.length, processedSource[1]);

  processedSource.slice(1).forEach((markdownBlob, i) => {
    const title = markdownBlob.match(_QUESTION_HEADING)[0];
    const answer = markdownBlob.match(_ANSWER_HEADING)[0];

    const frontMatter = `
---
order: ${i}
timestamp: ${new Date().toLocaleDateString()}
topic: programming
deck: JavaScript Deck
title: ${title}
answer: ${answer}
---

  `;

    fs.writeFile("./card-" + i + ".md", frontMatter + markdownBlob, (err) => {
      if (err) {
        console.error(err);
      }
    });
  });
});
