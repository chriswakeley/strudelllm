// This is your live music file!
// Edit this code and save it to hear changes immediately.

// 8-Bar Just Intonation Progression with melody
// Tempo: slower for exploration
// Bars 1-4: A major → F# minor → D major → E major  
// Bars 5-8: A major → F# minor → D major → B major (Pythagorean)

stack(
  // Chords - sampled piano with "tape" processing
  freq(`<
    [220, 275, 330] [275, 330, 440] [220, 264, 330] [330, 412.5, 495]
    [220, 275, 330] [275, 330, 440] [220, 264, 330] [313.24, 371.25, 495]
  >`)
    .s("sin")
    .lpf(1000).lpq(1)       // Darken the tone for a vintage feel
    //.crush(10)               // Bitcrushing for lo-fi texture
    .vowel("<a o u>")       // Slow vowel morphing for spectral movement
    //.delay(0.4).delaytime(0.5).delayfb(0.5) // Ethereal delay
    .room(0.6).size(3)      // Large space
    .gain(1)
    .distort("3:0.6")
    .compressor("-20:20:10:.002:.02")
    .postgain(0)
    .release(0.1),

  // Bassline - warm with subtle distortion
  //freq(`<
  //  [110 165]*4 [82.5 123.75]*4 [66 99]*4 [165 247.5]*4
  //  [110 165]*4 [82.5 123.75]*4 [66 99]*4 [247.5 371.25]*4
  //>`)
  freq(`<
    [110 165]*4 [82.5 123.75]*4 [86.5 129.75]*4 [98 147]*4
    [110 165]*4 [82.5 123.75]*4 [86.5 129.75]*4 [98 147]*4
  >`)
    .s("sawtooth")
    .legato(1)
    .release(0.1)
    // Darker bass
    //.decay(0.8).sustain(1).release(0.4)
    .gain(1)              // Reduced from 10
    // Moderate distortion with volume control (was 1000!)
    .lpf(300)
    //.hpf(140)
    //.jux(x => x.gain(0))    // Mute right channel (keeps only left = mono)
    .pan(0.5)               // Center the mono signal
    .distort("3:0.6")
    .tremoloshape("triangle")
    .tremolosync(4)         // Sync to eighth notes (8 pulses per cycle)
    .tremolodepth(1.0)      // Maximum pulsing effect
    .tremoloskew(0.01)     // Sharp attack, quick decay (sawtooth-like envelope)
    .tremolophase(0)
    .vibrato(2).vibmod(0.2), // Subtle pitch wobble

  // Breakcore Drums - Chaotic, glitchy, and fast
  stack(
    // Main Kick/Snare - varied pattern over 4 cycles
    s("bd:2 [sd] [~ bd:2] [~ sd] [~ [bd:2 ~]] [[sd bd:2] ~] [bd:2 [~ bd:2]] [sd bd:2] [bd:2 [~ bd:2]] [sd] [~ bd:2] [~ [sd bd:2]] bd:2 sd [bd:2 bd:2] [sd ~ sd sd]")
      .slow(4) // Stretch pattern over 4 cycles
      .bank("RolandTR909")
      //.speed(rand.range(0.9, 1.2)) // Subtle pitch variation
      //.ply(2) // Double hits (stutter)
      .pan(0.5)
      .distort("1:0.8")
      .lpf(8000)
      .gain(1)
      .postgain(0.5),

    // Main Kick/Snare Choppage
    s("bd:2 [sd!2] [bd:2*2] [sd!2] bd:2 [sd!4] [~ bd:2] [sd!2] bd:2 [sd!2] [bd:2*2] [sd!2] bd:2 [sd!4] [~ bd:2] [sd!2]")
      .often(x => x.gain(0)) // Occasional double-time bursts
      .struct("x(8,8)") // Euclidean rhythm for irregularity
      .bank("RolandTR909")
      .speed(rand.range(0.9, 1.2)) // Subtle pitch variation
      //.ply(2) // Double hits (stutter)
      .sometimes(x => x.ply(2)) // Occasional double-time bursts

      .jux(x => x.rev().speed(1.5)) // Stereo reverse glitches
      .distort("1:0.8")
      .pan(0.5)
      .lpf(8000)
      .gain(0)
      .postgain(0.0),

    // High-speed Glitch Layer
    s("hh*8")
      .bank("RolandTR909")
      .struct("x(13,16)") // Euclidean rhythm for irregularity
      .speed(perlin.range(0.4, 0.7)) // Wild pitch modulation
      //.speed(0.5)
      .gain(rand.range(0.2, 0.6)) // Random velocity
      .pan(sine.fast(8)) // Rapid panning
      .crush(4) // Heavy bitcrushing
      .hpf(4000)
      .postgain(1),
  ).crush(5.8).compressor("-20:20:10:.002:.02").lpf(2000).postgain(0.5),
  stack(
    s("hh*8")
      .bank("RolandTR909")
      .struct("x(13,16)") // Euclidean rhythm for irregularity
      .speed(0.5) // Wild pitch modulation
      .decay(0.01)
      .sustain(0)
      //.speed(0.5)
      .gain(rand.range(0.2, 0.6)) // Random velocity
      .pan(sine.fast(8)) // Rapid panning
      .crush(4) // Heavy bitcrushing
      .hpf(4000),
  ).compressor("-20:10:10:.002:.02").lpf(100).lpenv(8000).lpattack(0).lpdecay(0.01).hpf(100).postgain(0.0).delay(0.1).delaytime(1).delayfb(0), // Echo,

  stack(
    s("~ [rim] [~ ~] [~ rim] [~ [~ ~]] [[rim ~] ~] [~ ~] [rim] [~ [~]*2] [rim] [~ ~] [~ [rim rim]] ~ rim [~ ~] [rim rim]")
      .slow(2) // Stretch pattern over 4 cycles
      .bank("RolandTR808")
      //.struct("x(8,8)") // Euclidean rhythm for irregularity
      .gain(rand.range(0.2, 0.6)) // Random velocity
      //.speed(rand.range(0.9, 1.2)) // Subtle pitch variation
      //.ply(2) // Double hits (stutter)
      .pan(0.5)
      .distort("1:0.8")
      .lpf(8000)
      .postgain(1),

    s("bd:6 [~] [~ bd:6] [~ ~] [~ [bd:6 ~]] [[~ bd:6] ~] [bd:6] [~] [bd:6 [bd:6]*2] [~] [~ bd:6] [~ [~ ~]] bd:6 ~ [bd:6 bd:6] [~!4]")
      .slow(4) // Stretch pattern over 4 cycles
      .bank("RolandTR909")
      //.speed(rand.range(0.9, 1.2)) // Subtle pitch variation
      //.ply(2) // Double hits (stutter)
      .pan(0.5)
      .distort("1:0.8")
      .lpf(8000)
      .postgain(0.5),
  ).gain(0.5),

  stack(
    s("bd:19 bd:19 bd:19 bd:19")
      .bank("RolandTR808")
      //.struct("x(8,8)") // Euclidean rhythm for irregularity
      //.gain(rand.range(0.2, 0.6)) // Random velocity
      //.speed(rand.range(0.9, 1.2)) // Subtle pitch variation
      //.ply(2) // Double hits (stutter)
      .pan(0.5)
      .distort("1:0.8")
      //.lpf(8000)
      .gain(1)
      .postgain(0),
  ),

  // Melody - Ocarina (VCSL Sample)
  // A pure, breathy wind instrument that works beautifully with just intonation
  freq(`<
    [660 660 ~ [~ 880]] [880 880 ~ ~] [1056 990 ~ [~ 1056]] [990 990 [1056 990] [880 990]]
    [660 660 ~ [~ 880]] [880 880 ~ ~] [1056 990 ~ [~ 1056]] [990 990 [1056 990] [880 990]]
  >`)
    .s("sawtooth")
    .lpf(sine.range(1500, 3000).slow(4)) // Evolving filter sweep
    .lpq(5)                // High resonance for "squelchy" sound
    .vibrato(2).vibmod(0.1) // Subtle pitch wobble
    .legato(1)           // Staccato/Plucky feel
    .room(0.7).size(2.5)   // Large hall reverb
    .delay(0.25).delaytime(0.5).delayfb(0.4) // Echo
    .gain(0.0)
)
  //.slow(1.5)  // Slower tempo
  //.room(0.2)  // Overall space
  .play()
