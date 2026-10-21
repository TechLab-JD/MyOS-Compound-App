const $=id=>document.getElementById(id);
const fmt=x=>'$'+Number(x).toLocaleString(undefined,{minimumFractionDigits:2,maximumFractionDigits:2});
function calc(){
  const P=+$('ci-p').value||0,r=(+$('ci-r').value||0)/100,yrs=+$('ci-y').value||0,pmt=+$('ci-m').value||0;
  const months=Math.max(0,Math.round(yrs*12)),mr=r/12;let bal=P,contrib=P;
  for(let i=0;i<months;i++){bal=bal*(1+mr)+pmt;contrib+=pmt;}
  $('ci-fv').textContent=fmt(bal);$('ci-c').textContent=fmt(contrib);$('ci-int').textContent=fmt(bal-contrib);
}
$('ci-go').onclick=calc;calc();
