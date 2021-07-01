module.exports = function (router) {
  const tones = {
    GSharp: {
      note: 'G#',
      src: '/media/AFlat.mp3',
      color: 'ef0000',
      name: 'red'
    },
    ANatural: {
      note: 'A',
      src: '/media/ANatural.mp3',
      color: 'ff7700',
      name: 'orange',
    },
    ASharp: {
      note: 'A#',
      src: '/media/BFlat.mp3',
      color: 'ffef00',
      name: 'yellow',
    },
    BNatural: {
      note: 'B',
      src: '/media/BNatural.mp3',
      color: 'a9ff00',
      name: 'yellow-green',
    },
    CNatural: {
      note: 'C',
      src: '/media/CNatural.mp3',
      color: '3aff00',
      name: 'green',
    },
    CSharp: {
      note: 'C#',
      src: '/media/CSharp.mp3',
      color: '00ffec',
      name: 'cyan',
    },
    DNatural: {
      note: 'D',
      src: '/media/DNatural.mp3',
      color: '008eff',
      name: 'azure',
    },
    DSharp: {
      note: 'D#',
      src: '/media/EFlat.mp3',
      color: '0f00fa',
      name: 'blue',
    },
    ENaturalHigh: {
      note: 'E',
      src: '/media/ENaturalHigh.mp3',
      color: '6200bd',
      name: 'violet',
    },
    ENaturalLow: {
      note: 'E',
      src: '/media/ENaturalLow.mp3',
      color: '6200bd',
      name: 'violet',
    },
    FNatural: {
      note: 'F',
      src: '/media/FNatural.mp3',
      color: 'ff00ff',
      name: 'magenta',
    },
    FSharp: {
      note: 'F#',
      src: '/media/FSharp.mp3',
      color: 'ff007f',
      name: 'rose',
    },
    GNatural: {
      note: 'G',
      src: '/media/GNatural.mp3',
      color: 'a80000',
      name: 'brown',
    }
  }
  tones.AFlat = JSON.parse(JSON.stringify(tones.GSharp));
  tones.AFlat.note = 'A♭';
  tones.BFlat = JSON.parse(JSON.stringify(tones.ASharp));
  tones.BFlat.note = 'B♭';
  tones.DFlat = JSON.parse(JSON.stringify(tones.CSharp));
  tones.DFlat.note = 'D♭';
  tones.EFlat = JSON.parse(JSON.stringify(tones.DSharp));
  tones.EFlat.note = 'E♭';
  tones.GFlat = JSON.parse(JSON.stringify(tones.FSharp));
  tones.GFlat.note = 'G♭';
  tones.ENatural = tones.ENaturalLow;
  
  router.get('/tone/:name', (req, res) => {
    const name = req.params.name;
    res.locals.title = name;
    res.locals.tone = tones[name];
    res.render('tone');
  });
};
