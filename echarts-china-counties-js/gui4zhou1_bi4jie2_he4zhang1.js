(function (root, factory) {if (typeof define === 'function' && define.amd) {define(['exports', 'echarts'], factory);} else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {factory(exports, require('echarts'));} else {factory({}, root.echarts);}}(this, function (exports, echarts) {var log = function (msg) {if (typeof console !== 'undefined') {console && console.error && console.error(msg);}};if (!echarts) {log('ECharts is not Loaded');return;}if (!echarts.registerMap) {log('ECharts Map is not loaded');return;}echarts.registerMap('赫章县', {"type":"FeatureCollection","features":[{"type":"Feature","id":"520527","properties":{"name":"赫章县","cp":[104.727418,27.123078],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@@A@ABA@ABA@@B@BA@@B@FBD@F@FADCDCBAB@D@D@D@DA@ABC@AB@BAB@@@BAB@@@DBB@D@B@@@B@B@B@B@B@BAB@B@BAB@BAB@B@@@DDBBD@F@D@BABA@A@AAAEECCA@@C@A@AHAD@@@FA@A@A@@B@BAB@B@B@BBBBBBDAB@BBB@@BB@B@B@D@@A@@@AA@@@AA@ACAA@@AA@AA@@AAA@AA@A@A@@@A@CB@@@B@@ABCB@@A@A@A@ABADCB@@ABA@ABA@AB@@ABA@A@ABADABC@EAG@C@@@CB@BABABABCB@BCB@BC@@BADADAB@@ABABA@ABABA@C@C@A@AAA@A@A@@BA@@@AB@@@B@@@B@BB@@@B@@@DB@BBD@FAB@@@DBB@D@B@B@@BB@DABBD@B@B@D@B@D@BAB@DABAB@@AB@BA@ABABAB@BAB@@@DBB@@AB@@@BA@ABAA@@ABC@A@@@@BAB@B@B@@A@CBA@@BA@BB@@@B@@BB@BBB@BAB@B@BAB@BABA@AB@@@@AB@B@@@D@BBB@BBB@@@B@@B@@B@@BB@B@BBBBB@B@BB@@BBB@BBBBBB@@F@FDD@F@D@DBBBD@D@D@D@F@BAB@DGD@B@B@BBJBLBD@B@B@@BBDAB@@B@BB@@FD@BABAB@@BB@@BB@DBB@@B@H@@AB@@@B@B@DDDDFBD@DAB@BBD@B@@BD@B@BBB@BABBJDB@B@@@BAFA@AB@BAB@BABA@@BAB@B@BAB@@@BBB@BB@@B@@@@BBBBB@BB@BDD@BB@@BBB@DBB@B@B@B@@ABA@AB@BADE@ABA@@JIDA@ACCBCBCFKB@D@DBDAD@B@BDB@D@B@B@B@DB@D@D@D@D@BBBD@BBBDBFFD@@BBBB@@@BBDDDBBB@@@BBBB@@@B@@@B@B@@BB@B@B@@BB@@B@FCBC@@B@B@FDD@H@BABA@CBAFCD@BABA@@BAD@D@B@B@D@B@@@BAB@BCBA@ABAB@BABA@@FCDA@A@AAAECAAAA@@@CAAAC@@@C@ABA@A@A@@B@@A@AB@@@@A@A@@@AAA@A@A@@@A@AAABA@A@@@A@ABAD@H@F@BABA@@DCBABAD@B@BC@@BA@@@@@A@A@A@A@AAC@AAA@AAC@@BG@AJQLM@@@@B@BAB@BA@@B@D@BAB@@ABABABA@@@ABA@A@A@A@A@@@ABA@ABA@@@A@A@A@@@AA@AA@A@A@A@A@@@@AAAB@@A@@AAA@@@@BA@@@AAA@@@ABAB@@A@@AAAA@@A@A@@AA@@@@A@@A@@@A@@@@AAA@@A@AAA@@@A@AA@@A@@@A@A@@@AA@@AAAACAAA@C@A@@@@BAB@@@@@@A@@@A@A@@@@@A@A@@@@BKBG@A@@BA@A@C@@BAB@BAB@BA@AD@@@B@B@@@B@@@B@@ADABA@AB@@ADAB@B@BAB@BAB@B@B@BAD@@AB@B@DAB@B@D@B@D@HEB@BAF@B@BAD@BAD@@AB@@@BABADABABA@@@CB@@AB@@ABABADAB@BABA@@@@BAAA@@@CBA@@BA@ABAB@B@@A@@@AAA@A@AB@@ABA@@BC@@BA@@@@BA@@BADAB@B@HCDAB@B@BA@@@ABA@A@@@C@ABE@C@CBA@CBCB@BABADABAB@BAB@BA@@BAB@B@@@FCBABA@@B@B@@@D@BAD@D@F@D@BAB@@BD@HAD@BA@C@A@A@ABC@AAC@AAA@CCC@@@CB@@@EAA@AAC@@@C@@@A@@@@A@@@ABEBC@ABA@@@@PKHG@@@@@ABGHQBCHQDGCGCAA@@A@@A@@@@@AAA@GEA@GEKG@AA@CC@@GEWOSMOIECA@@@GCKEKIAEMQAIAIFEBCJCF@@@DA\\CZ@HBFBHBXDJBJAFCDEB@BCHK@GAMAA@@@A@@@@@A@@@CAKG@M@MC@@EASISECAOCAAMGCEGGOQKQIQIQEO@@EKKMGGKEKBG@UNKHCDCBOLKNCPCNGLGJIDIDA@KAQIGIAOGKIIIEECA@KKEQ@@CQKOMIGGGCGEECCCAAIKGMA@@O@G@E@IBGEDEDKDCBIDQHEDGDONMJED@L@J@NCP@FCRATGP@BKFAAKCIIIGMGQCMAGH@P@NADCJKDFH@BBDBD@BFJFHHLDJ@D@F@@@B@B@@AB@BAFILGH@HCHADEDCBMBKCII@@IGIAA@IBEPBNBPIPADONQHMAAACAA@ECOAQA@@]BG@Y@A@SBKBQDGB@BGJCLCFELELEDEBE@M@O@QPKJIJ@@A@E@E@UCSD]PMJ@@OAGEGM@EAIAI@@GGMAMDKH@@@@IJCNAJ@DBJ@@@L@PBB@B@BDBJHFDHRBPEL@@EHWBADCDL^GH@@QHIJAD@LPRBFBFIJKDCRAFN\\@JEBGBIBEDCDKd@J@@@DPjILCBEBIFABEBQb@@QbIAg@A@OAkGE@]IIB@BA@A@AB@@@BAB@@C@@@A@CBABC@ABABADA@CFA@ABBD@@BB@@BB@@BBB@B@@@B@@BB@BB@@BBB@@BBB@@BB@@BB@@@BBBBB@DAHBFBB@@B@B@@@B@BABAB@@@@AD@BABCBAJED@HBD@@@DB@@B@D@@BBFAF@B@@A@@B@@AB@@@B@@@@@BAB@@@@ABABA@@BA@@@AB@BA@BBBBDDB@PCDABCDCDC@AB@DBB@@F@@FBDBHDB@D@@AB@BA@A@A@@B@BE@A@@B@BBBBB@BB@@@B@@@BAB@@AB@@AB@B@@@BDBD@BB@DDBBBBB@@ABABCD@B@BABAB@@ABA@ABAB@@ABBB@BB@@B@B@@@BC@A@A@@B@BDD@BADAF@B@BFBHD@B@@@HB@B@BB@B@DBBBBB@DBD@@@DDDH@DBBBB@@D@DAD@B@BBB@BB@D@FAD@BAD@BDBB@@@@A@G@AD@B@DBDBBB@@BB@@BBB@@@@@BB@@B@@@@@B@BB@@@B@BB@@B@@@B@@B@@B@B@B@B@@B@@B@B@BB@@@@D@@B@@BB@@@@@@@@BBBBB@DAB@DBFBFDDBB@DB@BBJ@J@@@D@@@D@@@@DDB@@DBB@BB@B@@@BA@@B@B@@FHBFFFBB@B@B@@ABA@@B@@BB@@B@FCBA@A@C@@B@@@B@BBAF@D@BBD@BABCBEBABCD@@@BA@@B@BBB@@BBDB@@D@@BDBB@BBBB@BB@BB@@@B@BB@@BBB@B@@BB@@@B@BA@@@ABA@@@BBBBBBB@BBD@BBB@D@B@B@D@B@BBBAB@DABABAB@@ABAB@@@B@B@BBB@@@@@BBB@B@B@B@DAB@BAB@FAB@BADAB@J@FCDCB@BADBDBFB@@B@@CACCE@CBGHC@@BCBIBAD@D@D@B@H@DABADA"],"encodeOffsets":[[106939,28091]]}}],"UTF8Encoding":true});}));