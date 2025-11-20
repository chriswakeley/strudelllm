// Frequency ratio analyzer for our just intonation progression

function gcd(a, b) {
    return b === 0 ? a : gcd(b, a % b);
}

function simplifyRatio(num, den) {
    const divisor = gcd(Math.round(num * 1000), Math.round(den * 1000));
    return [Math.round(num * 1000 / divisor), Math.round(den * 1000 / divisor)];
}

function analyzeRatio(freq1, freq2, name1, name2) {
    const ratio = freq2 / freq1;
    const [num, den] = simplifyRatio(freq2, freq1);
    const cents = 1200 * Math.log2(ratio);
    return { name: `${name1} → ${name2}`, freq1, freq2, ratio: ratio.toFixed(4), simplified: `${num}:${den}`, cents: cents.toFixed(2) };
}

// Our current chords
const chords = {
    'A major': { A: 440, Cs: 550, E: 660 },
    'F# minor': { Cs: 550, Fs: 660, A: 880 },
    'D major': { A: 440, D: 528, Fs: 660 },
    'E major': { E: 660, Gs: 825, B: 990 }
};

console.log('=== CURRENT CHORD FREQUENCIES ===\n');
for (const [chordName, notes] of Object.entries(chords)) {
    console.log(`${chordName}:`);
    for (const [note, freq] of Object.entries(notes)) {
        console.log(`  ${note}: ${freq} Hz`);
    }
    console.log();
}

// Alternative derivations
console.log('=== ALTERNATIVE DERIVATIONS (Pythagorean) ===\n');

const A = 440;
console.log('Building from A (440 Hz) via perfect fifths (3:2):\n');

const pyth = {
    A: A,
    E: A * 3 / 2,        // 660
    B: A * 3 / 2 * 3 / 2,  // 990
    Fs: A * 3 / 2 * 3 / 2 * 3 / 2 / 2,  // 742.5 (down octave)
    Cs: A * 3 / 2 * 3 / 2 * 3 / 2 * 3 / 2 / 4,  // 556.875 (down 2 octaves)
    Gs: A * 3 / 2 * 3 / 2 * 3 / 2 * 3 / 2 * 3 / 2 / 8,  // 417.656 (down 3 octaves)
    Ds: A * 3 / 2 * 3 / 2 * 3 / 2 * 3 / 2 * 3 / 2 * 3 / 2 / 8, // D# Pythagorean
};

for (const [note, freq] of Object.entries(pyth)) {
    console.log(`${note}: ${freq.toFixed(3)} Hz`);
}

console.log('\n=== SYNTONIC COMMA COMPARISONS ===\n');

// C# comparison (major third vs Pythagorean)
const csJust = 550;  // A × 5/4
const csPyth = pyth.Cs;
console.log(`C# as major third from A: ${csJust} Hz`);
console.log(`C# from chain of fifths: ${csPyth.toFixed(3)} Hz`);
console.log(`Ratio: ${(csPyth / csJust).toFixed(6)} (should be 81/80 = ${(81 / 80).toFixed(6)})`);
console.log(`Difference: ${((csPyth - csJust)).toFixed(3)} Hz`);
console.log(`Cents: ${(1200 * Math.log2(csPyth / csJust)).toFixed(2)} (should be ~21.5 cents)\n`);

// F# comparison  
const fsJust = 660;  // From our D major as major third: 528 × 5/4
const fsPyth = pyth.Fs;
console.log(`F# as major third from D (528): ${(528 * 5 / 4).toFixed(3)} Hz`);
console.log(`F# from chain of fifths: ${fsPyth.toFixed(3)} Hz`);
console.log(`Ratio: ${(fsPyth / (528 * 5 / 4)).toFixed(6)}`);
console.log(`Difference: ${(fsPyth - (528 * 5 / 4)).toFixed(3)} Hz`);
console.log(`Cents: ${(1200 * Math.log2(fsPyth / (528 * 5 / 4))).toFixed(2)} cents\n`);

console.log('=== NOTES THAT APPEAR MULTIPLE TIMES ===\n');
const allNotes = {};
for (const [chordName, notes] of Object.entries(chords)) {
    for (const [note, freq] of Object.entries(notes)) {
        if (!allNotes[note]) allNotes[note] = [];
        allNotes[note].push({ chord: chordName, freq });
    }
}

for (const [note, instances] of Object.entries(allNotes)) {
    if (instances.length > 1) {
        console.log(`${note}:`);
        instances.forEach(inst => {
            console.log(`  ${inst.chord}: ${inst.freq} Hz`);
        });
        const freqs = instances.map(i => i.freq);
        const allSame = freqs.every(f => f === freqs[0]);
        console.log(`  ${allSame ? '✓ All same frequency' : '✗ Different frequencies!'}\n`);
    }
}

console.log('=== B MAJOR SUBSTITUTION ANALYSIS ===\n');

// B major with Pythagorean intervals to highlight the comma
const bMajorPyth = {
    Fs: pyth.Fs,  // 742.5 (Pythagorean F#)
    B: 990,       // From our E major
    Ds: pyth.Ds   // Pythagorean D#
};

console.log('B major (Pythagorean): [Fs: ' + bMajorPyth.Fs.toFixed(2) + ', B: ' + bMajorPyth.B +
    ', Ds: ' + bMajorPyth.Ds.toFixed(2) + ']\n');

// Analyze transitions for each possible substitution
const progression = ['A major', 'F# minor', 'D major', 'E major'];

console.log('Analyzing best position for B major substitution:\n');

progression.forEach((chordName, idx) => {
    const prevIdx = (idx - 1 + 4) % 4;
    const nextIdx = (idx + 1) % 4;

    console.log(`Option ${idx + 1}: Replace ${chordName}`);
    console.log(`  ${progression[prevIdx]} → B major → ${progression[nextIdx]}`);

    // Specific analysis for E major position
    if (chordName === 'E major') {
        console.log('  ✓ E major already has B (990 Hz) - B major can reuse this!');
        console.log('  ✓ D major has F# (660) vs B major F# (742.5) - 203.9 cents apart');
        console.log('  ✓ Shows the larger "Pythagorean comma" effect');
    }

    // Specific analysis for F# minor position  
    if (chordName === 'F# minor') {
        console.log('  ~ F# minor has F# (660) vs B major F# (742.5)');
        console.log('  ~ Has C# (550) vs Pythagorean C# in chain through B (556.875)');
    }

    console.log();
});

console.log('\n**RECOMMENDATION: Replace E major with B major**\n');
console.log('Reasons:');
console.log('  1. E major contains B (990 Hz) - smooth connection');
console.log('  2. D major F# (660) → B major F# (742.5) highlights tuning shift');
console.log('  3. Pythagorean F# is 82.5 Hz (203.9 cents) higher than just F#');
console.log('  4. Creates audible "roughness" showing adaptive tuning in action');
console.log('  5. B → A resolution is musically strong (II → I)');

console.log('\n=== MELODIC ANALYSIS ===\n');

// Now lowered by octave
const chordsLower = {
    'A major': { A: 220, Cs: 275, E: 330 },
    'F# minor': { Cs: 275, Fs: 330, A: 440 },
    'D major': { A: 220, D: 264, Fs: 330 },
    'E major': { E: 330, Gs: 412.5, B: 495 },
    'B major': { Ds: 313.24, Fs: 371.25, B: 495 }
};

const progression1 = ['A major', 'F# minor', 'D major', 'E major'];
const progression2 = ['A major', 'F# minor', 'D major', 'B major'];

console.log('Common Tones (notes that repeat across chords):\n');

// Track which notes are common
progression1.forEach((chord, idx) => {
    const nextChord = progression1[(idx + 1) % 4];
    const current = chordsLower[chord];
    const next = chordsLower[nextChord];

    console.log(`${chord} → ${nextChord}:`);

    for (const [note1, freq1] of Object.entries(current)) {
        for (const [note2, freq2] of Object.entries(next)) {
            if (Math.abs(freq1 - freq2) < 1) {
                console.log(`  ✓ ${note1} (${freq1}) = ${note2} (${freq2}) - COMMON TONE`);
            }
        }
    }
    console.log();
});

console.log('\nVoice Leading (smooth melodic connections):\n');

// Find small intervals between consecutive chords
progression1.forEach((chord, idx) => {
    const nextChord = progression1[(idx + 1) % 4];
    const current = chordsLower[chord];
    const next = chordsLower[nextChord];

    console.log(`${chord} → ${nextChord}:`);

    const allMoves = [];
    for (const [note1, freq1] of Object.entries(current)) {
        for (const [note2, freq2] of Object.entries(next)) {
            const interval = freq2 / freq1;
            const cents = Math.abs(1200 * Math.log2(interval));
            allMoves.push({
                from: `${note1}(${freq1})`,
                to: `${note2}(${freq2})`,
                ratio: interval.toFixed(3),
                cents: cents.toFixed(0)
            });
        }
    }

    // Show smoothest moves (within a major third ~400 cents)
    allMoves
        .filter(m => parseFloat(m.cents) < 500)
        .sort((a, b) => parseFloat(a.cents) - parseFloat(b.cents))
        .forEach(m => {
            console.log(`  ${m.from} → ${m.to}: ${m.cents} cents (ratio ${m.ratio})`);
        });
    console.log();
});

console.log('\nHarmonic Series Opportunities:\n');
console.log('Notes that create simple harmonic ratios with chord roots:\n');

const harmonicMultiples = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

progression1.forEach(chordName => {
    const chord = chordsLower[chordName];
    const root = Object.values(chord)[0]; // First note is usually root

    console.log(`${chordName} (root: ${root.toFixed(2)} Hz):`);
    console.log('  Harmonic series:');

    harmonicMultiples.slice(0, 8).forEach(mult => {
        const harmonic = root * mult;
        if (harmonic > 200 && harmonic < 1000) {
            console.log(`    ${mult}x = ${harmonic.toFixed(2)} Hz`);
        }
    });
    console.log();
});

console.log('\nScale/Passing Tone Analysis:\n');
console.log('All unique frequencies in the progression (sorted):\n');

const allFreqs = new Set();
Object.values(chordsLower).forEach(chord => {
    Object.values(chord).forEach(freq => {
        allFreqs.add(freq);
    });
});

const sortedFreqs = Array.from(allFreqs).sort((a, b) => a - b);
sortedFreqs.forEach((freq, idx) => {
    if (idx < sortedFreqs.length - 1) {
        const next = sortedFreqs[idx + 1];
        const ratio = next / freq;
        const cents = 1200 * Math.log2(ratio);
        console.log(`${freq.toFixed(2)} Hz → ${next.toFixed(2)} Hz: ${cents.toFixed(0)} cents (ratio ${ratio.toFixed(3)})`);
    }
});

console.log('\n\nMelodic Suggestions:\n');
console.log('1. PEDAL MELODY: Stay on A (220/440 Hz) - creates different chord tones:');
console.log('   A major: root, F# minor: major 3rd, D major: perfect 5th, E major: perfect 4th');

console.log('\n2. STEPWISE MOTION: Use the smooth voice leading intervals found above');

console.log('\n3. HARMONIC SERIES: Use overtones of the bass (110 Hz):');
const bassRoot = 110;
console.log(`   2x = ${bassRoot * 2} Hz (octave)`);
console.log(`   3x = ${bassRoot * 3} Hz (perfect 5th above octave) = ${(bassRoot * 3).toFixed(2)} Hz`);
console.log(`   5x = ${bassRoot * 5} Hz (major 3rd above 2 octaves) = ${(bassRoot * 5).toFixed(2)} Hz`);
console.log(`   7x = ${bassRoot * 7} Hz (harmonic 7th) = ${(bassRoot * 7).toFixed(2)} Hz`);

console.log('\n4. COMMON TONE MELODY: Build melody from the common tones identified above');

console.log('\n5. CONTRARY MOTION: When bass descends (bars 1-3), melody could ascend');

