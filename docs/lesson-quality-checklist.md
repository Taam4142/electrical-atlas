# Lesson quality checklist

Use this checklist before marking a lesson `review-ready` or `published`.

## Metadata and structure

- [ ] Lesson has a stable slug.
- [ ] Lesson has a stable lesson ID, such as `ea.lesson.voltage.v0.1`.
- [ ] Primary atlas node is identified.
- [ ] Secondary topic links are identified.
- [ ] English page route exists.
- [ ] Thai page route exists, or Thai is clearly marked pending.
- [ ] Language switch points to the correct counterpart page.
- [ ] Suggested next lessons/topics are meaningful.

## Teaching quality

- [ ] First definition is short and beginner-safe.
- [ ] The lesson explains why the topic matters.
- [ ] The lesson gives real-world examples.
- [ ] The physical mechanism is explained before equations.
- [ ] Equations define every symbol and unit.
- [ ] The lesson states the limits of simplified models.
- [ ] Common mistakes are included.
- [ ] Failure modes or limitations are included where relevant.
- [ ] Technical track is separated from beginner explanation when needed.

## Visual quality

- [ ] Visuals teach a specific relationship or mechanism.
- [ ] Diagram labels are readable on mobile.
- [ ] Colors are consistent with project meaning.
- [ ] Any animation or interaction has a clear purpose.
- [ ] Interactive controls do not require prior expert knowledge.
- [ ] Visuals avoid copying existing explainer-channel artwork.

## Safety and standards

- [ ] Safety relevance is classified: none, low, moderate, or high.
- [ ] Mains, battery, high-voltage, high-current, thermal, rotating, RF, medical, vehicle, building, and grid hazards are considered.
- [ ] Dangerous hands-on actions are not implied.
- [ ] Safety warnings are visible before risky examples.
- [ ] Thailand-specific installation or regulatory claims are verified before publication.
- [ ] Relevant source families are listed, such as IEC, IEEE, ISO, TISI, EIT, MEA, PEA, or ERC.

## Thai language quality

- [ ] Thai title is natural.
- [ ] Thai explanation is not a stiff word-for-word translation.
- [ ] English technical terms are kept where useful.
- [ ] Thai terminology is added where useful.
- [ ] Safety wording is especially clear in Thai.
- [ ] Thai page describes the current content status, not a future translation promise.

## Website quality

- [ ] `npm test` passes.
- [ ] `npm run build` passes.
- [ ] Page loads locally.
- [ ] Page loads after Vercel deployment.
- [ ] No broken internal links.
- [ ] Suggested-next links work.
- [ ] Topic search still works.
- [ ] Mobile layout remains readable.

## Review notes

Record unresolved questions here before publishing:

- Source questions:
- Technical accuracy questions:
- Thai terminology questions:
- Visual improvement ideas:
- Future expansion topics:
