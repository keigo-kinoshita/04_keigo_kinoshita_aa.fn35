'use strict'
// 1行目に記載している 'use strict' は削除しないでください

/*新時間管理システムにアクセスし勤務時間一覧を開いた状態で
  下記を実行することで残業時間が表示される
*/

let overTime = 0;
let resultHour = 0;
let resultMinute = 0;

for ( let i = 0; i < 31; i++ ) {
  if ( document.getElementById( 'GD_H2SOURODTMHH$' + i ).textContent !== '\u00A0' ) {
    if ( document.getElementById( 'GD_H2KNTSNCONRSK2$' + i ).textContent === '\u00A0' ) {
      overTime = overTime + (
        ( parseInt( document.getElementById( 'GD_H2SOURODTMHH$' + i ).textContent) * 60 ) +
        parseInt(document.getElementById( 'GD_H2SOURODTMMI$' + i ).textContent ) - 420
      );
    } else {
      overTime = overTime + (
        ( parseInt( document.getElementById( 'GD_H2SOURODTMHH$' + i ).textContent) * 60 ) +
        parseInt(document.getElementById( 'GD_H2SOURODTMMI$' + i ).textContent ) - 240
      );
    }
  }
}

resultHour = Math.trunc(overTime / 60);
resultMinute = overTime % 60;

alert("残業時間は" + resultHour + "時間" + resultMinute + "分です");
