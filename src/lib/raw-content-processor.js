/* ---------------------------------
raw-content-processor
--------------------------------- */

const fs = require("fs");
const PATH = "./raw-content.md";

fs.readFile(PATH, (err, data) => {
  if (err) return;

  const SPLITTER = /\n-{3}\n\n/g;

  const EXTRACTOR_PATTERNS = {
    ANSWER_HEADING: /\<h4\>(Answer\:\s[A-Z]{1})\<\/h4\>/g,
    ANSWER_HEADING_MD: /\#{4}\s(Answer\:\s[A-Z]{1})/g,
    ANSWER_OPTIONS_MD: /(?:\-\s)(?<options>[A-Z]\:.*)/g,
    ANSWER_REVEAL: /<details><summary><b>Answer<\/b><\/summary>/g,
    MISC_TAGS: /\<[\/]?(p|details|summary)\>/g,
    PARAGRAPHS: /<[\/]?p>/g,
    QUESTION_HEADING: /<h6>(\d\.\s\w.*)<\/h6>/g,
    QUESTION_HEADING_MD: /\#{6}\s[0-9]*\.\s(\w.*)/gm,
    _ANSWER_HEADING: /\<h4\>(Answer\:\s[A-Z]{1})\<\/h4\>/,
    _ANSWER_HEADING_MD: /\#{4}\s(Answer\:\s)([A-Z]{1})/,
    _ANSWER_REVEAL: /<details><summary><b>Answer<\/b><\/summary>/,
    _MISC_TAGS: /\<[\/]?(p|details|summary)\>/,
    _PARAGRAPHS: /<[\/]?p>/,
    _QUESTION_HEADING: /<h6>\d\.\s(\w.*)<\/h6>/,
    _QUESTION_HEADING_MD: /\#{6}\s[0-9]*\.\s(\w.*)/m,
  };

  const {
    ANSWER_HEADING,
    ANSWER_HEADING_MD,
    ANSWER_OPTIONS_MD,
    QUESTION_HEADING_MD,
    ANSWER_REVEAL,
    MISC_TAGS,
    PARAGRAPHS,
    QUESTION_HEADING,
    _ANSWER_HEADING,
    _ANSWER_HEADING_MD,
    _ANSWER_REVEAL,
    _MISC_TAGS,
    _PARAGRAPHS,
    _QUESTION_HEADING,
    _QUESTION_HEADING_MD,
  } = EXTRACTOR_PATTERNS;

  const DECK_TITLE = "Javascript Questions by Lydia Hallie";
  const DECK_SOURCE = "https://github.com/lydiahallie/javascript-questions";
  const DECK_TOPIC = "programming";
  const DATE = new Date().toLocaleDateString();

  const ALPHABET = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];

  // breaks the file in chunks, based on the `---` separator
  const processedSource = data.toString().split(SPLITTER);

  processedSource.slice(1).forEach((markdownBlob, i) => {
    const title = markdownBlob?.match?.(_QUESTION_HEADING_MD)?.[1];
    const answer = markdownBlob?.match?.(_ANSWER_HEADING_MD)?.[2];
    const answerOptions = markdownBlob.match(ANSWER_OPTIONS_MD);

    let formOptions = "";

    answerOptions.forEach((option, i) => {
      formOptions += `
<label for="${"option-" + ALPHABET[i]}">Option ${ALPHABET[i]}</label>
<input type="radio" name="answer-option" id="${
        "option-" + ALPHABET[i]
      }" value="${ALPHABET[i]}">${option}</input>
`;
    });

    const strippedMarkdownBlob = markdownBlob
      .replace(ANSWER_REVEAL, "")
      .replace(MISC_TAGS, "")
      .replace(QUESTION_HEADING_MD, "")
      .replace(ANSWER_HEADING_MD, "SPLIT_MARKER")
      .replace(ANSWER_OPTIONS_MD, formOptions);

    const frontMatter = `---
order: ${i}
timestamp: ${DATE}
topic: ${DECK_TOPIC}
deck: ${DECK_TITLE}
contentSource: ${DECK_SOURCE}
title: ${title}
answer: ${answer}
---

  `;

    fs.writeFile(
      `./card-${i}${!title || !answer ? "-incomplete" : ""}.md`,
      frontMatter + strippedMarkdownBlob,
      (err) => {
        if (err) {
          console.error(err);
        }
      }
    );
  });
});
