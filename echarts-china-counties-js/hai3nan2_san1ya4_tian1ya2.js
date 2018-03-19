(function (root, factory) {if (typeof define === 'function' && define.amd) {define(['exports', 'echarts'], factory);} else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {factory(exports, require('echarts'));} else {factory({}, root.echarts);}}(this, function (exports, echarts) {var log = function (msg) {if (typeof console !== 'undefined') {console && console.error && console.error(msg);}};if (!echarts) {log('ECharts is not Loaded');return;}if (!echarts.registerMap) {log('ECharts Map is not loaded');return;}echarts.registerMap('天涯区', {"type":"FeatureCollection","features":[{"type":"Feature","id":"460204","properties":{"name":"天涯区","cp":[109.452378,18.298156],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@GHSH×VUJYVMNop]JUHmACAF@J@H@H@D@F@F@F@F@FAF@B@B@@AFADBD@FABABBDDJBF@DCF@DBF@FBDBDAFAD@D@DFBB@DBDDD@BAF@F@B@DBDDBDBDBBDBFAD@D@@@@B@BB@@B@B@B@D@D@B@B@@BBB@@BAD@@@B@B@@@B@B@B@B@@@B@@BBAB@B@B@@@B@B@BA@@B@D@DAB@@@B@D@B@@BD@BAB@B@B@B@@@DDABBBBDBDABB@FBBABA@AFADA@E@E@AFEJA@eJCECABDDFBDDDBDBFQRA@{@WJKHB@@BEFBDDBF@BF@BFFAHBH@NCPCD@@EBAF@JCJ@HBHBFDBDH@@@@@@@@@@@@@@@B@@@@@@@D@@@@@@@B@@@@@@@@@@@@@B@@@@@@@B@@@@@@@@@@@@@B@@@@@@@@@@@@@@@B@@@@@@@@@@@@@@@B@@@@@@B@@@@@@@@@@@@B@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@BB@@@@@@@@@@@@@@@@B@@@@@@@@@@@@@@@@@B@@@@@@@@@@@@@B@@@@@@@@@@@@@@@@@@@@@@@BFBBHD@FAHBHDFFDFBF@FCHANANA@@@@@@@@BB@@@@@@@@@@@@@@B@@@BB@@@@@@B@@@@@@BB@@@@@@@@@B@@@@@@@@@@@B@@@@@@@@@@@@B@@@@B@@@@@@@@@@@@@@@@@B@@@@@@@@@@@@@@BB@@@@@@@@@@@@@@@@@BB@@@@@@@@@@@@@@B@@@@B@@@@@@@@@@@@B@@@@@@@@@@@@@BB@@@@@@@@@@@@@@@@@@@@@@B@@@@@@@@@@@@@@@B@@@@@@@@@@@@@@@@@B@@@@@@@@A@@@@@@@@B@@@@@@@@@@@@A@@B@@@@@@A@@B@@@@@@@@@@@@A@@@@B@@@@@@@@@B@@@@@@@@@@@@@@@@@@@@AB@@@@@@@@@@@@@@@@@@@@@@@@@@@B@@@@@@@@@@@@@@@B@@A@@@@@@@@@@@@B@@@@@@@@@@@@@@@@@B@@A@@@@@@@@@@@@B@@@@@@B@@@@@@LGDAFEDE@A@@@A@@@@@@@@@@@@@@@@@@@@@@@@B@@@@A@@@@@@@@@@@@@@B@@@@A@@@@@@@AB@@A@@@@BC@@B@@A@@@@BA@@@@@@@A@@@@B@@@@@D@D@DBFAFCB@@@@@@A@@@@@@@@@@@@@@@@@A@@@@@@@@@@@A@@@@@@@@@@@@@@@@@AA@@@@@@A@@@@@@BMDIB@B@@@@@@@@@@@@@@@BB@@@@FFDBDBDCDA@@JBDDBBDDBFBD@@@@@@@B@@@@@@@@@B@@@@@@@@@B@@@@@@@@@@@@@BCJ@@CFCFAF@@@@@B@@@@@B@@@@@B@@B@@@@@@@@@@@@@@B@@@@@@@@@@@@@@@@@@@@@@@B@@@@@@@@@@@@@@@@@@@@@@B@@@@@@B@@@@@@@@@@@B@@@@@@@@@@@@@@@@B@@B@@@@@@BB@@@@@@BB@@@@@BB@@@@@@@@@@BB@@@BB@@@@B@@BBB@@DB@BBB@@@@@@@@@@B@@B@@@@BB@@@@BB@@@@@@@@@@@B@@@@@@@@@@@@@@@@@@B@@@@@@B@@@@@@@@@@@@@@@@@B@@@@@@@@@@@@@@@@@@@@@@@@@B@@@@@@@@@@@@@@@@@@@B@@@@@@@@@@@@@B@@@@@@@@@@@@@B@@@@@@B@@@@B@@@@@@@@@@@@@@@@@@@BB@@@@@@@@@@@@B@@@@@@B@@@@@@@@@@B@@@@@@B@@@@@@@@@@@BB@@@@@@@@@@@@B@@@@@@@@@@@B@@@@@@@@BB@@@@@B@BB@@@@@@B@@@@@B@@B@@@@@@@@B@@@@@@@B@@@@@@@B@@@@@@@@@@@@@@@B@@@@BB@@@@@B@@@@@@@@@@@@@B@@B@@@@@@@@@@@@B@@@@@@@@@@B@@BBB@@@@B@@@@@@@@@@B@@@@@@@@B@@@@@@@@@@B@@@@@@@@B@@@@@@B@@@@@@@@@@@@@@B@@@@B@@@@@@@@@@@@@@@@@@@@@@A@@B@@@@@B@@@@@@@@@@@B@@@@@@@@@@@@@@@B@@@@@@@@@@@@@@@BB@@@@@@@@@@@@@@@@BB@@BB@@@@@@@@B@@B@@@@@@@@@@B@@@@B@@@@@@@@@@@@B@@@@@@@@BB@@@@@@@@@@@@@B@@B@@@@@@@@@@@@@@B@@@@@@@B@@@@@@@B@@@@@@@@@@@@@@@B@@B@@@@@@@@@@@@@@@@@@B@@B@@@@@@BB@@@@@B@@B@@@@@@@@B@@B@@@@@@BB@@@@@@BB@@@@@@@BB@@@@@@@@@@B@@B@@@@B@@@@@@@BB@@@@@@B@@@@B@@@@B@@@@@@@@@@BB@@@@@@@@@@@@@@@BB@@@@@@@@BB@@@@@@@B@@B@@@@@@B@@@@@@BB@@@@@@@@@@@@@B@@@@B@@@@@@@@B@@@@@B@@@@BB@@@B@@@@@B@@B@@@@@@B@@@@@@@B@@B@@@@@@B@@@@@@B@@@@B@@@@@@@@B@@B@@@@@@B@@@@B@@B@@@@@@@@BB@@@@@@@B@@@@@@@@B@@@@@@B@@@@@@@@@@@@@@@@@@@B@@@@@@@@@@@@@@@@@@@@@@AB@@@@@@@@@@@@@@@@@@@B@@@@@@@@@@@B@@@@@@@@@@@@@B@@@@@@@@@@@@@@@B@@@@@@@@@@@B@@@@@@@@@@B@@@@@@@@@@@@@CFC@ABA@O@AAC@A@@AC@ADABAACD@B@BC@C@A@ABCBA@CBADCBA@CBA@AAEBABCB@BABB@A@C@AAA@@CA@CBC@@BABAB@D@FDBB@B@BBBBAB@BBB@D@BAFAFEFCFAB@BADADCN@D@DBPDJED@BADAHCJBBAB@B@D@B@F@DD@AB@DE@ABQDAFAJAB@NABAFAHCDCB@BEAC@OAA@ABG@A@EBA@A@OAAAAB@@CBE@A@A@AAAAAIGAACEAABCBEAACA@AAM@A@A@@CAAA@I@AJGBA@G@AAEA@@A@A@A@AAAGGA@ABA@AB@@AB@@A@@@@ABA@A@G@@BAB@B@@ABCFC@ALCB@BA@@@@@A@@BAB@@@BI@AJCBA@@@A@A@@@A@@@A@GBCCCAECAAA@CAA@AAA@AAAEAEAEACE@FAD@BKBKDACAA@AACAAGFEDE@AAAA@CCAI@EBABKBDEFGDADCD@BE@AA@@@@BEBA@A@A@CBIBA@AA@GC@GCAA@BADABCAA@CAAAA@C@AC@C@CBC@ABA@AB@@A@E@AC@KECCDCBGBA@A@@@B@@B@@@@@@@@@@@@@@@@@@@@@BB@@@A@@@@@@D@AABAA@@@@@AA@@@@@@@A@@@A@@B@AA@@@A@@B@BAB@B@B@@@B@@@@A@@B@@@@A@@@@@A@@D@@AB@@ABB@@@A@@@A@@@@@A@@@A@@B@BC@@@@B@@EA@A@A@@A@AB@@@@@B@@@@AB@B@@@@D@B@FB@@B@B@DB@@@@@AB@B@AADB@A@@BD@B@@A@@@A@A@@@AJ@B@@B@@@A@@D@@@@@DA@B@B@B@@BB@@@D@BAB@B@BAD@@B@@DBAB@B@BB@BBD@B@@BBBB@BB@BABCDEAC@@@CAA@AAA@CBAB@BA@@F@@@@ADB@AB@@A@@@A@A@AAB@@AB@@@A@@@A@@@@@A@@@@@@@A@@B@B@@BB@@@@@@@@@@@B@@@AAB@@@BAA@AABAAA@A@BA@@A@A@@AA@@@ADABBDC@@EEB@AA@@CABA@@@AB@@A@@A@@@AB@@@@@@A@@@C@A@A@AAAACAAAA@@CBCBCAABAD@F@D@@@@@@B@@B@@@@BB@@@@@@@F@B@BB@AB@@A@AD@DAF@@EAC@@@@@A@AB@BABB@@@@BA@CA@A@A@@@@B@BA@AEA@ACAABAAA@AAA@@AA@@@@@@@A@@A@CBA@AFAADEACBGFGHCBAB@FE@@@@@@BE@E@C@@@K@@BE@C@IAAAC@@AEDCH@@@FB@A@@B@@@A@@A@@@@A@@AAAA@A@A@@A@A@AA@AA@@C@AFA@ADAD@BG@IACA@ACEEKMGIEA@YSQO"],"encodeOffsets":[[112082,18629]]}}],"UTF8Encoding":true});}));