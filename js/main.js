const mb=document.getElementById('mb'),ul=document.querySelector('nav ul');
mb.onclick=()=>{const o=ul.classList.toggle('o');mb.setAttribute('aria-expanded',o)};
const f=document.getElementById('cf');
if(f)f.onsubmit=e=>{e.preventDefault();const d=new FormData(f);
location.href='mailto:tahirkhan@atas.pk?subject='+encodeURIComponent(d.get('svc')+' enquiry from '+d.get('name'))+'&body='+encodeURIComponent(d.get('msg')+'\n\nName: '+d.get('name')+'\nPhone: '+d.get('ph')+'\nEmail: '+d.get('em'))};
