'use strict';
const series = {
  receita: {values:[68000,87000,102000,128000],display:'R$ 128 mil',label:'Receita ilustrativa · ciclo 04',name:'receita'},
  pedidos: {values:[800,1000,1200,1400],display:'1.400',label:'Pedidos ilustrativos · ciclo 04',name:'pedidos'},
  ticket: {values:[85,87,85,128000/1400],display:'R$ 91,43',label:'Ticket médio ilustrativo · ciclo 04',name:'ticket médio'}
};
const metricButtons = document.querySelectorAll('[data-metric]');
metricButtons.forEach(button => button.addEventListener('click', () => {
  const data=series[button.dataset.metric];
  metricButtons.forEach(item => item.setAttribute('aria-pressed',String(item===button)));
  document.querySelector('#metric-value').textContent=data.display;
  document.querySelector('#metric-label').textContent=data.label;
  document.querySelector('.bars').setAttribute('aria-label',`Gráfico ilustrativo de ${data.name} por ciclo; valores completos na opção Entenda a análise.`);
  const max=Math.max(...data.values)*1.1;
  document.querySelectorAll('.bars>div').forEach((bar,index)=>bar.style.setProperty('--bar',`${data.values[index]/max*100}%`));
}));
document.querySelector('.metric').setAttribute('aria-live','polite');
const dialog=document.querySelector('#method-dialog');
document.querySelector('#open-method').addEventListener('click',()=>dialog.showModal());
document.querySelector('.close-dialog').addEventListener('click',()=>dialog.close());
dialog.addEventListener('click',event=>{if(event.target===dialog){const r=dialog.getBoundingClientRect();if(event.clientX<r.left||event.clientX>r.right||event.clientY<r.top||event.clientY>r.bottom)dialog.close();}});
document.querySelector('#year').textContent=new Date().getFullYear();
