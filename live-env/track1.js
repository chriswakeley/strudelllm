// Intro Bass
const introBass = note("[b1 ~ ~ ~] [b1 ~ ~ ~] [b1 ~ ~ ~] [b1 ~ ~ ~]")
    .s("sawtooth")
    //slow(2)
    // Acid Filter
    //.lpf("<600 700 1200 900 2500 1000 1500 700 800 600 1200 300 2500 600 1500 400>") // Sequenced filter cutoff
    .lpq(10)      
    .lpenv("<600 700 1200 900 2500 1000 1500 700 800 600 1200 300 2500 600 1500 400>").lpdecay(0.1)
    .release(0.05)  
    .penv("<5>")       
    .pattack(0).pdecay(4).psustain(0)          // Quick slides
    //.rarely(x => x.legato(0.5))
    //.almostNever(x => x.ply(0.5).penv("<17>").room(0.1).vowel("<i aa u o>"))
    //.sometimes(x => x.ply(2))
    .hpf(2000)
    .gain(0.2)
    .crush(13)
    .swingBy(32, 0.2)
    .distort("2.5:0.6")
    .orbit(2).compressor("-20:20:10:.002:.1").hpf(1500).postgain(0.6)

const susBass = note("a1 a1 a1 a1")
    .s("sawtooth")
    .penv("<5>")
    .slow(4)
    .lpf(800)
    .lpq(8)
    .gain(0.55)
    .orbit(2)

// Bass Line
const slideMask = `[0 0 0 1] [0 0 0 0] [0 0 0 0] [1 0 0 0]
                   [0 0 0 0] [0 0 0 0] [0 0 0 0] [1 0 0 0]
                   [0 0 0 0] [0 0 0 0] [0 0 0 0] [1 0 0 0]
                   [0 0 0 0] [0 0 0 0] [0 0 0 0] [1 0 0 0]
                   [0 0 0 1] [0 0 0 0] [0 0 0 0] [0 0 0 0]
                   [0 0 0 1] [0 0 0 0] [1 0 0 0] [0 0 0 0]
                   [0 0 0 0] [0 0 1 0] [0 0 1 0] [0 1 0 0]
                   [0 0 0 1] [0 0 0 0] [0 0 0 0] [0 0 0 1]`

const bass = note(`
        [a1 ~ a1 b1] [~ c1 ~ a1] [~ a1 ~ c1] [b1 ~ c1 ~]
        [a1 ~ b1 ~] [c1 ~ ~ a1] [~ b1 ~ c1] [b1 ~ a1 ~]
        [a1 ~ a1 ~] [c1 ~ ~ c1] [~ c1 ~ a1] [b1 ~ a1 ~]
        [a1 ~ a1 ~] [c1 ~ a1 ~] [a1 ~ ~ a1] [c1 ~ b1 ~]
        [a1 ~ a1 b1] [~ c1 ~ a1] [~ a1 ~ ~] [b1 ~ c1 ~]
        [a1 ~ a1 b1] [c1 ~ ~ b1] [c1 ~ b1 ~] [a1 ~ b1 ~]
        [a1 ~ ~ b1] [~ b1 c1 ~] [~ c1 a1 ~] [b1 a1 ~ c1]
        [a1 ~ b1 a1] [~ ~ b1 ~] [a1 ~ b1 ~] [~ ~ a1 b1]
    `)
        .s("sawtooth")
        .slow(8)
        // Acid Filter
        //.lpf("<600 700 1200 900 2500 1000 1500 700 800 600 1200 300 2500 600 1500 400>") // Sequenced filter cutoff
        .lpq(10)      
        .lpenv("<600 700 1200 900 2500 1000 1500 700 800 600 1200 300 2500 600 1500 400>").lpdecay(0.1)
        .release(0.05)  
        .penv("<8 8 8 8 5 5 5 5>")       
        .pattack(0).pdecay(4)          // Quick slides
        //.rarely(x => x.legato(0.5))
        .almostNever(x => x.ply(0.5).penv("<17>").room(0.1).vowel("<i aa u o>"))
        //.sometimes(x => x.ply(2))
        .hpf(80)
        .gain(0.2)
        .crush(13)
        .swingBy(32, 0.2)
        .distort("2.5:0.6")
        .when(slideMask, x => x.penv(-2).pdecay(0.1))
        .orbit(2).compressor("-20:20:10:.002:.1").lpf(1500).postgain(0.6)

// Crushed Drums (Kick/Snare/Hats)
const crushedDrums = stack(
        // Main Kick/Snare - varied pattern over 4 cycles
        s("~ [sd] ~ [sd] ~ [sd] ~ [sd]")
            .slow(2) // Stretch pattern over 4 cycles
            .bank("RolandTR909")
            //.speed(rand.range(0.9, 1.2)) // Subtle pitch variation
            //.ply(2) // Double hits (stutter)
            .pan(0.5)
            .distort("1:0.8")
            //.lpf(12000)
            .hpf(100)
            .gain(1)
            .postgain(1)
            .room(0.2),

        // crushed hats
        s("hh*8")
            .bank("RolandTR909")
            //.struct("x(13,16)") // Euclidean rhythm for irregularity
            //.speed(perlin.range(0.4, 0.7)) // Wild pitch modulation
            .speed(0.9)
            .gain(rand.range(0.2, 0.2)) // Random velocity
            .pan(sine.fast(8)) // Rapid panning
            .crush(4) // Heavy bitcrushing
            .hpf(4000)
            .almostNever(x => x.ply(8).pan(sine.fast(2)).room(0.2).penv("<2>").psustain(0).pdecay(0.01)),
        s("hh*8")
            .bank("RolandTR909")
            //.struct("x(13,16)") // Euclidean rhythm for irregularity
            //.speed(perlin.range(0.4, 0.7)) // Wild pitch modulation
            .late(1/14.5)
            .speed(0.9)
            .gain(rand.range(0.2, 0.1)) // Random velocity
            .pan(sine.fast(8)) // Rapid panning
            .crush(4) // Heavy bitcrushing
            .hpf(4000)
            //.almostNever(x => x.ply(8).pan(sine.fast(2)).room(0.2).penv("<2>").psustain(0).pdecay(0.01)),
    )
        .crush(5.8)
        .compressor("-20:10:10:.002:.02")
        .lpf(2000)
        .postgain(0.4)

// Clean Clicks
const clicks = stack(
        s("hh*8")
            .bank("RolandTR909")
            .struct("x(13,16)") // Euclidean rhythm for irregularity
            .speed(0.9) // Wild pitch modulation
            .decay(0.01)
            .sustain(0)
            //.speed(0.5)
            .gain(rand.range(0.2, 0.6)) // Random velocity
            .pan(sine.fast(2)) // Rapid panning
            .crush(4) // Heavy bitcrushing
            .hpf(4000),
    )
        .compressor("-20:10:10:.002:.02")
        .lpf(100).lpenv(8000).lpattack(0).lpdecay(0.01)
        .hpf(100)
        .delay(0.1).delaytime(1).delayfb(0)
        .postgain(0.1)

// Rimshots
const rimshots = stack(
        s("~ [rim] [~ ~] [~ rim] [~ [~ ~]] [rim] [rim] [rim] [~ [~]*2] [rim] [~ ~] [rim] ~ rim [~ ~] rim")
            .slow(2) // Stretch pattern over 4 cycles
            .bank("RolandTR808")
            //.struct("x(8,8)") // Euclidean rhythm for irregularity
            .gain(rand.range(0.2, 0.6)) // Random velocity
            //.speed(rand.range(0.9, 1.2)) // Subtle pitch variation
            .often(x => x.ply(2)) // Double hits (stutter)
            .pan(sine.fast(1.5))
            .distort("1:0.8")
            .lpf(8000),
        )
        .postgain(0.2)

// Main Kick (4 on the floor)
const mainKick = stack(
        s("bd:19 bd:19 bd:19 bd:19")
            .bank("RolandTR808")
            //.struct("x(8,8)") // Euclidean rhythm for irregularity
            //.gain(rand.range(0.2, 0.6)) // Random velocity
            //.speed(rand.range(0.9, 1.2)) // Subtle pitch variation
            //.ply(2) // Double hits (stutter)
            .penv("<-5 12>")
            //.penv("<-5>")
            .sustain(0.1)
            .attack(0).decay(0.25)
            .pan(0.5)
            .distort("1.5:0.8")
            .hpf(50)
            //.lpf(5000)
            .gain(1),

    ).postgain(1).compressor("-20:30:20:.002:.02")
     .duckorbit("2:3").duckdepth(0.6).duckonset(0.01).duckattack(0.25)

// Lead Synth
const lead = stack(
        note("[[[a4, c5, e5] [b4, e5]], c4] [[[g5, c5, e5] [d5, c5]], b4]")
            .slow(4)
            .s("sawtooth")              // Synth waveform (sawtooth is rich in harmonics)
            .fm(1)
            .fmi(1)
            .fmh(5.01)
            .vowel("<aa uh aa aa>")
            .fmdecay(1)
            .fmenv(1)
            .legato(0.9)                // Controls note length relative to step size
            .attack(0.05).decay(0.9).sustain(0.7).release(1) // High sustain allows holding notes
            .lpf(2500).lpq(1)           // Low pass filter to tame harshness
            .lpenv(1500).lpattack(0.05).lpdecay(0.4) // Filter envelope for articulation
            
            .vibrato(4).vibmod(0.2)   // Vibrato for expression
            .penv("<-12>")
            .pattack(0).pdecay(0).psustain(0) // Subtle pitch envelope for movement
            .often(x => x.pdecay(0.25))
            .sometimes(x => x.penv("<12>"))
            .tremoloshape("triangle")
            .tremolosync(16)         // Sync to eighth notes (8 pulses per cycle)
            .tremolodepth(0.7)      // Maximum pulsing effect
            .tremoloskew(0.01)     // Sharp attack, quick decay (sawtooth-like envelope)
            .tremolophase(0)
            //.delay(0.25).delaytime(0.5).delayfb(0.4)
            .room(2)
            .gain(2)
            .orbit(3)
            .postgain(0.4),
    )

// Arrangement
stack(
    introBass.mask("<1 0!15>"),
    susBass.late(1).mask("<0!1 0 0 0 0 [0] 0!15>"),
    bass.late(1).mask("<0!1 1!15>").psustain("<0!16 1!16>"),          // Bass enters after 1 cycle
    crushedDrums.late(1).mask("<0!1 1!15>"),  // Drums enter after 1 cycle
    clicks.late(1).mask("<0 1!15>"),        // Clicks enter after 1 cyclessss
    rimshots.late(1).mask("<0 1!15>"),      // Rimshots enter after 1 cycle
    mainKick.late(1).mask("<0!9 1!15>"),      // Kick enters after 1 cycle
    lead.late(1).mask("<0!5 1!16>")          // Lead enters after 9 cycles
)

.hpf(saw.range(1000, 3200).mul("<0.3 [0.9] 0 0 [0 0.9] 0 0 0 [0 0.9] 0!8>")) // Sweeping HPF
.hpq(20)
.room("<0.5 [0.6 0] 0 0 0 0 0 0 [0 0.9] 0!8>")  // Reverb wash transition before drops

.compressor("-10:5:5:.02:.02")
    .cps(0.41)
    .play()


