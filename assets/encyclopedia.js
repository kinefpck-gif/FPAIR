
(function(){
 const root=document.documentElement, saved=localStorage.getItem('fpair-theme'); if(saved) root.dataset.theme=saved;
 document.querySelectorAll('[data-theme-toggle]').forEach(b=>b.onclick=()=>{root.dataset.theme=root.dataset.theme==='dark'?'light':'dark';localStorage.setItem('fpair-theme',root.dataset.theme)});
 window.renderEvidence=function(topic,elId){
   const el=document.getElementById(elId); if(!el||!window.FPAIR_EVIDENCE)return;
   const data=window.FPAIR_EVIDENCE.filter(x=>x.topic===topic);
   el.innerHTML='<div class="e-controls"><input id="'+elId+'q" placeholder="Buscar estudio, autor, DOI, tema…"><select id="'+elId+'s"><option value="">Todas las secciones</option></select></div><div class="evidence-grid" id="'+elId+'g"></div>';
   const sel=document.getElementById(elId+'s'), q=document.getElementById(elId+'q'), grid=document.getElementById(elId+'g');
   [...new Set(data.map(x=>x.section).filter(Boolean))].sort().forEach(s=>sel.insertAdjacentHTML('beforeend','<option>'+s+'</option>'));
   function draw(){
     let arr=data.filter(x=>(!sel.value||x.section===sel.value)&&(!q.value||JSON.stringify(x).toLowerCase().includes(q.value.toLowerCase())));
     grid.innerHTML=arr.slice(0,80).map(x=>'<article class="e-card"><div class="meta">'+(x.year||'')+' · '+(x.section||'Evidencia')+'</div><h4>'+esc(x.title)+'</h4>'+(x.summary?'<p>'+esc(x.summary)+'</p>':'')+(x.url?'<a target="_blank" rel="noopener" href="'+x.url+'">'+(x.doi?'DOI / fuente original ↗':'Fuente ↗')+'</a>':'')+'</article>').join('') || '<p>No se encontraron resultados.</p>';
   }
   q.oninput=draw; sel.onchange=draw; draw();
 }
 function esc(s){return String(s||'').replace(/[&<>"']/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m]))}
 window.calcAA=function(){
   let f=+v('aa_fio2'), pac=+v('aa_paco2'), pao=+v('aa_pao2'), pb=+v('aa_pb'), rq=+v('aa_rq');
   let PA=f*(pb-47)-pac/rq, aa=PA-pao; out('aa_res','PAO₂ ≈ '+PA.toFixed(1)+' mmHg · Gradiente A–a ≈ '+aa.toFixed(1)+' mmHg');
 }
 window.calcPF=function(){let p=+v('pf_pao2'), f=+v('pf_fio2');out('pf_res','P/F = '+(p/f).toFixed(0)+' mmHg')}
 window.calcShunt=function(){
   let hb=+v('sh_hb'), sa=+v('sh_sa')/100, pa=+v('sh_pa'), sv=+v('sh_sv')/100, pv=+v('sh_pv'), cap=+v('sh_cap');
   let Ca=1.34*hb*sa+0.0031*pa, Cv=1.34*hb*sv+0.0031*pv, Cc=1.34*hb+0.0031*cap;
   let q=(Cc-Ca)/(Cc-Cv)*100; out('sh_res','CaO₂ '+Ca.toFixed(2)+' · CvO₂ '+Cv.toFixed(2)+' · CcO₂ '+Cc.toFixed(2)+' mL/dL · Qs/Qt ≈ '+q.toFixed(1)+'%');
 }
 window.calcBD=function(){let pre=+v('bd_pre'), post=+v('bd_post'), pred=+v('bd_pred');let d=post-pre;let pp=d/pred*100;out('bd_res','Δ = '+d.toFixed(2)+' L · Δ/predicho = '+pp.toFixed(1)+'%')}
 window.calcPD20=function(){let d1=+v('pd_d1'), r1=+v('pd_r1'), d2=+v('pd_d2'), r2=+v('pd_r2'); if(!(r1<20&&r2>=20&&d1>0&&d2>d1)){out('pd_res','Ingrese dos escalones que encierren una caída del 20%.');return;}let logpd=Math.log10(d1)+(20-r1)/(r2-r1)*(Math.log10(d2)-Math.log10(d1));out('pd_res','PD20 interpolada ≈ '+Math.pow(10,logpd).toFixed(2)+' μg');}
 function v(id){return document.getElementById(id).value} function out(id,t){document.getElementById(id).textContent=t}
})();
