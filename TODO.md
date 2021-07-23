# DevFlashCards TODO

### Requirements

#### It should:

- [x] Display a deck of cards
  - [x] cards will contain a question on the front, along with a code example, and an answer on the back
  - [x] cards will display a series of buttons to choose an answer, or to snooze the card
  - ? [ ] user will be able to run the code example
  - ? [ ] user can expand the card to a page layout
  - ? [ ]for each card, there will be a matching page

#### Flow

- open HP
- choose a deck
- loading CardViewer home
- if a client DB is present:
  - load it
  - end loading
- else:
  - cards are loaded from static data
  - cards are enriched with algo data
  - client DB is initialized with enriched cards
  - end loading
- present the stack of cards
  - if the session is a new session
    - start with the first card of the stack, by index
  - else if the session is resumed
    - start with the last active card in the previous session
  - review & grade the card
  - card is updated in DB & moved to one of 6 buckets (as in 6 grades)
  - UI updates with the card swiped away (out of the viewport)
  - if there are cards that are due today:
    - show them next
  - else, show the next card by index
  - if a card has never been reviewed & graded
    - then it's due today

---

### TODO

- [ ] define all colors (move to theme)
- [ ] define fonts
- [ ] Create custom scrollbar
- [x] Implement answer options as form with radio buttons
  - [ ] when submitting the form, the card flips
- [ ] Fix theme TS issues
- [x] Create POC
- [x] Implement Card layout
- [x] Find data source
- [x] Implement basic viewer layout
- [x] Implement theme provider & theme assets
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
