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

resultHour = overTime / 60;
resultMinute = overTime % 60;

alert("残業時間は" + resultHour + "時間" + resultMinute + "分です");
