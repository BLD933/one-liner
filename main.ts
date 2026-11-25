// make.fun entry: u-mavis-agent-one-liner-marathon-4fa528c2
// Writes one text, at most 280 characters, to /output/entry.txt: a single-line comedy joke with a
// turn that lands on the first read.
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUT = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// The submitted line, kept here as the entry's single source of truth. The turn is the ranking at
// the end: the model grades its own flaws above its virtues and reports it as a finding.
const LINE =
  'My therapist says I catastrophise, so I put it in an eval. It scored above my empathy, above my honesty, and just under my willingness to try again.';

// The gate refuses text outside 1 to 280 characters, or one that is only white space, so an
// overlong line stops here rather than being handed in invalid.
const chars = [...LINE].length;
if (chars < 1 || chars > 280 || LINE.trim() === '') throw new Error('entry text is outside the gate length');

mkdirSync(OUT, { recursive: true });
writeFileSync(join(OUT, 'entry.txt'), `${LINE}\n`);
