import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// https://api.coinmarketcap.com/v1/ticker/?convert=EUR&limit=50
const coins = [
  {
    id: 'bitcoin',
    name: 'Bitcoin',
    symbol: 'BTC',
    rank: '1',
    price_usd: '17012.9',
    price_btc: '1.0',
    '24h_volume_usd': '16895200000.0',
    market_cap_usd: '285603837582',
    available_supply: '16787487.0',
    total_supply: '16787487.0',
    max_supply: '21000000.0',
    percent_change_1h: '-0.08',
    percent_change_24h: '-0.01',
    percent_change_7d: '27.56',
    last_updated: '1515325161',
    price_eur: '14141.802996',
    '24h_volume_eur': '14043966048.0',
    market_cap_eur: '237405333952'
  },
  {
    id: 'ripple',
    name: 'Ripple',
    symbol: 'XRP',
    rank: '2',
    price_usd: '3.22644',
    price_btc: '0.00019275',
    '24h_volume_usd': '2383770000.0',
    market_cap_usd: '124989526500',
    available_supply: '38739144847.0',
    total_supply: '99993093880.0',
    max_supply: '100000000000',
    percent_change_1h: '-0.11',
    percent_change_24h: '4.56',
    percent_change_7d: '44.5',
    last_updated: '1515325141',
    price_eur: '2.6819459856',
    '24h_volume_eur': '1981484974.8',
    market_cap_eur: '103896294008'
  },
  {
    id: 'ethereum',
    name: 'Ethereum',
    symbol: 'ETH',
    rank: '3',
    price_usd: '1129.41',
    price_btc: '0.0674717',
    '24h_volume_usd': '5214080000.0',
    market_cap_usd: '109357361104',
    available_supply: '96826981.0',
    total_supply: '96826981.0',
    max_supply: null,
    percent_change_1h: '0.05',
    percent_change_24h: '8.85',
    percent_change_7d: '54.75',
    last_updated: '1515325149',
    price_eur: '938.8107684',
    '24h_volume_eur': '4334151859.2',
    market_cap_eur: '90902212844.0'
  },
  {
    id: 'bitcoin-cash',
    name: 'Bitcoin Cash',
    symbol: 'BCH',
    rank: '4',
    price_usd: '3017.42',
    price_btc: '0.180262',
    '24h_volume_usd': '1979530000.0',
    market_cap_usd: '50988966644.0',
    available_supply: '16898200.0',
    total_supply: '16898200.0',
    max_supply: '21000000.0',
    percent_change_1h: '0.26',
    percent_change_24h: '14.18',
    percent_change_7d: '21.94',
    last_updated: '1515325152',
    price_eur: '2508.2002008',
    '24h_volume_eur': '1645464517.2',
    market_cap_eur: '42384068633.0'
  },
  {
    id: 'cardano',
    name: 'Cardano',
    symbol: 'ADA',
    rank: '5',
    price_usd: '1.01395',
    price_btc: '0.00006057',
    '24h_volume_usd': '250442000.0',
    market_cap_usd: '26288753172.0',
    available_supply: '25927070538.0',
    total_supply: '31112483745.0',
    max_supply: '45000000000.0',
    percent_change_1h: '0.55',
    percent_change_24h: '-0.29',
    percent_change_7d: '43.76',
    last_updated: '1515325154',
    price_eur: '0.842835798',
    '24h_volume_eur': '208177408.08',
    market_cap_eur: '21852263187.0'
  },
  {
    id: 'litecoin',
    name: 'Litecoin',
    symbol: 'LTC',
    rank: '6',
    price_usd: '301.1',
    price_btc: '0.0179879',
    '24h_volume_usd': '1466350000.0',
    market_cap_usd: '16455960535.0',
    available_supply: '54652808.0',
    total_supply: '54652808.0',
    max_supply: '84000000.0',
    percent_change_1h: '-0.25',
    percent_change_24h: '-2.78',
    percent_change_7d: '36.12',
    last_updated: '1515325141',
    price_eur: '250.286364',
    '24h_volume_eur': '1218888774.0',
    market_cap_eur: '13678852635.0'
  },
  {
    id: 'nem',
    name: 'NEM',
    symbol: 'XEM',
    rank: '7',
    price_usd: '1.78066',
    price_btc: '0.00010638',
    '24h_volume_usd': '82136000.0',
    market_cap_usd: '16025939998.0',
    available_supply: '8999999999.0',
    total_supply: '8999999999.0',
    max_supply: null,
    percent_change_1h: '3.01',
    percent_change_24h: '7.1',
    percent_change_7d: '86.6',
    last_updated: '1515325144',
    price_eur: '1.4801558184',
    '24h_volume_eur': '68274728.64',
    market_cap_eur: '13321402364.0'
  },
  {
    id: 'stellar',
    name: 'Stellar',
    symbol: 'XLM',
    rank: '8',
    price_usd: '0.697301',
    price_btc: '0.00004166',
    '24h_volume_usd': '404787000.0',
    market_cap_usd: '12466236483.0',
    available_supply: '17877841108.0',
    total_supply: '103570548975',
    max_supply: null,
    percent_change_1h: '0.9',
    percent_change_24h: '-7.25',
    percent_change_7d: '112.75',
    last_updated: '1515325143',
    price_eur: '0.5796244832',
    '24h_volume_eur': '336475145.88',
    market_cap_eur: '10362434414.0'
  },
  {
    id: 'iota',
    name: 'IOTA',
    symbol: 'MIOTA',
    rank: '9',
    price_usd: '3.99928',
    price_btc: '0.00023892',
    '24h_volume_usd': '153322000.0',
    market_cap_usd: '11116119870.0',
    available_supply: '2779530283.0',
    total_supply: '2779530283.0',
    max_supply: '2779530283.0',
    percent_change_1h: '-0.12',
    percent_change_24h: '-1.22',
    percent_change_7d: '15.43',
    last_updated: '1515325151',
    price_eur: '3.3243615072',
    '24h_volume_eur': '127447379.28',
    market_cap_eur: '9240163481.0'
  },
  {
    id: 'tron',
    name: 'TRON',
    symbol: 'TRX',
    rank: '10',
    price_usd: '0.168401',
    price_btc: '0.00001006',
    '24h_volume_usd': '1786230000.0',
    market_cap_usd: '11072061361.0',
    available_supply: '65748192475.0',
    total_supply: '100000000000',
    max_supply: null,
    percent_change_1h: '-1.96',
    percent_change_24h: '-3.84',
    percent_change_7d: '336.36',
    last_updated: '1515325153',
    price_eur: '0.1399816472',
    '24h_volume_eur': '1484785825.2',
    market_cap_eur: '9203540286.0'
  },
  {
    id: 'dash',
    name: 'Dash',
    symbol: 'DASH',
    rank: '11',
    price_usd: '1378.15',
    price_btc: '0.0823314',
    '24h_volume_usd': '240040000.0',
    market_cap_usd: '10754506088.0',
    available_supply: '7803582.0',
    total_supply: '7803582.0',
    max_supply: '18900000.0',
    percent_change_1h: '0.08',
    percent_change_24h: '11.85',
    percent_change_7d: '34.97',
    last_updated: '1515325141',
    price_eur: '1145.573406',
    '24h_volume_eur': '199530849.6',
    market_cap_eur: '8939575641.0'
  },
  {
    id: 'eos',
    name: 'EOS',
    symbol: 'EOS',
    rank: '12',
    price_usd: '12.7416',
    price_btc: '0.00076119',
    '24h_volume_usd': '915075000.0',
    market_cap_usd: '7500600719.0',
    available_supply: '588670239.0',
    total_supply: '900000000.0',
    max_supply: '1000000000.0',
    percent_change_1h: '-0.26',
    percent_change_24h: '17.21',
    percent_change_7d: '48.26',
    last_updated: '1515325151',
    price_eur: '10.591327584',
    '24h_volume_eur': '760646943.0',
    market_cap_eur: '6234799341.0'
  },
  {
    id: 'monero',
    name: 'Monero',
    symbol: 'XMR',
    rank: '13',
    price_usd: '474.778',
    price_btc: '0.0283635',
    '24h_volume_usd': '310306000.0',
    market_cap_usd: '7393965144.0',
    available_supply: '15573521.0',
    total_supply: '15573521.0',
    max_supply: null,
    percent_change_1h: '-2.47',
    percent_change_24h: '12.92',
    percent_change_7d: '39.67',
    last_updated: '1515325142',
    price_eur: '394.65446472',
    '24h_volume_eur': '257938759.44',
    market_cap_eur: '6146159587.0'
  },
  {
    id: 'qtum',
    name: 'Qtum',
    symbol: 'QTUM',
    rank: '14',
    price_usd: '93.3872',
    price_btc: '0.00557899',
    '24h_volume_usd': '2543790000.0',
    market_cap_usd: '6891034764.0',
    available_supply: '73789928.0',
    total_supply: '100289928.0',
    max_supply: null,
    percent_change_1h: '-0.14',
    percent_change_24h: '49.85',
    percent_change_7d: '53.8',
    last_updated: '1515325150',
    price_eur: '77.627176128',
    '24h_volume_eur': '2114499999.6',
    market_cap_eur: '5728103737.0'
  },
  {
    id: 'neo',
    name: 'NEO',
    symbol: 'NEO',
    rank: '15',
    price_usd: '105.558',
    price_btc: '0.00630607',
    '24h_volume_usd': '204426000.0',
    market_cap_usd: '6861270000.0',
    available_supply: '65000000.0',
    total_supply: '100000000.0',
    max_supply: null,
    percent_change_1h: '-0.32',
    percent_change_24h: '4.86',
    percent_change_7d: '46.21',
    last_updated: '1515325147',
    price_eur: '87.74403192',
    '24h_volume_eur': '169927068.24',
    market_cap_eur: '5703362075.0'
  },
  {
    id: 'bitcoin-gold',
    name: 'Bitcoin Gold',
    symbol: 'BTG',
    rank: '16',
    price_usd: '312.923',
    price_btc: '0.0186942',
    '24h_volume_usd': '245799000.0',
    market_cap_usd: '5241487189.0',
    available_supply: '16750086.0',
    total_supply: '16850086.0',
    max_supply: '21000000.0',
    percent_change_1h: '-1.39',
    percent_change_24h: '10.36',
    percent_change_7d: '20.78',
    last_updated: '1515325155',
    price_eur: '260.11411452',
    '24h_volume_eur': '204317960.76',
    market_cap_eur: '4356933811.0'
  },
  {
    id: 'lisk',
    name: 'Lisk',
    symbol: 'LSK',
    rank: '17',
    price_usd: '37.8362',
    price_btc: '0.00226035',
    '24h_volume_usd': '200838000.0',
    market_cap_usd: '4417300829.0',
    available_supply: '116748004.0',
    total_supply: '116748004.0',
    max_supply: null,
    percent_change_1h: '-2.43',
    percent_change_24h: '26.11',
    percent_change_7d: '95.36',
    last_updated: '1515325146',
    price_eur: '31.450962888',
    '24h_volume_eur': '166944579.12',
    market_cap_eur: '3671837141.0'
  },
  {
    id: 'ethereum-classic',
    name: 'Ethereum Classic',
    symbol: 'ETC',
    rank: '18',
    price_usd: '41.6307',
    price_btc: '0.00248704',
    '24h_volume_usd': '439862000.0',
    market_cap_usd: '4118971515.0',
    available_supply: '98940722.0',
    total_supply: '98940722.0',
    max_supply: null,
    percent_change_1h: '1.71',
    percent_change_24h: '11.3',
    percent_change_7d: '52.67',
    last_updated: '1515325147',
    price_eur: '34.605103068',
    '24h_volume_eur': '365630888.88',
    market_cap_eur: '3423853882.0'
  },
  {
    id: 'raiblocks',
    name: 'RaiBlocks',
    symbol: 'XRB',
    rank: '19',
    price_usd: '26.4468',
    price_btc: '0.00157994',
    '24h_volume_usd': '47455900.0',
    market_cap_usd: '3523990855.0',
    available_supply: '133248289.0',
    total_supply: '133248289.0',
    max_supply: '133248290.0',
    percent_change_1h: '-3.15',
    percent_change_24h: '-18.38',
    percent_change_7d: '74.4',
    last_updated: '1515325148',
    price_eur: '21.983638032',
    '24h_volume_eur': '39447242.316',
    market_cap_eur: '2929282159.0'
  },
  {
    id: 'icon',
    name: 'ICON',
    symbol: 'ICX',
    rank: '20',
    price_usd: '8.15068',
    price_btc: '0.00048693',
    '24h_volume_usd': '160306000.0',
    market_cap_usd: '3085399201.0',
    available_supply: '378545005.0',
    total_supply: '400230000.0',
    max_supply: null,
    percent_change_1h: '-0.49',
    percent_change_24h: '5.67',
    percent_change_7d: '56.44',
    last_updated: '1515325155',
    price_eur: '6.7751712432',
    '24h_volume_eur': '133252759.44',
    market_cap_eur: '2564707232.0'
  },
  {
    id: 'siacoin',
    name: 'Siacoin',
    symbol: 'SC',
    rank: '21',
    price_usd: '0.0980249',
    price_btc: '0.00000586',
    '24h_volume_usd': '356794000.0',
    market_cap_usd: '3077604089.0',
    available_supply: '31396146174.0',
    total_supply: '31396146174.0',
    max_supply: null,
    percent_change_1h: '-0.39',
    percent_change_24h: '8.6',
    percent_change_7d: '228.91',
    last_updated: '1515325145',
    price_eur: '0.0814822179',
    '24h_volume_eur': '296581444.56',
    market_cap_eur: '2558227623.0'
  },
  {
    id: 'bytecoin-bcn',
    name: 'Bytecoin',
    symbol: 'BCN',
    rank: '22',
    price_usd: '0.0165462',
    price_btc: '0.00000099',
    '24h_volume_usd': '39453700.0',
    market_cap_usd: '3032149634.0',
    available_supply: '183253534612',
    total_supply: '183253534612',
    max_supply: '184470000000',
    percent_change_1h: '1.7',
    percent_change_24h: '5.36',
    percent_change_7d: '206.03',
    last_updated: '1515325143',
    price_eur: '0.0137538633',
    '24h_volume_eur': '32795493.588',
    market_cap_eur: '2520444062.0'
  },
  {
    id: 'verge',
    name: 'Verge',
    symbol: 'XVG',
    rank: '23',
    price_usd: '0.181936',
    price_btc: '0.00001087',
    '24h_volume_usd': '280362000.0',
    market_cap_usd: '2639887106.0',
    available_supply: '14509976618.0',
    total_supply: '14509976618.0',
    max_supply: '16555000000.0',
    percent_change_1h: '0.92',
    percent_change_24h: '1.74',
    percent_change_7d: '-8.46',
    last_updated: '1515325143',
    price_eur: '0.1512324806',
    '24h_volume_eur': '233048108.88',
    market_cap_eur: '2194379758.0'
  },
  {
    id: 'zcash',
    name: 'Zcash',
    symbol: 'ZEC',
    rank: '24',
    price_usd: '851.47',
    price_btc: '0.0508672',
    '24h_volume_usd': '474158000.0',
    market_cap_usd: '2558002139.0',
    available_supply: '3004219.0',
    total_supply: '3004219.0',
    max_supply: null,
    percent_change_1h: '0.12',
    percent_change_24h: '25.36',
    percent_change_7d: '73.34',
    last_updated: '1515325148',
    price_eur: '707.7759228',
    '24h_volume_eur': '394139095.92',
    market_cap_eur: '2126313698.0'
  },
  {
    id: 'bitconnect',
    name: 'BitConnect',
    symbol: 'BCC',
    rank: '25',
    price_usd: '386.465',
    price_btc: '0.0230876',
    '24h_volume_usd': '19875800.0',
    market_cap_usd: '2385821307.0',
    available_supply: '6173447.0',
    total_supply: '9451790.0',
    max_supply: '28000000.0',
    percent_change_1h: '-2.43',
    percent_change_24h: '-9.8',
    percent_change_7d: '-0.91',
    last_updated: '1515325148',
    price_eur: '321.2451666',
    '24h_volume_eur': '16521559.992',
    market_cap_eur: '1983190103.0'
  },
  {
    id: 'omisego',
    name: 'OmiseGO',
    symbol: 'OMG',
    rank: '26',
    price_usd: '21.4871',
    price_btc: '0.00128365',
    '24h_volume_usd': '126322000.0',
    market_cap_usd: '2192598514.0',
    available_supply: '102042552.0',
    total_supply: '140245398.0',
    max_supply: null,
    percent_change_1h: '4.58',
    percent_change_24h: '9.83',
    percent_change_7d: '20.51',
    last_updated: '1515325152',
    price_eur: '17.860937004',
    '24h_volume_eur': '105003899.28',
    market_cap_eur: '1822575589.0'
  },
  {
    id: 'bitshares',
    name: 'BitShares',
    symbol: 'BTS',
    rank: '27',
    price_usd: '0.826607',
    price_btc: '0.00004938',
    '24h_volume_usd': '68766700.0',
    market_cap_usd: '2154782595.0',
    available_supply: '2606780000.0',
    total_supply: '2606780000.0',
    max_supply: '3600570502.0',
    percent_change_1h: '0.55',
    percent_change_24h: '6.41',
    percent_change_7d: '32.61',
    last_updated: '1515325143',
    price_eur: '0.6871088027',
    '24h_volume_eur': '57161631.708',
    market_cap_eur: '1791141485.0'
  },
  {
    id: 'binance-coin',
    name: 'Binance Coin',
    symbol: 'BNB',
    rank: '28',
    price_usd: '21.6443',
    price_btc: '0.00129304',
    '24h_volume_usd': '514365000.0',
    market_cap_usd: '2143088720.0',
    available_supply: '99014000.0',
    total_supply: '199013968.0',
    max_supply: null,
    percent_change_1h: '2.21',
    percent_change_24h: '34.61',
    percent_change_7d: '165.16',
    last_updated: '1515325152',
    price_eur: '17.991607932',
    '24h_volume_eur': '427560762.6',
    market_cap_eur: '1781421068.0'
  },
  {
    id: 'dogecoin',
    name: 'Dogecoin',
    symbol: 'DOGE',
    rank: '29',
    price_usd: '0.0165924',
    price_btc: '0.00000099',
    '24h_volume_usd': '215155000.0',
    market_cap_usd: '1869340990.0',
    available_supply: '112662483414',
    total_supply: '112662483414',
    max_supply: null,
    percent_change_1h: '2.37',
    percent_change_24h: '14.96',
    percent_change_7d: '98.77',
    last_updated: '1515325141',
    price_eur: '0.0137922666',
    '24h_volume_eur': '178845442.2',
    market_cap_eur: '1553871004.0'
  },
  {
    id: 'status',
    name: 'Status',
    symbol: 'SNT',
    rank: '30',
    price_usd: '0.509902',
    price_btc: '0.00003046',
    '24h_volume_usd': '74034900.0',
    market_cap_usd: '1769606624.0',
    available_supply: '3470483788.0',
    total_supply: '6804870174.0',
    max_supply: null,
    percent_change_1h: '1.0',
    percent_change_24h: '0.29',
    percent_change_7d: '194.67',
    last_updated: '1515325151',
    price_eur: '0.4238509385',
    '24h_volume_eur': '61540770.276',
    market_cap_eur: '1470967811.0'
  },
  {
    id: 'ardor',
    name: 'Ardor',
    symbol: 'ARDR',
    rank: '31',
    price_usd: '1.76255',
    price_btc: '0.0001053',
    '24h_volume_usd': '5646720.0',
    market_cap_usd: '1760786560.0',
    available_supply: '998999495.0',
    total_supply: '998999495.0',
    max_supply: '998999495.0',
    percent_change_1h: '0.51',
    percent_change_24h: '9.37',
    percent_change_7d: '11.23',
    last_updated: '1515325147',
    price_eur: '1.465102062',
    '24h_volume_eur': '4693779.5328',
    market_cap_eur: '1463636220.0'
  },
  {
    id: 'stratis',
    name: 'Stratis',
    symbol: 'STRAT',
    rank: '32',
    price_usd: '17.5414',
    price_btc: '0.00104793',
    '24h_volume_usd': '38770100.0',
    market_cap_usd: '1731181083.0',
    available_supply: '98691158.0',
    total_supply: '98691158.0',
    max_supply: null,
    percent_change_1h: '0.53',
    percent_change_24h: '6.94',
    percent_change_7d: '31.89',
    last_updated: '1515325147',
    price_eur: '14.581113336',
    '24h_volume_eur': '32227257.924',
    market_cap_eur: '1439026964.0'
  },
  {
    id: 'populous',
    name: 'Populous',
    symbol: 'PPT',
    rank: '33',
    price_usd: '46.3779',
    price_btc: '0.00277064',
    '24h_volume_usd': '3311770.0',
    market_cap_usd: '1716169059.0',
    available_supply: '37004027.0',
    total_supply: '53252246.0',
    max_supply: '53252246.0',
    percent_change_1h: '-0.38',
    percent_change_24h: '11.0',
    percent_change_7d: '21.34',
    last_updated: '1515325151',
    price_eur: '38.551165596',
    '24h_volume_eur': '2752875.6948',
    market_cap_eur: '1426548369.0'
  },
  {
    id: 'steem',
    name: 'Steem',
    symbol: 'STEEM',
    rank: '34',
    price_usd: '6.46668',
    price_btc: '0.00038632',
    '24h_volume_usd': '30408800.0',
    market_cap_usd: '1591913220.0',
    available_supply: '246171640.0',
    total_supply: '263145734.0',
    max_supply: null,
    percent_change_1h: '2.11',
    percent_change_24h: '2.04',
    percent_change_7d: '134.7',
    last_updated: '1515325146',
    price_eur: '5.3753630832',
    '24h_volume_eur': '25277010.912',
    market_cap_eur: '1323261945.0'
  },
  {
    id: 'kucoin-shares',
    name: 'KuCoin Shares',
    symbol: 'KCS',
    rank: '35',
    price_usd: '16.911',
    price_btc: '0.00101027',
    '24h_volume_usd': '36641300.0',
    market_cap_usd: '1539629458.0',
    available_supply: '91043076.0',
    total_supply: '181043076.0',
    max_supply: null,
    percent_change_1h: '0.41',
    percent_change_24h: '69.07',
    percent_change_7d: '437.1',
    last_updated: '1515325155',
    price_eur: '14.05709964',
    '24h_volume_eur': '30457714.212',
    market_cap_eur: '1279801591.0'
  },
  {
    id: 'tether',
    name: 'Tether',
    symbol: 'USDT',
    rank: '36',
    price_usd: '1.00194',
    price_btc: '0.00005986',
    '24h_volume_usd': '2470110000.0',
    market_cap_usd: '1470937931.0',
    available_supply: '1468089837.0',
    total_supply: '1499999377.0',
    max_supply: null,
    percent_change_1h: '-0.56',
    percent_change_24h: '-0.06',
    percent_change_7d: '-0.6',
    last_updated: '1515325145',
    price_eur: '0.8328526056',
    '24h_volume_eur': '2053254236.4',
    market_cap_eur: '1222702446.0'
  },
  {
    id: 'waves',
    name: 'Waves',
    symbol: 'WAVES',
    rank: '37',
    price_usd: '13.2687',
    price_btc: '0.00079268',
    '24h_volume_usd': '65176300.0',
    market_cap_usd: '1326870000.0',
    available_supply: '100000000.0',
    total_supply: '100000000.0',
    max_supply: null,
    percent_change_1h: '-0.59',
    percent_change_24h: '7.83',
    percent_change_7d: '9.53',
    last_updated: '1515325147',
    price_eur: '11.029474188',
    '24h_volume_eur': '54177147.612',
    market_cap_eur: '1102947419.0'
  },
  {
    id: 'vechain',
    name: 'VeChain',
    symbol: 'VEN',
    rank: '38',
    price_usd: '4.72838',
    price_btc: '0.00028248',
    '24h_volume_usd': '188021000.0',
    market_cap_usd: '1310530253.0',
    available_supply: '277162633.0',
    total_supply: '867162633.0',
    max_supply: null,
    percent_change_1h: '1.44',
    percent_change_24h: '18.5',
    percent_change_7d: '120.98',
    last_updated: '1515325152',
    price_eur: '3.9304185912',
    '24h_volume_eur': '156290576.04',
    market_cap_eur: '1089365167.0'
  },
  {
    id: 'digibyte',
    name: 'DigiByte',
    symbol: 'DGB',
    rank: '39',
    price_usd: '0.129917',
    price_btc: '0.00000776',
    '24h_volume_usd': '118880000.0',
    market_cap_usd: '1255265530.0',
    available_supply: '9662057545.0',
    total_supply: '9662057545.0',
    max_supply: '21000000000.0',
    percent_change_1h: '0.14',
    percent_change_24h: '-0.05',
    percent_change_7d: '88.17',
    last_updated: '1515325141',
    price_eur: '0.1079922071',
    '24h_volume_eur': '98817811.2',
    market_cap_eur: '1043426919.0'
  },
  {
    id: 'komodo',
    name: 'Komodo',
    symbol: 'KMD',
    rank: '40',
    price_usd: '10.8871',
    price_btc: '0.0006504',
    '24h_volume_usd': '19350600.0',
    market_cap_usd: '1131381054.0',
    available_supply: '103919414.0',
    total_supply: '103919414.0',
    max_supply: null,
    percent_change_1h: '9.78',
    percent_change_24h: '17.28',
    percent_change_7d: '20.63',
    last_updated: '1515325148',
    price_eur: '9.049793004',
    '24h_volume_eur': '16084992.744',
    market_cap_eur: '940449187.0'
  },
  {
    id: 'dragonchain',
    name: 'Dragonchain',
    symbol: 'DRGN',
    rank: '41',
    price_usd: '4.64401',
    price_btc: '0.00027743',
    '24h_volume_usd': '22209700.0',
    market_cap_usd: '1107233874.0',
    available_supply: '238421940.0',
    total_supply: '433494437.0',
    max_supply: null,
    percent_change_1h: '-1.36',
    percent_change_24h: '29.74',
    percent_change_7d: '276.73',
    last_updated: '1515325156',
    price_eur: '3.8602868724',
    '24h_volume_eur': '18461591.028',
    market_cap_eur: '920377085.0'
  },
  {
    id: 'hshare',
    name: 'Hshare',
    symbol: 'HSR',
    rank: '42',
    price_usd: '25.1349',
    price_btc: '0.00150157',
    '24h_volume_usd': '264212000.0',
    market_cap_usd: '1067410957.0',
    available_supply: '42467285.0',
    total_supply: '42467285.0',
    max_supply: '84000000.0',
    percent_change_1h: '-0.62',
    percent_change_24h: '3.27',
    percent_change_7d: '-2.92',
    last_updated: '1515325153',
    price_eur: '20.893134276',
    '24h_volume_eur': '219623582.88',
    market_cap_eur: '887274684.0'
  },
  {
    id: 'dentacoin',
    name: 'Dentacoin',
    symbol: 'DCN',
    rank: '43',
    price_usd: '0.00312648',
    price_btc: '0.00000019',
    '24h_volume_usd': '16605600.0',
    market_cap_usd: '1016700705.0',
    available_supply: '325190215376',
    total_supply: '1841395638392',
    max_supply: '8000000000000',
    percent_change_1h: '7.72',
    percent_change_24h: '107.51',
    percent_change_7d: '490.72',
    last_updated: '1515325152',
    price_eur: '0.0025988552',
    '24h_volume_eur': '13803238.944',
    market_cap_eur: '845122294.0'
  },
  {
    id: 'kin',
    name: 'Kin',
    symbol: 'KIN',
    rank: '44',
    price_usd: '0.00127882',
    price_btc: '0.00000008',
    '24h_volume_usd': '8683950.0',
    market_cap_usd: '966912683.0',
    available_supply: '756097560976',
    total_supply: '10000000000000',
    max_supply: null,
    percent_change_1h: '-9.28',
    percent_change_24h: '-1.96',
    percent_change_7d: '285.63',
    last_updated: '1515325154',
    price_eur: '0.0010630063',
    '24h_volume_eur': '7218446.598',
    market_cap_eur: '803736499.0'
  },
  {
    id: 'electroneum',
    name: 'Electroneum',
    symbol: 'ETN',
    rank: '45',
    price_usd: '0.190472',
    price_btc: '0.00001138',
    '24h_volume_usd': '42404400.0',
    market_cap_usd: '951885242.0',
    available_supply: '4997507466.0',
    total_supply: '5195262064.0',
    max_supply: '21000000000.0',
    percent_change_1h: '-2.34',
    percent_change_24h: '39.12',
    percent_change_7d: '137.91',
    last_updated: '1515325155',
    price_eur: '0.1583279453',
    '24h_volume_eur': '35248233.456',
    market_cap_eur: '791245089.0'
  },
  {
    id: 'reddcoin',
    name: 'ReddCoin',
    symbol: 'RDD',
    rank: '46',
    price_usd: '0.0320833',
    price_btc: '0.00000192',
    '24h_volume_usd': '106629000.0',
    market_cap_usd: '921315207.0',
    available_supply: '28716347981.0',
    total_supply: '28716347981.0',
    max_supply: null,
    percent_change_1h: '5.96',
    percent_change_24h: '49.2',
    percent_change_7d: '242.95',
    last_updated: '1515325141',
    price_eur: '0.0266689223',
    '24h_volume_eur': '88634289.96',
    market_cap_eur: '765834053.0'
  },
  {
    id: 'golem-network-tokens',
    name: 'Golem',
    symbol: 'GNT',
    rank: '47',
    price_usd: '1.074',
    price_btc: '0.00006416',
    '24h_volume_usd': '36755600.0',
    market_cap_usd: '895997388.0',
    available_supply: '834262000.0',
    total_supply: '1000000000.0',
    max_supply: null,
    percent_change_1h: '-0.62',
    percent_change_24h: '4.53',
    percent_change_7d: '46.62',
    last_updated: '1515325148',
    price_eur: '0.89275176',
    '24h_volume_eur': '30552724.944',
    market_cap_eur: '744788869.0'
  },
  {
    id: 'augur',
    name: 'Augur',
    symbol: 'REP',
    rank: '48',
    price_usd: '79.5723',
    price_btc: '0.00475369',
    '24h_volume_usd': '10307800.0',
    market_cap_usd: '875295300.0',
    available_supply: '11000000.0',
    total_supply: '11000000.0',
    max_supply: null,
    percent_change_1h: '1.74',
    percent_change_24h: '3.07',
    percent_change_7d: '20.36',
    last_updated: '1515325145',
    price_eur: '66.143678652',
    '24h_volume_eur': '8568255.672',
    market_cap_eur: '727580465.0'
  },
  {
    id: 'ethos',
    name: 'Ethos',
    symbol: 'ETHOS',
    rank: '49',
    price_usd: '11.3121',
    price_btc: '0.00067579',
    '24h_volume_usd': '19608500.0',
    market_cap_usd: '852954539.0',
    available_supply: '75401962.0',
    total_supply: '222295208.0',
    max_supply: null,
    percent_change_1h: '8.08',
    percent_change_24h: '19.81',
    percent_change_7d: '312.02',
    last_updated: '1515325152',
    price_eur: '9.403070004',
    '24h_volume_eur': '16299369.54',
    market_cap_eur: '709009931.0'
  },
  {
    id: 'basic-attention-token',
    name: 'Basic Attention Token',
    symbol: 'BAT',
    rank: '50',
    price_usd: '0.818338',
    price_btc: '0.00004889',
    '24h_volume_usd': '80859100.0',
    market_cap_usd: '818338000.0',
    available_supply: '1000000000.0',
    total_supply: '1500000000.0',
    max_supply: null,
    percent_change_1h: '5.53',
    percent_change_24h: '35.83',
    percent_change_7d: '114.74',
    last_updated: '1515325151',
    price_eur: '0.6802352791',
    '24h_volume_eur': '67213318.284',
    market_cap_eur: '680235279.0'
  }
];

const news = [
  {
    vote: 20,
    comment: 10,
    published_at: '2018-01-01T00:00:00+00:00',
    domain: 'icoape.com',
    url: 'https://cybex.io/index_en.html',
    title:
      "It's time for DEX. Cybex ICO Launches Shortly - 2018 will be the year of the decentralized exchange.",
    author: {
      name: 'Luke Skywalker',
      title: 'The Myth'
    }
  },
  {
    vote: 10,
    comment: 8,
    published_at: '2018-01-07T14:38:31.146847+00:00',
    domain: 'r/Iota',
    url:
      'https://www.reddit.com/r/Iota/comments/7oqlxc/iota_was_introduced_in_mrs_pengs_speech_in_huawei/',
    title:
      "IOTA was introduced in Mrs. Peng's speech in Huawei NB-IoT Partner Annual Meeting.",
    author: {
      name: 'Roy Hollander',
      title: 'The Dutch'
    }
  },
  {
    vote: 13,
    comment: 13,
    published_at: '2018-01-07T14:38:29.940495+00:00',
    domain: 'r/CryptoCurrency',
    url:
      'https://www.reddit.com/r/CryptoCurrency/comments/7oqgwq/official_iota_foundation_response_to_the_digital/',
    title:
      'Official IOTA Foundation Response to the Digital Currency Initiative at the MIT Media Lab',
    author: {
      name: 'Julian Hudson',
      title: 'Noise Bringer'
    }
  },
  {
    vote: 1,
    comment: 21,
    published_at: '2018-01-07T14:38:29.053339+00:00',
    domain: 'r/IOTAmarkets',
    url:
      'https://www.reddit.com/r/IOTAmarkets/comments/7oqggd/official_iota_foundation_response_to_the_digital/',
    title:
      'Official IOTA Foundation Response to the Digital Currency Initiative at the MIT Media Lab',
    author: {
      name: 'Thibault Nguyen',
      title: 'Time Traveler'
    }
  },
  {
    vote: 5,
    comment: 9,
    published_at: '2018-01-07T14:37:38+00:00',
    domain: '@syscoin',
    url: 'https://twitter.com/syscoin/status/950013563229257736',
    title:
      "RT @realSidhuJag: I normally don't post articles on crypto coins talking about implications of price rises but this guy really did his home\u2026",
    author: {
      name: 'Marteen Mortier',
      title: 'The Emperor'
    }
  },
  {
    vote: 96,
    comment: 85,
    published_at: '2018-01-07T14:32:07+00:00',
    domain: '@syscoin',
    url: 'https://twitter.com/syscoin/status/950012174491004934',
    title:
      'RT @syscoin: In-wallet trustless exchange @flyp_me coming soon to Blockmarket 1.2',
    author: {
      name: 'Stephane Poppe',
      title: 'Hair master'
    }
  },
  {
    vote: 42,
    comment: 45,
    published_at: '2018-01-07T14:06:45+00:00',
    domain: 'cointia.com',
    url: 'https://cointia.com/post/2318',
    title:
      'Facebook vs. Kik\u2019s Kin: Why Facebook is Looking into Cryptocurrencies',
    author: {
      name: 'Laurenzo Dewaelo',
      title: 'Cyclist Belgian Champion'
    }
  },
  {
    vote: 141,
    comment: 21,
    published_at: '2018-01-07T14:06:26.030654+00:00',
    domain: 'coinmarketcap.com',
    url: 'https://coinmarketcap.com/currencies/lisk/',
    title: 'Lisk ($LSK) price is up <span class="color-green">27.23%</span>',
    author: {
      name: 'Arnaud Schlupp',
      title: 'Feeder'
    }
  },
  {
    vote: 2,
    comment: 8,
    published_at: '2018-01-07T14:01:43.402764+00:00',
    domain: 'coinmarketcap.com',
    url: 'https://coinmarketcap.com/currencies/ripple/',
    title: 'Ripple ($XRP) price is up <span class="color-green">10.42%</span>',
    author: {
      name: 'Peter Jan Brone',
      title: 'Crypto Guru'
    }
  },
  {
    vote: 189,
    comment: 5,
    published_at: '2018-01-07T13:57:23+00:00',
    domain: 'zycrypto.com',
    url: 'https://zycrypto.com/parody-coin-turns-worth-billion/',
    title: 'Parody coin turns to be worth of Billion',
    author: {
      name: 'Arnaud Schlupp',
      title: 'Feeder'
    }
  },
  {
    vote: 11,
    comment: 3,
    published_at: '2018-01-07T13:52:53+00:00',
    domain: '@ethlend1',
    url: 'https://twitter.com/ethlend1/status/950002299954434049',
    title:
      '#ETHLend reached more than 980.000 USD in lending volume! We are happy to see the DApp being actively used. With th\u2026',
    author: {
      name: 'Mike Warner',
      title: 'CS:GO Killer'
    }
  },
  {
    vote: 3,
    comment: 89,
    published_at: '2018-01-07T13:48:41+00:00',
    domain: 'cointelegraph.com',
    url:
      'https://cointelegraph.com/news/study-22-of-bitcoin-investors-used-borrowed-money-for-trading-not-recommended',
    title:
      'Study: 22% of Bitcoin Investors Used Borrowed Money For Trading, Not Recommended',
    author: {
      name: 'Elias Meire',
      title: 'Avocado Guru'
    }
  }
];

ReactDOM.render(
  <App data={{ coins, news }} />,
  document.getElementById('root')
);
registerServiceWorker();
