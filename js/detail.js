//auto effects
window.onload=function(){
 var new_p=document.getElementById('new_p'),
     pic=document.getElementById('pic'),
     list=document.getElementById('list').getElementsByTagName('li'),
     index=0,
     timer=null;
 function auto(){
      console.log('ok');
     timer=setInterval(function(){
      index++;
      if(index>=list.length){
        index=0;
      }
      change(index);
     },2000);  
   }
    auto();
 function change(curIndex){
    pic.style.marginTop=-500*curIndex+'px';
    for(var n=0;n<list.length;n++){
        list[n].className='';
    }
      list[curIndex].className='on';
      index=curIndex;
  }
    new_p.onmouseover=function(){
      clearInterval(timer);
   }
    new_p.onmouseout=auto;
    for(var i=0;i<list.length;i++){
      list[i].id=i;
      list[i].onmouseover=function(){
        change(this.id);          
      }
    }
    //tab effects
function $(id){
    return typeof id==='string'?document.getElementById(id):id;
  }
    var titles=$('notice_tit').getElementsByTagName('li');
    var divs=$('notice_con').getElementsByTagName('div');
    if (titles.length!=divs.length) return;
    for(var i=0;i<titles.length;i++){
      titles[i].id=i;
      titles[i].onmouseover=function(){
                for(var j=0;j<titles.length;j++){
                  titles[j].className='';
                  divs[j].style.display='none';
                }
        this.className='select';
        divs[this.id].style.display='block';
      }
    }
}
