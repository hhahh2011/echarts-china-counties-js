(function (root, factory) {if (typeof define === 'function' && define.amd) {define(['exports', 'echarts'], factory);} else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {factory(exports, require('echarts'));} else {factory({}, root.echarts);}}(this, function (exports, echarts) {var log = function (msg) {if (typeof console !== 'undefined') {console && console.error && console.error(msg);}};if (!echarts) {log('ECharts is not Loaded');return;}if (!echarts.registerMap) {log('ECharts Map is not loaded');return;}echarts.registerMap('融水苗族自治县', {"type":"FeatureCollection","features":[{"type":"Feature","id":"450225","properties":{"name":"融水苗族自治县","cp":[109.256334,25.065934],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@@H@LAF@FBDBDBBBB@DBBBDCFCR@BDDADAAG@AB@@@DABCD@@ABAFAD@D@BFDFDCB@DFFBDADAF@BAD@BBB@DBBC@EBEB@BDDDBBBC@CBCF@D@D@B@DA@C@A@C@C@C@O@A@ADA@C@@BAHAB@BABAHBBDBB@DD@DBFBB@@JB@BDHEFADBF@J@@ADBFHJBFBJHLBHBDBBHILMFEJCF@BBAFAF@DCDAHC@GAC@CBB@BB@@AB@@@@AF@BA@@BA@ABA@CB@@AAA@@@A@@B@@ADAB@B@@@B@@@@FBJAHBD@@DABAFDFBBFBHHDBAB@@AB@D@DDFDDDBHDDDDBDBFAFA@@B@B@BB@D@DBBFADAFCDBDHBBB@BADCBADADCLGJCH@@DAD@NAHCD@@GBGDONABEBCDK@AB@DBFDFFDBDADCD@DA@ADAHDDDBD@FB@@ABE@ABABCHDBBDDDF@@@HBFAFCLAB@BBBB@@@DA@@DBB@@AB@BB@@BF@B@@DABABABBBBB@B@@ABA@A@C@C@AB@BBBBBAD@BDDBB@B@@BBBHBFHA@@RFD@DCHADBF@HFDDFFBDABDBH@JBT@FBDBF@FAH@D@DBDABADABC@@@AE@@ABA@@DBLALAHABCA@CA@@@A@@@AB@B@BABA@@B@@@@AA@@A@A@A@@A@AAA@A@@BABA@@@A@A@@A@A@@@A@ABA@AB@@@DBB@@A@A@A@A@A@AB@BA@@@A@@A@A@A@@@A@@@AE@AB@DADAFADABAHEDCAA@ADCDCCAAC@ABABCBA@ABAAAEAABC@A@A@AAA@CAAC@C@C@AAEAC@CACEC@ABAF@FADB@@@@BA@A@@B@BA@A@@BA@@@@@AB@AA@AB@@@@@B@@AB@@@BB@@B@@@@@@@@AB@@@@@AA@@@@B@@@@@@A@@B@AAB@@A@@@A@A@A@AB@DCBAFABCDEDCBABBB@DH@@DL@F@@BBB@DBBFBB@F@BB@BBBABADCF@B@DB@@J@RB@@B@B@BBB@@@BA@@@@B@@@@@@F@@@@A@@@A@@@@B@@C@A@@@@@@B@B@@BBB@B@B@D@@@BAD@@@@@BB@@BBB@B@BBB@B@BB@@@@@ADCBADAF@B@FBFBF@HB@@B@B@@ABAAKCG@AFCF@BAD@JBFDFBHAFBFDD@LHBDFF@@DBB@BCHAFBFDJBB@FADCFEHCDAHADEBAB@BA@E@IBC@AB@JDJ@F@F@HFFCBG@@HGHAFGFENCHGFA@@FDBDHFDB@@BBHFHF@@BB@@@@BAB@@@A@AA@@@@D@BABA@@@@@@@@AAA@@@@@BA@@B@DBJFB@DHB@PRHAFAH@B@BDBF@B@FDB@@@@B@B@B@@@BBBBBB@B@@@@A@C@ABGBIBEDEHCFC@EDEDOBCDEFAF@@@DAT@BAPCF@HBD@DAB@DD@D@DHAHADBBA@EAE@AD@BDDCBEDGBCD@D@BBDDDFDF@@@DBAD@B@H@DDF@DB@@HBBJFBF@B@DDBBBBBBD@FBFBFJFFJDDD@BBDBDBDB@DAB@BAFCPBFDFHLFAF@HBJBFDFABAJ@D@DPDBBABBB@@A@ABA@A@AB@DA@@DAB@@@BAB@BA@@BAB@@AB@B@BA@@BAB@@AB@D@B@DAD@B@B@BB@DAB@DBBDBDBBBBBDBD@D@DABAD@BB@DBBBBB@D@BCBEBA@@AC@ACCCACAACCAAAB@BCD@FA@AAAC@AAC@AACA@ABCB@A@B@FBB@D@D@FBBBBBBBBA@ABAB@B@BACC@C@A@ABA@@BC@AA@@ADAAA@@ACCG@CB@BADCB@BADAB@BA@A@A@A@@@EBCDABA@@@ABADC@A@A@A@A@CBABADB@@B@B@BA@@FCBGB@B@@BB@DA@ABAB@BA@@BADA@@@@B@@B@BBBBB@@DA@BDABB@ABAHGBE@ABABABADAB@@@D@BBB@B@@@AB@B@@@B@B@BB@BBBB@@AB@BBD@@@B@@ADABEBC@CBCBABABAAA@ABBDAB@FBDBDBBDADD@F@BBD@FADABADADCAA@CBB@BBBDDBD@BCDCDAB@DAB@F@HBLBH@BFD@@C@EH@DCFBDBFDFBFAHAFADCBE@E@EDAF@BDBFFBD@BEDCFADAHAFA@ACAACBCCE@AA@@@EGECCAAAECCABA@@BCDCBAAACAECECACDADCB@BA@AB@@@B@FBB@B@BBD@L@BAD@D@D@DB@CF@B@BBBBBB@BBBBABAD@@@@AA@AC@CBE@A@A@@@A@@@ABA@@@ABA@ABAB@BC@A@@F@B@B@B@BB@@B@BA@AB@B@BBBBB@BB@@@B@@@BBA@@@B@B@@@@@B@@AB@B@@@B@@@@@BAD@@@BB@@@AB@B@@B@B@@B@BA@@@BBB@@A@@D@@@D@@@B@@ADA@@B@B@@AB@@@DAFABCDAACBABABBBAB@@@@@@AA@@AA@CE@EBAFADCDEBCEBAAC@@AB@F@D@DABBFE@CFEFE@A@@@@HAR@@ADBB@B@HFBBDFD@DDABBBBFBDBFL@AABADADAFBDAB@BBB@BABABAB@BABAB@B@BABAFBB@D@BA@ABCDADAF@BAACACBABAFGFADG@ACBAACA@C@EAC@CBA@AB@DCFC@C@A@CEGEAAEACFGBCDADCBACCACCBEBA@@ADCCAEABCD@BGBEIQISCY@A@ACOFAF@FCCACCBC@GDAB@D@DADABBD@BA@GBC@EACCAEBC@A@ABAAABCCACC@@CA@@C@@ACC@BAEA@CCBDE@CEC@AE@A@ACBAAEADABCEDEBIBEACABC@ABCBAAAAAAC@@AAB@ABABEEEB@DCDABABGDC@ADA@ACCBCDC@GAA@BEBGDK@IDICAC@CGE@AG@@HOBG@GC@CIDQAGBK@EEAAEC@AECDGBIBE@GDEDYG@GEMIAAEC@@@@B@AADABGNMNGBEHBDFDADDJAAEHIHAAACIBE@AKECCCAAE@A@AE@AAAAGGAECCA@ECAEC@@A@ACAB@AA@@@@@@CI@@@EIGKAI@CEA@GE@AAAAGEGHCAE@@AAA@AAE@C@EAC@CDEAGCSCEEE@A@@@ACAGAE@@@@DAF@BAB@DADBDAFGA@DC@ABADCBE@AAADAHBDA@ADADFBBF@@BLAB@LGAABED@@CDCDDHEAGAAD@CAAAAA@@AB@AC@AA@@B@C@@@A@@A@@A@AA@AA@AA@@A@A@@AA@AAA@A@A@ABC@AC@ACABCAA@E@@B@ACBAAC@AAA@CDAFIB@DAB@BCB@BBBAB@@AB@DEFA@AE@@ABAAAB@B@ACC@@A@@@AAA@@DABCA@AC@@@ABBBCA@BA@A@AB@BAB@@CB@@A@A@EA@ACA@IAMAKAICECA@EG@@DGFCJEH@FADCDCFC@CCG@ECCAADABE@C@ECAAEBE@A@@AGAA@AEEAECEE@AEB@@AGCAE@AAA@C@EBA@ADCBCFAB@D@AACCECBCAA@C@EGAE@CEBA@GB@@CCCC@AAC@ECGCA@B@A@CC@@ACGECAA@AA@CDABAGA@AAC@@@I@KAAEACAG@KAKBM@CACA@C@E@OAO@EAG@I@AG]@@@@@CD@B@BABC@@@AF@B@B@B@@@@A@GBEAAAAA@DAA@A@@AAA@CA@C@C@@@CACCLSDAACGCACCCCAAABEAEA@@@AABA@ABA@@@AACAABAAAAAECCECE@EBCAEA@AIBE@CE@A@EBSBGAG@G@GCEAE@IAE@ECK@A@E@A@C@E@@BBB@DBF@JAD@DABCDEDEAE@KCE@C@AB@B@D@B@D@B@DBDBFBDFHFFBF@@@@CBCBCBA@ADA@BB@D@@@@@B@@@B@@@@A@@BB@@BABBBAD@B@B@BA@@B@BBBAFB@BBBDABAB@BBBB@@@BBB@BBABB@B@D@D@BAD@H@@@@DBBBB@BA@DFBB@@BD@BA@E@A@@B@D@DGHADADC@CBABA@@H@FE@@@CDEDGBEBBD@@@@@D@BB@@@@BA@@DCDIBCDDDAB@@IASAGBI@AAEABCEGBE@EAEAABEBC@EA@C@ABA@@@A@A@@AA@@A@A@A@A@A@@ACCAGBCBC@CCCCA@C@CD@BK@MBCDEAC@OAUCC@EAA@CD@@E@C@ABCBA@CAIDAB@BBBB@ADCBEAGDABAB@DCDGB@BBB@B@D@@@@@B@@CF@FFD@@B@@@ABAB@@ABAB@@BB@@@@@B@@@@BBBB@BBBB@B@@@BB@@@@BD@@B@@@B@BB@B@@@D@BBB@BB@@@BB@@BB@@@BB@B@B@B@@@LDBB@@B@@B@B@@@@@BBB@DB@@@@@B@DCB@@B@@BB@@@B@@AB@@@B@BDB@@@BBB@@@@B@FAB@@@@@BB@@@@@@@D@BA@@B@@@@D@D@@BB@@@BCB@B@@ABBBB@@@BB@@D@D@@B@@BB@B@@BB@BBB@@@B@@B@@B@@B@@B@BA@@BAB@@@@@B@BBDABA@@B@@@@BAB@@BB@@@BBBB@@BBB@@@B@B@@@@BAB@@@B@@@@B@@@B@@@@@BBB@@B@B@B@BBB@B@@@B@BB@@@@AB@B@D@@@@@@BBB@@@@BB@B@@@ABB@@@@BAB@@AD@BB@D@@@@@@BAB@B@B@D@@B@B@B@@@@B@@@B@@@@B@@@B@@@BBBBB@B@B@@A@@@AB@B@@@B@@@DBB@DBBBBB@B@B@@@B@@A@@BA@@BAHCN@B@@ABB@@BB@@@B@@@ABB@AB@BA@@B@B@@BB@@@@@D@@@@A@B@@BB@B@B@@@BB@@BBBB@@BB@BBBB@BB@B@B@@@@B@B@@B@@B@@B@@@BBBAB@@BB@BB@@BCF@@A@@BA@@@@@@@@@ABA@@BA@@BB@@BB@@BBB@@D@BB@@BB@B@@B@@B@BB@B@@@@B@@@B@B@@@B@D@B@@BB@B@B@@BBA@@@@@@BA@@@@BA@@@@B@B@@A@@@@BA@@B@@A@A@@@@BB@@@@D@B@@BBBB@B@B@@@@@B@@ABAD@FDFAFADCBCDAFGDBDED@FBFDFDHA@@FBH@LABA@IFKDEACFGHE@G@CDCBEF@FAFCDEFG@@@CACEI@G@EECCEGEGAGACCEIAIAECECGAABA@AB@@AB@@@BA@A@@@@B@@@BA@@BA@@B@@A@AB@@A@AB@@@@AB@@A@@@@@AA@@@AA@A@@A@@@AAA@AAAAAA@AC@@AA@@@A@A@@@@@AA@@@@A@@AA@@@A@@@@@AA@@A@@@A@A@@A@@AAA@A@@@@AA@@@AAA@@@@@AA@@@A@@@AA@@AC@@@A@@BAB@A@@A@@@@@A@@@@AA@@@@@AAA@@@A@@A@@A@AA@@@A@ACAA@CA@AA@@@A@@AAACGE@@@@C@A@A@ABAAABC@A@C@@@A@A@@B@@A@@DA@@@@@@@CB@B@B@BA@@@@@A@A@@@@@C@@@ABAB@@A@AB@@AA@@@@AAC@CGE@AB@@E@CAA@A@A@@@AB@@@BAB@BCBCBA@A@@@AA@@CBBDDDH@FFAFAJ@JCBEBIAG@GCAECECBE@EECEAAEAABABCBC@ACEDCFEDAFAFCFCBE@@D@@AB@@CCIACAEACIAGAIEGEEIE@@@AA@@@@A@@AAA@@@BA@ACIAIBGEEABA@ABCB@@C@ABA@A@A@A@@@C@A@A@ABA@@@@BA@BBAB@@@BA@@B@@@DBBA@@@@B@BBB@@@BA@@D@@@@A@G@CBABECGBAAA@@AA@@@A@@@AA@@AA@@@@@@A@@@CA@@A@@@AAA@AAA@A@@A@@@AA@@BA@A@@@A@@@A@@@A@CB@@@@CA@AA@@BAB@@A@ABA@AB@@ABAB@B@@ABA@@@@A@@A@@@@@AA@@AA@A@@BA@@@A@@@CA@@CB@@@ACBABA@A@A@AAA@AAAA@CA@@A@AA@AA@A@AA@@C@A@@@@@@A@ACA@AA@A@@A@@@A@@@AA@A@AAA@A@CDA@A@@B@@@B@@B@@BBBA@A@A@C@A@@@A@C@A@@@E@EFEAEA@CG@ADEFGD@FGAGECAC@ADCFCH@FDDBDAHBHB@HAF@@A@@F@@BC@@B@B@@A@@BDDCFB@@@B@B@@@@@@B@@@@ADA@@@@BBB@BA@@@@@@AA@@@@@A@B@@BBF@@DB@@BBAB@@@@B@@@@B@A@BB@CHD@@B@@B@@BA@@@B@@B@@@BBB@BBB@B@@@B@B@@@B@@B@@@D@B@@A@@F@FAFDBCAEBG@EFBDDFH@B@@@D@@@B@@@@ABB@@@@@@D@@@B@@@DFHBF@@BB@@AB@BCB@@@@A@@@@@C@@@A@ABA@@@AB@BA@@@@@@BC@ADABABABCB@@ABA@A@A@@@C@EBCFE@@@A@AB@@@B@@AB@D@BA@BB@@@B@BAB@@A@@@A@@@AA@@A@@@@@A@A@AB@@A@AB@@@@EBAAA@AAA@CBAB@@ABAB@@ABAB@@A@@@@B@@@@ABA@AA@BADABAB@B@@@D@B@B@B@BABBB@D@BAB@B@@@B@B@B@@@B@@@@@BBBBB@BB@@@@B@@@BA@@@AB@@AB@BAB@@AB@B@@AB@@@B@@@@@B@@A@@@@@AB@@@@@BAB@@@B@BBB@@@BA@@@@@BF@BDFDFCBCBADDHAHEJCBBHCHFFAFEFIFEFGDID@B"],"encodeOffsets":[[111233,25917]]}}],"UTF8Encoding":true});}));