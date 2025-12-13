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
    .hpf(500)
    .lpq(8)
    .gain(0.55)
    .orbit(2)

// Bass Line
const slideMask = `[0 1 0 0] [0 1 0 0] [0 0 0 0] [0 0 0 0]
                   [0 1 0 0] [0 1 0 0] [0 0 0 0] [0 0 0 0]
                   [0 1 0 0] [0 1 0 0] [0 0 0 0] [0 0 0 0]
                   [0 1 0 0] [0 1 0 0] [0 0 0 0] [0 0 0 0]
                   [0 1 0 0] [0 1 0 0] [0 0 0 0] [0 0 0 0]
                   [0 1 0 0] [0 1 0 0] [0 0 0 0] [0 0 0 0]
                   [0 1 0 0] [0 1 0 0] [0 0 0 0] [0 0 0 0]
                   [0 1 0 0] [0 1 0 0] [0 0 0 0] [0 0 0 0]`

const bass = 
/*
note(`
        [a1 ~ a1 b1] [~ c1 ~ a1] [~ a1 ~ c1] [b1 ~ c1 ~]
        [a1 ~ b1 ~] [c1 ~ ~ a1] [~ b1 ~ c1] [b1 ~ a1 ~]
        [a1 ~ a1 ~] [c1 ~ ~ c1] [~ c1 ~ a1] [b1 ~ a1 ~]
        [a1 ~ a1 ~] [c1 ~ a1 ~] [a1 ~ ~ a1] [c1 ~ b1 ~]
        [a1 ~ a1 b1] [~ c1 ~ a1] [~ a1 ~ ~] [b1 ~ c1 ~]
        [a1 ~ a1 b1] [~ c1 ~ b1] [~ c1 b1 ~] [a1 ~ b1 ~]
        [a1 ~ ~ b1] [~ b1 c1 ~] [~ c1 a1 ~] [b1 a1 ~ c1]
        [a1 ~ b1 ~] [~ ~ b1 ~] [a1 ~ ~ b1] [~ ~ a1 b1]
    `)
    */
   note(`
        [eb2 e2 f2 e2] [g2 e2 eb2 e2] [eb2 e2 f2 e2] [g2 e2 eb2 e2]
        [eb2 e2 f2 e2] [g2 e2 eb2 e2] [eb2 e2 f2 e2] [g2 e2 eb2 e2]
        [eb2 e2 f2 e2] [g2 e2 eb2 e2] [eb2 e2 f2 e2] [g2 e2 eb2 e2]
        [eb2 e2 f2 e2] [g2 e2 eb2 e2] [eb2 e2 f2 e2] [g2 e2 eb2 e2]
        [eb2 e2 f2 e2] [g2 e2 eb2 e2] [eb2 e2 f2 e2] [g2 e2 eb2 e2]
        [eb2 e2 f2 e2] [g2 e2 eb2 e2] [eb2 e2 f2 e2] [g2 e2 eb2 e2]
        [eb2 e2 f2 e2] [g2 e2 eb2 e2] [eb2 e2 f2 e2] [g2 e2 eb2 e2]
        [eb2 e2 f2 e2] [g2 e2 eb2 e2] [eb2 e2 f2 e2] [g2 e2 eb2 e2]
    `)

        .s("sawtooth")
        .slow(8)
        // Acid Filter
        .lpf("<600 700 1200 900 2500 1000 1500 700 800 600 1200 300 2500 600 1500 400>") // Sequenced filter cutoff
        .lpq(12)      
        .lpenv("<800 600 1200 300 2500 600 1500 400 600 700 1200 900 2500 1000 1500 700>")
        .lpdecay(0.18)
        .sometimes(x => x.lpdecay(0.08))
        .release(0.05)  
        //.penv("<8 8 8 8 5 5 5 5>")
        .penv("<12>")        
        .pattack(0).pdecay(200)          // Quick slides
        .legato(0.4)
        .when(slideMask, x => x.ply(2).legato(2).penv("<0>"))
        //.rarely(x => x.ply(2).legato(2).penv("<0>"))
        //
        //.rarely(x => x.legato(0.5))
        .sometimesBy(0.05, x => x.ply(0.5).penv("<17>").room(0.1).vowel("<i aa u o>"))
        //.sometimes(x => x.ply(2))
        .hpf(50)
        .gain(0.2)
        .crush(13)
        .swingBy(1, 0.2)
        .distort("2.5:0.6")
        //.delay(3).delaytime(0.5).delayfb(0)
        
        .room(0.25)
        .orbit(2).compressor("-20:30:10:.002:.1").lpf(5).postgain(0.6)
const pmult = 1
const poffset = 12
// Helper to scale penv numeric pattern values by pmult while preserving '~' and arbitrarily nested bracket groups
const scalePenv = (values) => {
    const fmt = (v) => {
        if (Array.isArray(v)) {
            return '[' + v.map(fmt).join(' ') + ']';
        }
        return v === '~' ? '~' : (v * pmult) + poffset;
    };
    return '<' + values.map(fmt).join(' ') + '>';
};
/*
const sussybass = stack(
   s(`
        [eb2] [bb2] [eb2] [eb2]
    `)
        .s("sawtooth")
        .slow(1)
        .lpf("<600 700 1200 900 2500 1000 1500 700 800 600 1200 300 2500 600 1500 400>") // Sequenced filter cutoff
        .lpq(12)      
        .lpenv("<800 600 1200 300 2500 600 1500 400 600 700 1200 900 2500 1000 1500 700>")
        .lpdecay(2)
        .release(0.05)  
        //.penv("<-0.2 -0.2 4.8 4.8 -6.2 -6.2 -5.2 -5.2>")
        .penv(scalePenv([-7, -3, [-4, -4], -5, -3, -6, -5, -8]))      
        .pattack(0).pdecay(200).sustain(1)          // Quick slides
        //.hpf(100)
        .gain(0.2)
        .crush(13)
        .distort("2.5:0.1")
        //.delay(3).delaytime(0.5).delayfb(0)
        .room(0.25),

    s(`
        [eb2] [eb2] [eb2] [eb2]
    `)
        .s("sawtooth")
        .late('<0.2 0.18 0.1 0.15 0.2 0.18 0.1 0.15 0.2 0.18 0.1 0.15 0.2 0.18 0.1 0.15 0.2 0.18 0.1 0.15 0.2 0.18 0.1 0.15 0.2 0.18 0.1 0.15 0.2 0.18 0.1 0.15>')
        //.slow(1)
        .lpf("<600 700 1200 900 2500 1000 1500 700 800 600 1200 300 2500 600 1500 400>") // Sequenced filter cutoff
        .lpq(12)      
        .lpenv("<800 600 1200 300 2500 600 1500 400 600 700 1200 900 2500 1000 1500 700>")
        .lpdecay(2)
        .release(0.05)  
        .penv(scalePenv([9, 12, [[16, 17], 17], 16, 6, 6, 7, 8]))            
        .pattack(0).pdecay(200).sustain(1)          // Quick slides
        //.hpf(100)
        .gain(0.1)
        .crush(13)
        .distort("2.5:0.1")
        //.delay(3).delaytime(0.5).delayfb(0)
        .room(0.25),
    s(`
        [eb2] [eb2] [eb2] [eb2]
    `)
    .s("sawtooth")
        .late('<0.2 0.18 0.1 0.15 0.2 0.18 0.1 0.15 0.2 0.18 0.1 0.15 0.2 0.18 0.1 0.15 0.2 0.18 0.1 0.15 0.2 0.18 0.1 0.15 0.2 0.18 0.1 0.15 0.2 0.18 0.1 0.15>')
        //.slow(1)
        .lpf("<600 700 1200 900 2500 1000 1500 700 800 600 1200 300 2500 600 1500 400>") // Sequenced filter cutoff
        .lpq(12)      
        .lpenv("<400 600 700 1200 900 2500 1000 1500 700 800 600 1200 300 2500 600 1500 >")
        .lpdecay(2)
        .release(0.05)  
        .penv(scalePenv([9.2, 12.2, 16.2, 17.2, 6.2, 6.2, 7.2, 8.2]))       
        .pattack(0).pdecay(200).sustain(1)          // Quick slides
        //.hpf(100)
        .gain(0.0)
        .crush(13)
        .distort("2.5:0.1")
        //.delay(3).delaytime(0.5).delayfb(0)
        .room(0.25)
    )
    .orbit(3)
    //.ply(2)
    .decay(1).sustain(0.0)
    .compressor("-5:30:10:.002:.1") 
    .postgain(1)
    */

const sussybass = stack(
   s(`
        [eb2] [bb2] [eb2] [eb2]
    `)
        .s("sawtooth")
        //.late(0.05)
        .slow(1)
        .lpf("<600 700 1200 900 2500 1000 1500 700 800 600 1200 300 2500 600 1500 400>") // Sequenced filter cutoff
        .lpq(12)      
        .lpenv("<800 600 1200 300 2500 600 1500 400 600 700 1200 900 2500 1000 1500 700>")
        .lpdecay(2)
        .release(0.05)  
        //.penv("<-0.2 -0.2 4.8 4.8 -6.2 -6.2 -5.2 -5.2>")
        .penv(scalePenv([-7, -3, [-8, -8], -5, -3, -6, -5, -8]))      
        .pattack(0).pdecay(200).sustain(1)          // Quick slides
        //.hpf(100)
        .gain(0.2)
        .crush(13)
        .distort("2.5:0.1")
        //.delay(3).delaytime(0.5).delayfb(0)
        .room(0.95),

    s(`
        [eb2] [eb2] [eb2] [eb2]
    `)
        .s("sawtooth")
        .late('<0.2 0.18 0.1 0.15 0.2 0.18 0.1 0.15 0.2 0.18 0.1 0.15 0.2 0.18 0.1 0.15 0.2 0.18 0.1 0.15 0.2 0.18 0.1 0.15 0.2 0.18 0.1 0.15 0.2 0.18 0.1 0.15>')
        //.late('<0.2>') 
        .slow(1)
        .lpf("<600 700 1200 900 2500 1000 1500 700 800 600 1200 300 2500 600 1500 400>") // Sequenced filter cutoff
        .lpq(12)      
        .lpenv("<800 600 1200 300 2500 600 1500 400 600 700 1200 900 2500 1000 1500 700>")
        .lpdecay(2)
        .release(0.05)  
        .penv(scalePenv([9, 12, [7, 7], 11, [5, 5], 6, 7, 8]))            
        .pattack(0).pdecay(200).sustain(1)          // Quick slides
        //.hpf(100)
        .gain(0.1)
        .pan(0.35)
        .crush(13)
        .distort("2.5:0.1")
        .vibrato(1).vibmod(0.2)
        .delay(3).delaytime(0.5).delayfb(0)
        .room(0.95),
    s(`
        [eb2] [eb2] [eb2] [eb2]
    `)
    .s("sawtooth")
        .late('<0.15 0.2 0.18 0.2 0.18 0.1 0.15 0.2 0.18 0.1 0.15 0.1 0.2 0.18 0.1 0.15 0.2 0.18 0.1 0.15 0.2 0.18 0.1 0.15 0.2 0.18 0.1 0.15 0.2 0.18 0.1 0.15>')
        //.late('<0.18>') 
        .slow(1)
        .lpf("<600 700 1200 900 2500 1000 1500 700 800 600 1200 300 2500 600 1500 400>") // Sequenced filter cutoff
        .lpq(12)      
        .lpenv("<400 600 700 1200 900 2500 1000 1500 700 800 600 1200 300 2500 600 1500 >")
        .lpdecay(2)
        .release(0.05)  
        .penv(scalePenv([9.2, 12.2, 7.2, 11.2, [5.2, 5.2], 6.2, 7.2, 8.2]))       
        .pattack(0).pdecay(200).sustain(1)          // Quick slides
        //.hpf(100)
        .gain(0.1)
        .pan(0.65)
        .crush(13)
        .distort("2.5:0.1")
        .vibrato(1).vibmod(0.2)
        .delay(3).delaytime(0.5).delayfb(0)
        .room(0.95)
    )
    .orbit(3)
    //.ply(1.2)
    .decay(0.2).sustain(0.13)
    .compressor("-5:30:10:.002:.1") 
    .postgain(1)

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
            .gain(0.1)
            .postgain(0)
            //.room(0.2)
            .duckorbit("2:3").duckdepth(0.6).duckonset(0.01).duckattack(0.25),

        // Layered Clap
        s("~ cp ~ cp ~ cp ~ cp")
            .slow(2)
            .speed(2)
            .late(1.4/174)
            .bank("RolandTR909")
            .pan(0.7)
            //.hpf(10000)
            .gain(0.7),
        s("~ cp ~ cp ~ cp ~ cp")
            .slow(2)
            .speed(2)
            //.late(1/64)
            .bank("RolandTR909")
            .pan(0.3)
            //.hpf(10000)
            .gain(0.7),

        // crushed hats
        s("hh*8")
            .bank("RolandTR909")
            //.struct("x(13,16)") // Euclidean rhythm for irregularity
            //.speed(perlin.range(0.4, 0.7)) // Wild pitch modulation
            .speed(0.9)
            .gain(rand.range(0.08, 0.08)) // Random velocity
            .pan(sine.fast(8)) // Rapid panning
            //.crush(4) // Heavy bitcrushing
            .hpf(4000)
            .almostNever(x => x.ply(8).pan(sine.fast(2)).room(0.1).penv("<2>").psustain(0).pdecay(0.01)),
        s("hh*8")
            .bank("RolandTR909")
            //.struct("x(13,16)") // Euclidean rhythm for irregularity
            //.speed(perlin.range(0.4, 0.7)) // Wild pitch modulation
            .late(1/14.5)
            .speed(0.9)
            .gain(rand.range(0.08, 0.05)) // Random velocity
            .pan(sine.fast(8)) // Rapid panning
            //.crush(4) // Heavy bitcrushing
            .hpf(4000)
            //.almostNever(x => x.ply(8).pan(sine.fast(2)).room(0.2).penv("<2>").psustain(0).pdecay(0.01)),
    )
        .crush(15.8)
        .compressor("-20:10:10:.002:.02")
        //.lpf(2000)
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
            .speed(0.7)
            //.penv("<-5 12>")
            .penv("<-5>")
            .sustain(0.1)
            .attack(0).decay(0.25)
            .pan(0.5)
            .distort("1.2:1")
            .hpf(10)
            //.lpf(5000)
            .gain(1),
        s("sd:2 sd:2 sd:2 sd:2")
            .early(1/134)
            .bank("RolandTR909")
            .sustain(0.1)
            .attack(0).decay(0.02).release(0.02)
            .pan(0.5)
            .hpf(500)
            //.crush(9)
            .distort("2.9:0.4")
            .gain(0.1),
        

    ).postgain(1).compressor("-10:5:5:.002:.02")
     .duckorbit("2:3").duckdepth(0.8).duckonset(0.01).duckattack(0.25)

// Lead Synth

const chords = stack(
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
            .tremolodepth(0.9)      // Maximum pulsing effect
            .tremoloskew(0.01)     // Sharp attack, quick decay (sawtooth-like envelope)
            .tremolophase(0)
            //.delay(0.25).delaytime(0.5).delayfb(0.4)
            //.room(1)
            .pan(0.75)
            .gain(2)
            .orbit(3)
            .postgain(0.2),

        note("[[[a4, c5, e5] [b4, e5]], c4] [[[g5, c5, e5] [d5, c5]], b4]")
            .slow(4)
            .s("sawtooth")              // Synth waveform (sawtooth is rich in harmonics)
            .fm(1)
            .fmi(1)
            .fmh(5.02)
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
            .pan(0.25)
            //.room(2)
            .gain(2)
            .orbit(3)
            .postgain(0.1),
    )

const lead = stack(
        note("[[[[[[a5, c5, e5, c6, a6] [a5, c5, e5, c6, ab6] ~ ~]] ~] ~]] [~]")
            .slow(4)
            .s("sawtooth")              // Synth waveform (sawtooth is rich in harmonics)
            .fm(1)
            .fmi(1)
            .fmh(4.6)
            .vowel("<aa uh aa aa>")
            .fmdecay(0.1)
            //.fmenv(1)
            .legato(0.5)                // Controls note length relative to step size
            //.attack(0.05).decay(0.9).sustain(0.7).release(1) // High sustain allows holding notes
            //.lpf(2500).lpq(1)           // Low pass filter to tame harshness
            //.lpenv(1500).lpattack(0.05).lpdecay(0.4) // Filter envelope for articulation
            
            //.vibrato(4).vibmod(0.2)   // Vibrato for expression
            .penv("<12>")
            .pdecay(100).psustain(0)
            //.pattack(0).pdecay(0).psustain(0) // Subtle pitch envelope for movement
            //.often(x => x.pdecay(0.25))
            //.sometimes(x => x.penv("<12>"))

            //.delay(0.25).delaytime(0.5).delayfb(0.4)
            .pan(0.75)
            //.room(2)
            .gain(1)
            //.orbit(2)
            .postgain(0.2),

        note("[[[[[[a5, c5, e5, c6, a6] [a5, c5, e5, c6, a6] ~ ~]] ~] ~]] [~]")
            .slow(4)
            .s("sawtooth")              // Synth waveform (sawtooth is rich in harmonics)
            .fm(1)
            .fmi(1)
            .fmh(5.02)
            .vowel("<aa uh aa aa>")
            .fmdecay(0.1)
            //.fmenv(1)
            .legato(0.5)                // Controls note length relative to step size
            //.attack(0.05).decay(0.9).sustain(0.7).release(1) // High sustain allows holding notes
            //.lpf(2500).lpq(1)           // Low pass filter to tame harshness
            //.lpenv(1500).lpattack(0.05).lpdecay(0.4) // Filter envelope for articulation
            
            //.vibrato(4).vibmod(0.2)   // Vibrato for expression
            .penv("<12>")
            .pdecay(100).psustain(0)
            //.pattack(0).pdecay(0).psustain(0) // Subtle pitch envelope for movement
            //.often(x => x.pdecay(0.25))
            //.sometimes(x => x.penv("<12>"))

            //.delay(0.25).delaytime(0.5).delayfb(0.4)
            .pan(0.25)
            //.room(2)
            .gain(1)
            //.orbit(1)
            .postgain(0.2),
    )

// Noise Riser/Sweep
const noiseRiser = s("white")
    .lpf(sine.slow(8).range(200, 2000))
    .lpq(8)
    .gain(0.15)
    .crush(8)
    .postgain(0.3)

// Sub Bass Layer
const sub = note("a0!4")
    .s("sine")
    .lpf(80)
    .gain(0.6)
    .decay(0.3).sustain(0.8)
    .orbit(2)

// Pitched Noise Hit
const noiseHit = s("white")
    .struct("~ ~ [~ 1] [1 ~]")
    .decay(0.01).sustain(0)
    .lpf(400).lpq(400)
    .lpenv(2).lpdecay(1)
    .legato(2)
    //.penv("<24>").pdecay(0.5).psustain(0)
    //.crush(8)
    .gain(0.1)

// Arrangement
stack(
    introBass.mask("<1 0!15>"),
    //susBass.late(1).mask("<0!1 1 0 0 0 [0] 0!15>"),
    
    //bass.late(1).mask("<0!1 1!15>").psustain("<0!16 1!16>"), 
    sussybass.late(1).mask("<0!1 1!15>"),
    chords.late(1).mask("<0!1 1!15>"),           // Bass enters after 1 cycle
    crushedDrums.late(1).mask("<0!1 1!15>"),  // Drums enter after 1 cycle
    clicks.late(1).mask("<0 1!15>"),        // Clicks enter after 1 cyclessss
    rimshots.late(1).mask("<0 1!15>"),      // Rimshots enter after 1 cycle
    mainKick.late(1).mask("<0!5 1!15>"),      // Kick enters after 1 cycle
    lead.late(1.435).mask("<1!5 1!11>"),          // Lead enters after 9 cycles
    noiseRiser.mask("<0!7 1>"),                   // Riser before drops
    //sub.mask("<0!1 1!15>"),                       // Sub reinforces bass
    //noiseHit.mask("<0!1 1!1>")                   // Noise hits after 2 cycles
)

.hpf(saw.range(1000, 3200).mul("<0.3 [0.9] 0 0 [0 0.9] 0 0 0 [0 0.9] 0!8>")) // Sweeping HPF
.hpq(20)
.phaser("<0.5 [0.6 0] 0 0 0 0 0 0 [0 0.9] 0!8>")
.phaserdepth("<0.5 [0.6 0] 0 0 0 0 0 0 [0 0.9] 0!8>")   // Reverb wash transition before drops

.compressor("-25:10:5:.02:.02")
    .cps(0.41)
    .play()


