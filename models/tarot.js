const tarot = module.exports = {

  '-': {
    key: -2,
    hebrew: '־',
    name: 'hyphen',
    bw: '/img/1x1.png',
    color: '/img/1x1.png',
    class: 'spacer',
    'letter-value': 0,
  },
  '|': {
    key: -2,
    hebrew: '׀',
    name: 'pipe',
    bw: '/img/1x1.png',
    color: '/img/1x1.png',
    class: 'spacer',
    'letter-value': 0,
  },
  _: {
    key: -1,
    hebrew: ' ',
    name: 'space',
    bw: '/img/1x1.png',
    color: '/img/1x1.png',
    class: 'spacer',
    'letter-value': 0,
  },
  aleph: {
    key: 0,
    name: 'The Fool',
    hebrew: 'א',
    bw: '/img/200p/0-the-fool-bw.jpg',
    color: '/img/323x522/0-the-fool.png',
    'letter-name': 'aleph',
    'letter-value': 1,
  },
  beth: {
    key: 1,
    name: 'The Magician',
    hebrew: 'ב',
    bw: '/img/200p/1-the-magician-bw.jpg',
    color: '/img/323x522/1-the-magician.png',
    'letter-name': 'beth',
    'letter-value': 2,
  },
  gimel: {
    key: 2,
    name: 'High Priestess',
    hebrew: 'ג',
    bw: '/img/200p/2-high-priestess-bw.jpg',
    color: '/img/323x522/2-high-priestess.png',
    'letter-name': 'gimel',
    'letter-value': 3,
  },
  daleth: {
    key: 3,
    name: 'The Empress',
    hebrew: 'ד',
    bw: '/img/200p/3-the-empress-bw.jpg',
    color: '/img/323x522/3-the-empress.png',
    'letter-name': 'daleth',
    'letter-value': 4,
  },
  heh: {
    key: 4,
    name: 'The Emperor',
    hebrew: 'ה',
    bw: '/img/200p/4-the-emperor-bw.jpg',
    color: '/img/323x522/4-the-emperor.png',
    'letter-name': 'heh',
    'letter-value': 5,
  },
  vav: {
    key: 5,
    name: 'Hierophant',
    hebrew: 'ו',
    bw: '/img/200p/5-hierophant-bw.jpg',
    color: '/img/323x522/5-hierophant.png',
    'letter-name': 'vav',
    'letter-value': 6,
  },
  zain: {
    key: 6,
    name: 'The Lovers',
    hebrew: 'ז',
    bw: '/img/200p/6-the-lovers-bw.jpg',
    color: '/img/323x522/6-the-lovers.png',
    'letter-name': 'zain',
    'letter-value': 7,
  },
  cheth: {
    key: 7,
    name: 'The Chariot',
    hebrew: 'ח',
    bw: '/img/200p/7-the-chariot-bw.jpg',
    color: '/img/323x522/7-the-chariot.png',
    'letter-name': 'cheth',
    'letter-value': 8,
  },
  teth: {
    key: 8,
    name: 'Strength',
    hebrew: 'ט',
    bw: '/img/200p/8-strength-bw.jpg',
    color: '/img/323x522/8-strength.png',
    'letter-name': 'teth',
    'letter-value': 9,
  },
  yod: {
    key: 9,
    name: 'The Hermit',
    hebrew: 'י',
    bw: '/img/200p/9-the-hermit-bw.jpg',
    color: '/img/323x522/9-the-hermit.png',
    'letter-name': 'yod',
    'letter-value': 10,
  },
  kaph: {
    key: 10,
    name: 'Wheel of Fortune',
    hebrew: 'כ',
    bw: '/img/200p/10-wheel-of-fortune-bw.jpg',
    color: '/img/323x522/10-wheel-of-fortune.png',
    'letter-name': 'kaph',
    'letter-value': 20,
  },
  kaph_final: {
    key: 10,
    name: 'Wheel of Fortune',
    hebrew: 'ך',
    bw: '/img/200p/10-wheel-of-fortune-bw.jpg',
    color: '/img/323x522/10-wheel-of-fortune.png',
    'letter-name': 'kaph-final',
    'letter-value': 500,
  },
  lamed: {
    key: 11,
    name: 'Justice',
    hebrew: 'ל',
    bw: '/img/200p/11-justice-bw.jpg',
    color: '/img/323x522/11-justice.png',
    'letter-name': 'lamed',
    'letter-value': 30,
  },
  mem: {
    key: 12,
    name: 'Hanged Man',
    hebrew: 'מ',
    bw: '/img/200p/12-hanged-man-bw.jpg',
    color: '/img/323x522/12-hanged-man.png',
    'letter-name': 'mem',
    'letter-value': 40,
  },
  mem_final: {
    key: 12,
    name: 'Hanged Man',
    hebrew: 'ם',
    bw: '/img/200p/12-hanged-man-bw.jpg',
    color: '/img/323x522/12-hanged-man.png',
    'letter-name': 'mem-final',
    'letter-value': 600,
  },
  nun: {
    key: 13,
    name: 'Death',
    hebrew: 'נ',
    bw: '/img/200p/13-death-bw.jpg',
    color: '/img/323x522/13-death.png',
    'letter-name': 'nun',
    'letter-value': 50,
  },
  nun_final: {
    key: 13,
    name: 'Death',
    hebrew: 'ן',
    bw: '/img/200p/13-death-bw.jpg',
    color: '/img/323x522/13-death.png',
    'letter-name': 'nun-final',
    'letter-value': 700,
  },
  samekh: {
    key: 14,
    name: 'Temperance',
    hebrew: 'ס',
    bw: '/img/200p/14-temperance-bw.jpg',
    color: '/img/323x522/14-temperance.png',
    'letter-name': 'samekh',
    'letter-value': 60,
  },
  ayin: {
    key: 15,
    name: 'The Devil',
    hebrew: 'ע',
    bw: '/img/200p/15-the-devil-bw.jpg',
    color: '/img/323x522/15-the-devil.png',
    'letter-name': 'ayin',
    'letter-value': 70,
  },
  peh: {
    key: 16,
    name: 'The Tower',
    hebrew: 'פ',
    bw: '/img/200p/16-the-tower-bw.jpg',
    color: '/img/323x522/16-the-tower.png',
    'letter-name': 'peh',
    'letter-value': 80,
  },
  peh_final: {
    key: 16,
    name: 'The Tower',
    hebrew: 'ף',
    bw: '/img/200p/16-the-tower-bw.jpg',
    color: '/img/323x522/16-the-tower.png',
    'letter-name': 'peh-final',
    'letter-value': 800,
  },
  tzaddi: {
    key: 17,
    name: 'The Star',
    hebrew: 'צ',
    bw: '/img/200p/17-the-star-bw.jpg',
    color: '/img/323x522/17-the-star.png',
    'letter-name': 'tzaddi',
    'letter-value': 90,
  },
  tzaddi_final: {
    key: 17,
    name: 'The Star',
    hebrew: 'ץ',
    bw: '/img/200p/17-the-star-bw.jpg',
    color: '/img/323x522/17-the-star.png',
    'letter-name': '',
    'letter-value': 900,
  },
  qoph: {
    key: 18,
    name: 'The Moon',
    hebrew: 'ק',
    bw: '/img/200p/18-the-moon-bw.jpg',
    color: '/img/323x522/18-the-moon.png',
    'letter-name': 'qoph',
    'letter-value': 100,
  },
  resh: {
    key: 19,
    name: 'The Sun',
    hebrew: 'ר',
    bw: '/img/200p/19-the-sun-bw.jpg',
    color: '/img/323x522/19-the-sun.png',
    'letter-name': 'resh',
    'letter-value': 200,
  },
  shin: {
    key: 20,
    name: 'Judgement',
    hebrew: 'ש',
    bw: '/img/200p/20-judgement-bw.jpg',
    color: '/img/323x522/20-judgement.png',
    'letter-name': 'shin',
    'letter-value': 300,
  },
  tav: {
    key: 21,
    name: 'The World',
    hebrew: 'ת',
    bw: '/img/200p/21-the-world-bw.jpg',
    color: '/img/323x522/21-the-world.png',
    'letter-name': 'tav',
    'letter-value': 400,
  },
};
tarot['key-0'] = tarot.aleph;
tarot['key-1'] = tarot.beth;
tarot['key-2'] = tarot.gimel;
tarot['key-3'] = tarot.daleth;
tarot['key-4'] = tarot.heh;
tarot['key-5'] = tarot.vav;
tarot['key-6'] = tarot.zain;
tarot['key-7'] = tarot.cheth;
tarot['key-8'] = tarot.teth;
tarot['key-9'] = tarot.yod;
tarot['key-10'] = tarot.kaph;
tarot['key-11'] = tarot.lamed;
tarot['key-12'] = tarot.mem;
tarot['key-13'] = tarot.nun;
tarot['key-14'] = tarot.samekh;
tarot['key-15'] = tarot.ayin;
tarot['key-16'] = tarot.peh;
tarot['key-17'] = tarot.tzaddi;
tarot['key-18'] = tarot.qoph;
tarot['key-19'] = tarot.resh;
tarot['key-20'] = tarot.shin;
tarot['key-21'] = tarot.tav;

tarot.A = tarot.aleph;
tarot.B = tarot.beth;
tarot.G = tarot.gimel;
tarot.D = tarot.daleth;
tarot.H = tarot.heh;
tarot.V = tarot.vav;
tarot.Z = tarot.zain;
tarot.Ch = tarot.cheth;
tarot.T = tarot.teth;
tarot.I = tarot.yod;
tarot.K = tarot.kaph;
tarot.Kf = tarot.kaph_final;
tarot.L = tarot.lamed;
tarot.M = tarot.mem;
tarot.Mf = tarot.mem_final;
tarot.N = tarot.nun;
tarot.Nf = tarot.nun_final;
tarot.S = tarot.samekh;
tarot.O = tarot.ayin;
tarot.P = tarot.peh;
tarot.Pf = tarot.peh_final;
tarot.Tz = tarot.tzaddi;
tarot.Tf = tarot.tzaddi_final;
tarot.Q = tarot.qoph;
tarot.R = tarot.resh;
tarot.Sh = tarot.shin;
tarot.Th = tarot.tav;

tarot[' '] = tarot._;
// tarot['-'] = tarot['־'];
