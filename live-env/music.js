// This is your live music file!
// Edit this code and save it to hear changes immediately.

// 8-Bar Just Intonation Progression with melody
// Tempo: slower for exploration
// Bars 1-4: A major → F# minor → D major → E major  
// Bars 5-8: A major → F# minor → D major → B major (Pythagorean)

stack(
  // Chords - sampled piano with "tape" processing
  freq(`<
    [[220, 275, 330] ~ ~ ~] [[275, 330, 440] ~ ~ ~ ] [[220, 264, 330] ~ ~ ~] [[330, 412.5, 495] ~ ~ ~]
    [[220, 275, 330] ~ ~ ~] [[275, 330, 440] ~ ~ ~ ] [[220, 264, 330] ~ ~ ~] [[313.24, 371.25, 495] ~ ~ ~]
  >`)
    .s("piano")
    .lpf(1000).lpq(1)       // Darken the tone for a vintage feel
    .crush(8)               // Bitcrushing for lo-fi texture
    //.vowel("<a o u>")       // Slow vowel morphing for spectral movement
    .delay(0.4).delaytime(0.5).delayfb(0.5) // Ethereal delay
    .room(0.6).size(3)      // Large space
    .gain(0.9)
    .release(1.2),

  // Bassline - warm with subtle distortion
  freq(`<
    [110 165]*4 [82.5 123.75]*4 [66 99]*4 [165 247.5]*4
    [110 165]*4 [82.5 123.75]*4 [66 99]*4 [247.5 371.25]*4
  >`)
    .s("triangle")
    .lpf(400)  // Darker bass
    .distort(0.3)  // Subtle warmth
    .gain(0.7)
    .decay(0.4).sustain(0),

  // Melody - Ocarina (VCSL Sample)
  // A pure, breathy wind instrument that works beautifully with just intonation
  freq(`<
    [660 660 ~ [~ 880]] [880 880 ~ ~] [1056 990 ~ [~ 1100]] [990 990 [1100 990] [880 990]]
    [660 660 ~ [~ 880]] [880 880 ~ ~] [1056 990 ~ [~ 1100]] [990 990 [1100 990] [880 990]]
  >`)
    .s("piano")
    .legato(1)             // Smooth transitions
    .vib("5:.1")           // Natural vibrato
    .room(0.7).size(2.5)   // Large hall reverb
    .delay(0.1).delaytime(0.5).delayfb(0.02) // Echo
    .lpf(4000)             // Gentle high cut
    .gain(1.0)
)
  .slow(1.5)  // Slower tempo
  .room(0.2)  // Overall space
  .play()
