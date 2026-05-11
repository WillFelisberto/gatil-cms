export type BankId =
  | '0246'
  | '0748'
  | '0117'
  | '0172'
  | '0188'
  | '0280'
  | '0080'
  | '0654'
  | '0075'
  | '0121'
  | '0025'
  | '0641'
  | '0065'
  | '0213'
  | '0096'
  | '0024'
  | '0318'
  | '0752'
  | '0107'
  | '0063'
  | '0036'
  | '0122'
  | '0204'
  | '0394'
  | '0237'
  | '0218'
  | '0208'
  | '0336'
  | '0473'
  | '0412'
  | '0040'
  | '0368'
  | '0266'
  | '0739'
  | '0233'
  | '0745'
  | '0241'
  | '0756'
  | '0222'
  | '0505'
  | '0069'
  | '0003'
  | '0083'
  | '0707'
  | '0051'
  | '0300'
  | '0495'
  | '0494'
  | '0335'
  | '0001'
  | '0047'
  | '0037'
  | '0041'
  | '0004'
  | '0196'
  | '0265'
  | '0224'
  | '0626'
  | '0094'
  | '0612'
  | '0012'
  | '0604'
  | '0653'
  | '0077'
  | '0249'
  | '0184'
  | '0029'
  | '0479'
  | '0376'
  | '0074'
  | '0217'
  | '0076'
  | '0757'
  | '0600'
  | '0243'
  | '0720'
  | '0389'
  | '0370'
  | '0746'
  | '0066'
  | '0456'
  | '0007'
  | '0169'
  | '0111'
  | '0079'
  | '0212'
  | '0712'
  | '0623'
  | '0611'
  | '0643'
  | '0658'
  | '0747'
  | '0633'
  | '0741'
  | '0120'
  | '0422'
  | '0033'
  | '0743'
  | '0754'
  | '0630'
  | '0366'
  | '0637'
  | '0464'
  | '0082'
  | '0634'
  | '0018'
  | '0655'
  | '0610'
  | '0119'
  | '0124'
  | '0348'
  | '0081'
  | '0021'
  | '0755'
  | '0268'
  | '0250'
  | '0144'
  | '0253'
  | '0134'
  | '0017'
  | '0301'
  | '0126'
  | '0070'
  | '0092'
  | '0173'
  | '0142'
  | '0292'
  | '0011'
  | '0104'
  | '0288'
  | '0130'
  | '0159'
  | '0016'
  | '0089'
  | '0114'
  | '0114-7'
  | '0320'
  | '0477'
  | '0180'
  | '0127'
  | '0163'
  | '0060'
  | '0085'
  | '0097'
  | '0085-x'
  | '0090-2'
  | '0087-6'
  | '0089-2'
  | '0286'
  | '0279'
  | '0273'
  | '0098'
  | '0098-1'
  | '0010'
  | '0133'
  | '0182'
  | '0487'
  | '0140'
  | '0149'
  | '0285'
  | '0278'
  | '0138'
  | '0064'
  | '0177'
  | '0146'
  | '0078'
  | '0062'
  | '0189'
  | '0269'
  | '0271'
  | '0157'
  | '0132'
  | '0492'
  | '0139'
  | '0652'
  | '0341'
  | '0488'
  | '0399'
  | '0293'
  | '0105'
  | '0145'
  | '0113'
  | '0323'
  | '0128'
  | '0137'
  | '0014'
  | '0191'
  | '0753'
  | '0260'
  | '0613'
  | '0290'
  | '0254'
  | '0326'
  | '0194'
  | '0174'
  | '0100'
  | '0125'
  | '0093'
  | '0108'
  | '0283'
  | '0101'
  | '0270'
  | '0751'
  | '0276'
  | '0545'
  | '0190'
  | '0183'
  | '0299'
  | '0118'
  | '0197'
  | '0340'
  | '0095'
  | '0143'
  | '0131'
  | '0129'
  | '0091-4'
  | '091'
  | '0136'
  | '0099'
  | '0084'
  | '0298'
  | '0310'
  | '0102';

export interface BankListItem {
  key: BankId;
  value: BankId;
  label: string;
}

export const BankListArray: BankId[] = [
  '0246',
  '0748',
  '0117',
  '0172',
  '0188',
  '0280',
  '0080',
  '0654',
  '0075',
  '0121',
  '0025',
  '0641',
  '0065',
  '0213',
  '0096',
  '0024',
  '0318',
  '0752',
  '0107',
  '0063',
  '0036',
  '0122',
  '0204',
  '0394',
  '0237',
  '0218',
  '0208',
  '0336',
  '0473',
  '0412',
  '0040',
  '0368',
  '0266',
  '0739',
  '0233',
  '0745',
  '0241',
  '0756',
  '0222',
  '0505',
  '0069',
  '0003',
  '0083',
  '0707',
  '0051',
  '0300',
  '0495',
  '0494',
  '0335',
  '0001',
  '0047',
  '0037',
  '0041',
  '0004',
  '0196',
  '0265',
  '0224',
  '0626',
  '0094',
  '0612',
  '0012',
  '0604',
  '0653',
  '0077',
  '0249',
  '0184',
  '0029',
  '0479',
  '0376',
  '0074',
  '0217',
  '0076',
  '0757',
  '0600',
  '0243',
  '0720',
  '0389',
  '0370',
  '0746',
  '0066',
  '0456',
  '0007',
  '0169',
  '0111',
  '0079',
  '0212',
  '0712',
  '0623',
  '0611',
  '0643',
  '0658',
  '0747',
  '0633',
  '0741',
  '0120',
  '0422',
  '0033',
  '0743',
  '0754',
  '0630',
  '0366',
  '0637',
  '0464',
  '0082',
  '0634',
  '0018',
  '0655',
  '0610',
  '0119',
  '0124',
  '0348',
  '0081',
  '0021',
  '0755',
  '0268',
  '0250',
  '0144',
  '0253',
  '0134',
  '0017',
  '0301',
  '0126',
  '0070',
  '0092',
  '0173',
  '0142',
  '0292',
  '0011',
  '0104',
  '0288',
  '0130',
  '0159',
  '0016',
  '0089',
  '0114',
  '0114-7',
  '0320',
  '0477',
  '0180',
  '0127',
  '0163',
  '0060',
  '0085',
  '0097',
  '0085-x',
  '0090-2',
  '0087-6',
  '0089-2',
  '0286',
  '0279',
  '0273',
  '0098',
  '0098-1',
  '0010',
  '0133',
  '0182',
  '0487',
  '0140',
  '0149',
  '0285',
  '0278',
  '0138',
  '0064',
  '0177',
  '0146',
  '0078',
  '0062',
  '0189',
  '0269',
  '0271',
  '0157',
  '0132',
  '0492',
  '0139',
  '0652',
  '0341',
  '0488',
  '0399',
  '0293',
  '0105',
  '0145',
  '0113',
  '0323',
  '0128',
  '0137',
  '0014',
  '0191',
  '0753',
  '0260',
  '0613',
  '0290',
  '0254',
  '0326',
  '0194',
  '0174',
  '0100',
  '0125',
  '0093',
  '0108',
  '0283',
  '0101',
  '0270',
  '0751',
  '0276',
  '0545',
  '0190',
  '0183',
  '0299',
  '0118',
  '0197',
  '0340',
  '0095',
  '0143',
  '0131',
  '0129',
  '0091-4',
  '091',
  '0136',
  '0099',
  '0084',
  '0298',
  '0310',
  '0102'
];

const BankList: BankListItem[] = [
  { key: '0104', value: '0104', label: 'Caixa Econômica Federal' },
  { key: '0237', value: '0237', label: 'Banco Bradesco S.A.' },
  { key: '0341', value: '0341', label: 'Itaú Unibanco S.A.' },
  { key: '0001', value: '0001', label: 'Banco do Brasil S.A.' },
  { key: '0260', value: '0260', label: 'Nu Pagamentos S.A (Nubank)' },
  { key: '0033', value: '0033', label: 'Banco Santander (Brasil) S.A.' },
  { key: '0212', value: '0212', label: 'Banco Original S.A.' },
  { key: '0323', value: '0323', label: 'Mercado Pago – Conta Do Mercado Livre' },
  { key: '0290', value: '0290', label: 'Pagseguro Internet S.A' },
  { key: '0336', value: '0336', label: 'Banco C6 S.A – C6 Bank' },
  { key: '0077', value: '0077', label: 'Banco Inter S.A.' },
  { key: '0208', value: '0208', label: 'Banco BTG Pactual S.A.' },
  { key: '0246', value: '0246', label: 'Banco ABC Brasil S.A.' },
  { key: '0748', value: '0748', label: 'Banco Cooperativo Sicredi S.A.' },
  { key: '0117', value: '0117', label: 'Advanced Cc Ltda' },
  { key: '0172', value: '0172', label: 'Albatross Ccv S.A' },
  { key: '0188', value: '0188', label: 'Ativa Investimentos S.A' },
  { key: '0280', value: '0280', label: 'Avista S.A. Crédito, Financiamento e Investimento' },
  { key: '0080', value: '0080', label: 'B&T Cc Ltda' },
  { key: '0654', value: '0654', label: 'Banco A.J.Renner' },
  { key: '0075', value: '0075', label: 'Banco ABN AMRO S.A' },
  { key: '0121', value: '0121', label: 'Banco Agibank S.A.' },
  { key: '0025', value: '0025', label: 'Banco Alfa S.A.' },
  { key: '0641', value: '0641', label: 'Banco Alvorada S.A.' },
  { key: '0065', value: '0065', label: 'Banco Andbank (Brasil) S.A.' },
  { key: '0213', value: '0213', label: 'Banco Arbi S.A.' },
  { key: '0096', value: '0096', label: 'Banco B3 S.A.' },
  { key: '0024', value: '0024', label: 'Banco BANDEPE S.A.' },
  { key: '0318', value: '0318', label: 'Banco BMG S.A.' },
  { key: '0752', value: '0752', label: 'Banco BNP Paribas Brasil S.A.' },
  { key: '0107', value: '0107', label: 'Banco BOCOM BBM S.A.' },
  { key: '0063', value: '0063', label: 'Banco Bradescard S.A.' },
  { key: '0036', value: '0036', label: 'Banco Bradesco BBI S.A.' },
  { key: '0122', value: '0122', label: 'Banco Bradesco BERJ S.A.' },
  { key: '0204', value: '0204', label: 'Banco Bradesco Cartões S.A.' },
  { key: '0394', value: '0394', label: 'Banco Bradesco Financiamentos S.A.' },
  { key: '0218', value: '0218', label: 'Banco BS2 S.A.' },
  { key: '0473', value: '0473', label: 'Banco Caixa Geral – Brasil S.A.' },
  { key: '0412', value: '0412', label: 'Banco Capital S.A.' },
  { key: '0040', value: '0040', label: 'Banco Cargill S.A.' },
  { key: '0368', value: '0368', label: 'Banco Carrefour' },
  { key: '0266', value: '0266', label: 'Banco Cédula S.A.' },
  { key: '0739', value: '0739', label: 'Banco Cetelem S.A.' },
  { key: '0233', value: '0233', label: 'Banco Cifra S.A.' },
  { key: '0745', value: '0745', label: 'Banco Citibank S.A.' },
  { key: '0241', value: '0241', label: 'Banco Clássico S.A.' },
  { key: '0756', value: '0756', label: 'Banco Cooperativo do Brasil S.A. – BANCOOB' },
  { key: '0222', value: '0222', label: 'Banco Credit Agricole Brasil S.A.' },
  { key: '0505', value: '0505', label: 'Banco Credit Suisse (Brasil) S.A.' },
  { key: '0069', value: '0069', label: 'Banco Crefisa S.A.' },
  { key: '0003', value: '0003', label: 'Banco da Amazônia S.A.' },
  { key: '0083', value: '0083', label: 'Banco da China Brasil S.A.' },
  { key: '0707', value: '0707', label: 'Banco Daycoval S.A.' },
  { key: '0051', value: '0051', label: 'Banco de Desenvolvimento do Espírito Santo S.A.' },
  { key: '0300', value: '0300', label: 'Banco de La Nacion Argentina' },
  { key: '0495', value: '0495', label: 'Banco de La Provincia de Buenos Aires' },
  { key: '0494', value: '0494', label: 'Banco de La Republica Oriental del Uruguay' },
  { key: '0335', value: '0335', label: 'Banco Digio S.A' },
  { key: '0047', value: '0047', label: 'Banco do Estado de Sergipe S.A.' },
  { key: '0037', value: '0037', label: 'Banco do Estado do Pará S.A.' },
  { key: '0041', value: '0041', label: 'Banco do Estado do Rio Grande do Sul S.A.' },
  { key: '0004', value: '0004', label: 'Banco do Nordeste do Brasil S.A.' },
  { key: '0196', value: '0196', label: 'Banco Fair Corretora de Câmbio S.A' },
  { key: '0265', value: '0265', label: 'Banco Fator S.A.' },
  { key: '0224', value: '0224', label: 'Banco Fibra S.A.' },
  { key: '0626', value: '0626', label: 'Banco Ficsa S.A.' },
  { key: '0094', value: '0094', label: 'Banco Finaxis S.A.' },
  { key: '0612', value: '0612', label: 'Banco Guanabara S.A.' },
  { key: '0012', value: '0012', label: 'Banco Inbursa S.A.' },
  { key: '0604', value: '0604', label: 'Banco Industrial do Brasil S.A.' },
  { key: '0653', value: '0653', label: 'Banco Indusval S.A.' },
  { key: '0249', value: '0249', label: 'Banco Investcred Unibanco S.A.' },
  { key: '0184', value: '0184', label: 'Banco Itaú BBA S.A.' },
  { key: '0029', value: '0029', label: 'Banco Itaú Consignado S.A.' },
  { key: '0479', value: '0479', label: 'Banco ItauBank S.A' },
  { key: '0376', value: '0376', label: 'Banco J. P. Morgan S.A.' },
  { key: '0074', value: '0074', label: 'Banco J. Safra S.A.' },
  { key: '0217', value: '0217', label: 'Banco John Deere S.A.' },
  { key: '0076', value: '0076', label: 'Banco KDB S.A.' },
  { key: '0757', value: '0757', label: 'Banco KEB HANA do Brasil S.A.' },
  { key: '0600', value: '0600', label: 'Banco Luso Brasileiro S.A.' },
  { key: '0243', value: '0243', label: 'Banco Máxima S.A.' },
  { key: '0720', value: '0720', label: 'Banco Maxinvest S.A.' },
  { key: '0389', value: '0389', label: 'Banco Mercantil de Investimentos S.A.' },
  { key: '0370', value: '0370', label: 'Banco Mizuho do Brasil S.A.' },
  { key: '0746', value: '0746', label: 'Banco Modal S.A.' },
  { key: '0066', value: '0066', label: 'Banco Morgan Stanley S.A.' },
  { key: '0456', value: '0456', label: 'Banco MUFG Brasil S.A.' },
  {
    key: '0007',
    value: '0007',
    label: 'Banco Nacional de Desenvolvimento Econômico e Social – BNDES'
  },
  { key: '0169', value: '0169', label: 'Banco Olé Bonsucesso Consignado S.A.' },
  { key: '0111', value: '0111', label: 'Banco Oliveira Trust Dtvm S.A' },
  { key: '0079', value: '0079', label: 'Banco Original do Agronegócio S.A.' },
  { key: '0712', value: '0712', label: 'Banco Ourinvest S.A.' },
  { key: '0623', value: '0623', label: 'Banco PAN S.A.' },
  { key: '0611', value: '0611', label: 'Banco Paulista S.A.' },
  { key: '0643', value: '0643', label: 'Banco Pine S.A.' },
  { key: '0658', value: '0658', label: 'Banco Porto Real de Investimentos S.A.' },
  { key: '0747', value: '0747', label: 'Banco Rabobank International Brasil S.A.' },
  { key: '0633', value: '0633', label: 'Banco Rendimento S.A.' },
  { key: '0741', value: '0741', label: 'Banco Ribeirão Preto S.A.' },
  { key: '0120', value: '0120', label: 'Banco Rodobens S.A.' },
  { key: '0422', value: '0422', label: 'Banco Safra S.A.' },
  { key: '0743', value: '0743', label: 'Banco Semear S.A.' },
  { key: '0754', value: '0754', label: 'Banco Sistema S.A.' },
  { key: '0630', value: '0630', label: 'Banco Smartbank S.A.' },
  { key: '0366', value: '0366', label: 'Banco Société Générale Brasil S.A.' },
  { key: '0637', value: '0637', label: 'Banco Sofisa S.A.' },
  { key: '0464', value: '0464', label: 'Banco Sumitomo Mitsui Brasileiro S.A.' },
  { key: '0082', value: '0082', label: 'Banco Topázio S.A.' },
  { key: '0634', value: '0634', label: 'Banco Triângulo S.A.' },
  { key: '0018', value: '0018', label: 'Banco Tricury S.A.' },
  { key: '0655', value: '0655', label: 'Banco Votorantim S.A.' },
  { key: '0610', value: '0610', label: 'Banco VR S.A.' },
  { key: '0119', value: '0119', label: 'Banco Western Union do Brasil S.A.' },
  { key: '0124', value: '0124', label: 'Banco Woori Bank do Brasil S.A.' },
  { key: '0348', value: '0348', label: 'Banco Xp S/A' },
  { key: '0081', value: '0081', label: 'BancoSeguro S.A.' },
  { key: '0021', value: '0021', label: 'BANESTES S.A. Banco do Estado do Espírito Santo' },
  { key: '0755', value: '0755', label: 'Bank of America Merrill Lynch Banco Múltiplo S.A.' },
  { key: '0268', value: '0268', label: 'Barigui Companhia Hipotecária' },
  { key: '0250', value: '0250', label: 'BCV – Banco de Crédito e Varejo S.A.' },
  { key: '0144', value: '0144', label: 'BEXS Banco de Câmbio S.A.' },
  { key: '0253', value: '0253', label: 'Bexs Corretora de Câmbio S/A' },
  { key: '0134', value: '0134', label: 'Bgc Liquidez Dtvm Ltda' },
  { key: '0017', value: '0017', label: 'BNY Mellon Banco S.A.' },
  { key: '0301', value: '0301', label: 'Bpp Instituição De Pagamentos S.A' },
  { key: '0126', value: '0126', label: 'BR Partners Banco de Investimento S.A.' },
  { key: '0070', value: '0070', label: 'BRB – Banco de Brasília S.A.' },
  { key: '0092', value: '0092', label: 'Brickell S.A. Crédito, Financiamento e Investimento' },
  {
    key: '0173',
    value: '0173',
    label: 'BRL Trust Distribuidora de Títulos e Valores Mobiliários S.A.'
  },
  { key: '0142', value: '0142', label: 'Broker Brasil Cc Ltda' },
  { key: '0292', value: '0292', label: 'BS2 Distribuidora de Títulos e Valores Mobiliários S.A.' },
  { key: '0011', value: '0011', label: 'C.Suisse Hedging-Griffo Cv S.A (Credit Suisse)' },
  { key: '0288', value: '0288', label: 'Carol Distribuidora de Títulos e Valor Mobiliários Ltda' },
  { key: '0130', value: '0130', label: 'Caruana Scfi' },
  { key: '0159', value: '0159', label: 'Casa Credito S.A' },
  { key: '0016', value: '0016', label: 'Ccm Desp Trâns Sc E Rs' },
  { key: '0089', value: '0089', label: 'Ccr Reg Mogiana' },
  {
    key: '0114',
    value: '0114',
    label: 'Central Cooperativa De Crédito No Estado Do Espírito Santo'
  },
  {
    key: '0114-7',
    value: '0114-7',
    label: 'Central das Cooperativas de Economia e Crédito Mútuo doEstado do Espírito Santo Ltda.'
  },
  { key: '0320', value: '0320', label: 'China Construction Bank (Brasil) Banco Múltiplo S.A.' },
  { key: '0477', value: '0477', label: 'Citibank N.A.' },
  { key: '0180', value: '0180', label: 'Cm Capital Markets Cctvm Ltda' },
  { key: '0127', value: '0127', label: 'Codepe Cvc S.A' },
  { key: '0163', value: '0163', label: 'Commerzbank Brasil S.A. – Banco Múltiplo' },
  { key: '0060', value: '0060', label: 'Confidence Cc S.A' },
  { key: '0085', value: '0085', label: 'Coop Central Ailos' },
  { key: '0097', value: '0097', label: 'Cooperativa Central de Crédito Noroeste Brasileiro Ltda.' },
  { key: '0085-x', value: '0085-x', label: 'Cooperativa Central de Crédito Urbano-CECRED' },
  {
    key: '0090-2',
    value: '0090-2',
    label: 'Cooperativa Central de Economia e Crédito Mutuo – SICOOB UNIMAIS'
  },
  {
    key: '0087-6',
    value: '0087-6',
    label: 'Cooperativa Central de Economia e Crédito Mútuo das Unicredsde Santa Catarina e Paraná'
  },
  { key: '0089-2', value: '0089-2', label: 'Cooperativa de Crédito Rural da Região da Mogiana' },
  { key: '0286', value: '0286', label: 'Cooperativa de Crédito Rural De Ouro' },
  { key: '0279', value: '0279', label: 'Cooperativa de Crédito Rural de Primavera Do Leste' },
  {
    key: '0273',
    value: '0273',
    label: 'Cooperativa de Crédito Rural de São Miguel do Oeste – Sulcredi/São Miguel'
  },
  { key: '0098', value: '0098', label: 'Credialiança Ccr' },
  { key: '0098-1', value: '0098-1', label: 'CREDIALIANÇA COOPERATIVA DE CRÉDITO RURAL' },
  { key: '0010', value: '0010', label: 'Credicoamo' },
  { key: '0133', value: '0133', label: 'Cresol Confederação' },
  { key: '0182', value: '0182', label: 'Dacasa Financeira S/A' },
  { key: '0487', value: '0487', label: 'Deutsche Bank S.A. – Banco Alemão' },
  { key: '0140', value: '0140', label: 'Easynvest – Título Cv S.A' },
  { key: '0149', value: '0149', label: 'Facta S.A. Cfi' },
  { key: '0285', value: '0285', label: 'Frente Corretora de Câmbio Ltda.' },
  {
    key: '0278',
    value: '0278',
    label: 'Genial Investimentos Corretora de Valores Mobiliários S.A.'
  },
  { key: '0138', value: '0138', label: 'Get Money Cc Ltda' },
  { key: '0064', value: '0064', label: 'Goldman Sachs do Brasil Banco Múltiplo S.A.' },
  { key: '0177', value: '0177', label: 'Guide Investimentos S.A. Corretora de Valores' },
  { key: '0146', value: '0146', label: 'Guitta Corretora de Câmbio Ltda' },
  { key: '0078', value: '0078', label: 'Haitong Banco de Investimento do Brasil S.A.' },
  { key: '0062', value: '0062', label: 'Hipercard Banco Múltiplo S.A.' },
  { key: '0189', value: '0189', label: 'HS Financeira S/A Crédito, Financiamento e Investimentos' },
  { key: '0269', value: '0269', label: 'HSBC Brasil S.A. – Banco de Investimento' },
  {
    key: '0271',
    value: '0271',
    label: 'IB Corretora de Câmbio, Títulos e Valores Mobiliários S.A.'
  },
  { key: '0157', value: '0157', label: 'Icap Do Brasil Ctvm Ltda' },
  { key: '0132', value: '0132', label: 'ICBC do Brasil Banco Múltiplo S.A.' },
  { key: '0492', value: '0492', label: 'ING Bank N.V.' },
  { key: '0139', value: '0139', label: 'Intesa Sanpaolo Brasil S.A. – Banco Múltiplo' },
  { key: '0652', value: '0652', label: 'Itaú Unibanco Holding S.A.' },
  { key: '0488', value: '0488', label: 'JPMorgan Chase Bank, National Association' },
  { key: '0399', value: '0399', label: 'Kirton Bank S.A. – Banco Múltiplo' },
  {
    key: '0293',
    value: '0293',
    label: 'Lastro RDV Distribuidora de Títulos e Valores Mobiliários Ltda.'
  },
  { key: '0105', value: '0105', label: 'Lecca Crédito, Financiamento e Investimento S/A' },
  { key: '0145', value: '0145', label: 'Levycam Ccv Ltda' },
  { key: '0113', value: '0113', label: 'Magliano S.A' },
  { key: '0128', value: '0128', label: 'MS Bank S.A. Banco de Câmbio' },
  { key: '0137', value: '0137', label: 'Multimoney Cc Ltda' },
  { key: '0014', value: '0014', label: 'Natixis Brasil S.A. Banco Múltiplo' },
  {
    key: '0191',
    value: '0191',
    label: 'Nova Futura Corretora de Títulos e Valores Mobiliários Ltda.'
  },
  { key: '0753', value: '0753', label: 'Novo Banco Continental S.A. – Banco Múltiplo' },
  { key: '0613', value: '0613', label: 'Omni Banco S.A.' },
  { key: '0254', value: '0254', label: 'Paraná Banco S.A.' },
  { key: '0326', value: '0326', label: 'Parati – Crédito Financiamento e Investimento S.A.' },
  {
    key: '0194',
    value: '0194',
    label: 'Parmetal Distribuidora de Títulos e Valores Mobiliários Ltda'
  },
  { key: '0174', value: '0174', label: 'Pernambucanas Financ S.A' },
  { key: '0100', value: '0100', label: 'Planner Corretora De Valores S.A' },
  { key: '0125', value: '0125', label: 'Plural S.A. – Banco Múltiplo' },
  { key: '0093', value: '0093', label: 'Pólocred Scmepp Ltda' },
  { key: '0108', value: '0108', label: 'Portocred S.A' },
  { key: '0283', value: '0283', label: 'Rb Capital Investimentos Dtvm Ltda' },
  { key: '0101', value: '0101', label: 'Renascenca Dtvm Ltda' },
  { key: '0270', value: '0270', label: 'Sagitur Corretora de Câmbio Ltda.' },
  { key: '0751', value: '0751', label: 'Scotiabank Brasil S.A. Banco Múltiplo' },
  { key: '0276', value: '0276', label: 'Senff S.A. – Crédito, Financiamento e Investimento' },
  { key: '0545', value: '0545', label: 'Senso Ccvm S.A' },
  { key: '0190', value: '0190', label: 'Servicoop' },
  { key: '0183', value: '0183', label: 'Socred S.A' },
  { key: '0299', value: '0299', label: 'Sorocred Crédito, Financiamento e Investimento S.A.' },
  { key: '0118', value: '0118', label: 'Standard Chartered Bank (Brasil) S/A–Bco Invest.' },
  { key: '0197', value: '0197', label: 'Stone Pagamentos S.A' },
  {
    key: '0340',
    value: '0340',
    label: 'Super Pagamentos e Administração de Meios Eletrônicos S.A.'
  },
  { key: '0095', value: '0095', label: 'Travelex Banco de Câmbio S.A.' },
  { key: '0143', value: '0143', label: 'Treviso Corretora de Câmbio S.A.' },
  { key: '0131', value: '0131', label: 'Tullett Prebon Brasil Cvc Ltda' },
  { key: '0129', value: '0129', label: 'UBS Brasil Banco de Investimento S.A.' },
  { key: '0091-4', value: '0091-4', label: 'Unicred Central do Rio Grande do Sul' },
  { key: '091', value: '091', label: 'Unicred Central Rs' },
  { key: '0136', value: '0136', label: 'Unicred Cooperativa' },
  {
    key: '0099',
    value: '0099',
    label: 'UNIPRIME Central – Central Interestadual de Cooperativas de Crédito Ltda.'
  },
  {
    key: '0084',
    value: '0084',
    label:
      'Uniprime Norte do Paraná – Coop de Economia eCrédito Mútuo dos Médicos, Profissionais das Ciências'
  },
  { key: '0298', value: '0298', label: 'Vips Cc Ltda' },
  {
    key: '0310',
    value: '0310',
    label: 'Vortx Distribuidora de Títulos e Valores Mobiliários Ltda'
  },
  { key: '0102', value: '0102', label: 'Xp Investimentos S.A' }
];

export const BankListSorted = (key: keyof BankListItem, direction: 'asc' | '0desc') =>
  BankList.sort((a, b) => {
    if (direction === 'asc') return a[key].localeCompare(b[key]);
    return b[key].localeCompare(a[key]);
  });

//exportar o banklist passando o id do banco como parametro mas sempre vai ser 4 digitos
export const getBankById = (id: string) => BankList.find((bank) => bank.key === id);
