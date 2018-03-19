(function (root, factory) {if (typeof define === 'function' && define.amd) {define(['exports', 'echarts'], factory);} else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {factory(exports, require('echarts'));} else {factory({}, root.echarts);}}(this, function (exports, echarts) {var log = function (msg) {if (typeof console !== 'undefined') {console && console.error && console.error(msg);}};if (!echarts) {log('ECharts is not Loaded');return;}if (!echarts.registerMap) {log('ECharts Map is not loaded');return;}echarts.registerMap('沂水县', {"type":"FeatureCollection","features":[{"type":"Feature","id":"371323","properties":{"name":"沂水县","cp":[118.627917,35.79045],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@C@A@A@AAAAC@AA@@C@ECA@AB@BCBC@@@@BA@@@@@C@@@AB@B@@@@CCC@AAE@A@EBA@@B@@@BA@AA@@A@EDCFABC@@D@H@BCBG@K@CA@@AAA@A@A@@@EBEDGBAB@DABCD@B@DDBBDEBC@C@@@@@E@GBKHCBABA@CACAACEECCCAEBGHEDADCDABCBCDEB@@@@@@CBAB@@@@ABEBABGDGBGDC@ABE@E@C@E@I@E@C@A@C@EBE@SFEBEBABA@GAGEE@E@EDCBCDCFABEH@D@@@DBBDHBDBB@F@B@DCJ@DAB@DAH@@ADEDCB@@C@IAC@E@C@I@CBC@K@C@E@GAG@E@IBGBE@EAECGKEE@@@AA@EEA@A@C@@@@@@A@@DA@AF@@ABA@@@@AAC@@@CBA@AB@@A@AAAAA@CBEB@@C@A@@@GB@@ABAD@@CBA@@B@B@BBJBF@D@BA@A@@FAB@@A@A@CAA@A@AB@B@@@BBBBBA@AB@B@@@B@B@@@@CB@@@@@C@A@AA@@@A@A@A@A@@@AL@@ABB@@@@@@@B@B@@B@@@@B@AB@@@@B@@BBB@@@@@@@@@@@@@@@B@@B@@@@@@@@@D@@@B@@AB@@@@@B@@BD@BBD@DBD@BBDBDBDBD@BBBB@@@@@@@@@@@BA@@B@BIJGHGH@BADAD@@DDAFCHADADEFCBCDEDAFAD@FAD@F@BAFCFAFCDAFAD@BABAHAD@DABCDEF@@CBCDCDCH@DDDD@D@FCHAF@DADBD@HBFBFBH@HAH@HDBDCFAFCDAB@BAD@D@DADBFAD@DAFAB@BCHAB@@@BAF@DBD@D@BBDBD@BBDBD@DBB@@@B@D@B@DBBBBBBBB@C@AACBA@ADABABADADA@@D@B@D@FAD@B@B@@@@A@@@@@A@C@C@@@@B@@AB@@@@@@@B@@@@@@B@@@B@@@@B@B@FBB@DBB@BBB@@BB@@BBBBBDBDBD@DB@@B@B@D@D@B@B@B@B@@@BBBBBBBBDDBB@BBBDDBBBBD@BBB@DBB@D@D@@@@@@@B@@@@@@@@@@A@@@@@A@@@@@@@@@@@@D@@@@AB@@@BA@@@@@@B@@@@@@@BBB@@@@BB@@@@@B@BBB@B@BBD@BBB@DBB@D@BBDBD@DBD@B@DBD@F@BBB@BDBB@DBB@BBD@B@BBDB@@B@@FBB@@BB@@@@@@@BA@@B@@@B@@@B@@@B@@@@@@BB@DBB@@@@BB@B@@@B@@@@@B@B@B@@@B@@@@@B@@@FD@@@@@@@@@B@@A@A@@@@@@@@B@@@@@@@@@@@BBB@BBD@BB@@D@@BB@@@@B@BB@@B@B@@@B@@@@@B@B@B@@@B@D@D@F@DB@@@@F@D@DBD@B@@@@@@@B@@@@@BC@@DEBA@AFEBADCDCBA@@@ABC@ABCB@DCDA@AFCDAD@B@B@D@DABAB@@AFCDCFCBA@@@@B@@@@@B@DBB@DBBBB@BBBD@BDBDBD@D@BBD@B@D@D@D@D@D@D@D@D@D@B@D@@@@@B@@@BBBBBB@@@B@@@@AB@@@@@@@D@@@@@@@@@@CBAB@@@@@BAB@BAD@@@@AB@@ABABEBCBCD@@@BA@@@AB@BAB@B@B@@@@@B@@@B@@@@@BB@BBBBDBBB@@@@@@@@@B@@@@@@@@A@@BC@CBA@@@A@@@@B@@@@BB@H@BKJC@ABAD@BB@AFA@IHAD@@DBDD@@ADFHNADEHCF@F@J@HCFF@DBBHAFCFABDDR@HBBB@BB@BCBCDB@@@CBBFFFCJADCBA@ABCDBBDB@FGBBDAFG@ABHDXN@JDBF@DHCFCFCDB@BBBB@@@BUDQAA@C@ABA@A@@@CFABBBD@FCD@B@@DFFHGBAHBNDDFHDHBB@DFCDDBFBDADA@EB@DLDDDBJDB@DAB@B@BB@ABA@@BBDLCHCF@DBDDFHFDHB@F@B@@AAA@@HED@@@RFHHBBBBJDF@DDLNB@FABBFJDB@@B@JGD@NEB@HBBBBDBFJ@HAB@LGB@FADCF@H@FBBCFEDKBA@@B@@EEC@CDABBB@B@FC@ADBFA@GBAFAB@HBDNBBHDLBBAJCBCAG@E@ALADFRFGJ@DDH@FALBBFBB@BAB@BC@@@@@BBB@@B@D@AHBBBB@@BBB@B@@B@@A@B@ABB@BJBDADCFA@@AA@CBBHDDB@NH@@HJHFFBDAFCFBBAFEBAB@@@LCD@DBD@LFDBF@FCHCF@B@BB@@DBB@B@D@D@P@JDBBNADA@@FC@QBABACAEE@ABKBK@@JEHBFIDE@K@A@CCCBIAE@ADCFABABAAC@@C@BI@AA@G@BE@EDKACBAAADA@@BBBAD@DC@@@AC@CBACAEBABA@AC@AA@CBAHGJAJGDIFA@A@@B@B@BBFFDBHCBBDBDBB@J@LBBBDFABFFDFBBC@GAAHBBH@B@BAH@BB@BEBCB@B@BFDHBB@D@FEB@HBDBFFFDBBB@D@BABEHEFABC@ABEDCD@B@D@@@HBD@B@@C@C@A@A@@@@BA@@@@F@@@F@@@B@HEDAB@HC@@@@B@B@@B@@AFD@RFD@@ABAJ@@@D@DBDB@DD@HFH@BADAA@BCBEBA@@B@@@D@D@BAB@DG@@@@BA@@@@F@B@BBDB@@F@B@B@@AFCBADADAB@D@BBB@@CBEFAAC@CBA@CCAA@@B@@@@C@AAEA@@AAA@@@@AA@AA@@AAA@@AA@@@AAA@AC@ABA@ACECCEC@@@A@@A@BC@G@@CAAA@@@C@A@@@@BABAB@@AFCFAH@@AACCAAA@C@@@@A@@@@@@@@AB@B@AICAE@MBACEB@@MDC@@DADCBCBIFCBCAA@@@I@A@ED@BA@AB@AAA@B@@@AGKAACE@@@@EIIGAAGCEAEAAA@@A@@@A@AAA@UE[AC@O@G@A@A@A@E@c@A@QAAAQKIKCADEDCFCDADAB@DCDCBCBCBC@@AG@CCCCESKIAKCSCG@IA@@A@@@MAQCM@M@GBC@GAGACACCAEAC@C@E@EBABE@E@AECIACAE@E@G@G@C@A@EACC@C@C@G@EBIDEACC@GBC@G@@C@@AAACACCE@CCC@@ACAC@E@C@A@A@A@ABE@C@CAE@EAA@AAECEECG@C@E@G@GAAACACCCGEA@C@@@@AA@C@EBCBC@E@CBCAE@@CECEACEEACCCCCEECACCAAA@ACAACGBE@E@A@AB@@A@CBEBCBCBCBABC@C@C@A@CAGAEAE@E@EDC@ADCDCD@B@DEF@JCD@DAF@B@F@FAD@J@B@F@DABAD@FAB@D@H@F@HBB@B@F@H@@AF@@@@ABDD@D@@ABBBBBBF@FBF@F@D@FADEBC@EAE@EA@AAAEAECECCACAA@A@@@@@@@@AEACACAC@@AE@CJE@GAACAK@CE@@BEAEAACEEAC@A@C@CCAACC@@ACAAACECCCGEAC@@A@CCEECECAIK@@CGACAG@C@C@CAI@MEBI@EBE@CAEA@@EEEBCB@@CBA@KFCBA@C@CACAEBCBCBAD@R@DBHDFFJDFBD@BBDBFBB@HAD@BABCDE@E@GCCQQ@ALGDC@OLCBGFMFC@@@EHGDA@A@AACAACCCC@@@CEGGAAACAE@A@CAAAAA@CAEAABAD@DABABAD@H@BA@EDEACACCA@AB@@AD@BABI@@@GA@@CI@E@C@C@E@CACAAAAEACAKB@B@BBD@BAB@@C@"],"encodeOffsets":[[121411,36500]]}}],"UTF8Encoding":true});}));