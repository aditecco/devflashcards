# DevFlashCards TODO

### Requirements

#### It should:

- Display a deck of cards
  - cards will contain a question on the front, along with a code example, and an answer on the back
  - cards will display a series of buttons to choose an answer, or to snooze the card
  - ? user will be able to run the code example
  - ? user can expand the card to a page layout
  - ? for each card, there will be a matching page

---

### TODO

- [x] Create POC
- [x] Implement Card layout
- [x] Find data source
- [ ] Implement basic viewer layout
- [ ] Implement theme provider & theme assets
- [x] Implement card structure & fit content to card
- [x] Implement data source import
- [x] Implement card deck animations

---

### Notes

FRONTMATTER MAPPING

√ order => auto-generated from file iterator
√ timestamp => auto-generated
√ topic => static
√ deck => static
√ title => extracted from 'question'
√ answer => extracted from 'answer'

CONTENT MAPPING

code block => moved as-is
options => moved as-is
answer reveal => stripped
answer title => moved as-is
answer body => moved as-is
stray p/details => stripped
