function setCookie(name,value){
    var Days = 30;
    var exp = new Date();
    exp.setTime(exp.getTime() + Days*24*60*60*30);
    document.cookie = name + "="+ escape (value) + ";expires=" + exp.toGMTString();
}

function getCookie(c_name)
{
    if (document.cookie.length>0)
    {
        c_start=document.cookie.indexOf(c_name + "=")
        if (c_start!=-1)
        { 
            c_start=c_start + c_name.length+1 
            c_end=document.cookie.indexOf(";",c_start)
            if (c_end==-1) c_end=document.cookie.length
            return unescape(document.cookie.substring(c_start,c_end))
        } 
    }
    return ""
}

function getPar(par){
    var local_url = document.location.href; 
    var get = local_url.indexOf(par +"=");
    if(get == -1){
        return false;   
    }   
    var get_par = local_url.slice(par.length + get + 1);    
    var nextPar = get_par.indexOf("&");
    if(nextPar != -1){
        get_par = get_par.slice(0, nextPar);
    }
    return get_par;
}

function normalizeDate(date)
{
    month = ['Emp','Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    str = date.split(" ");
    for(var i=1;i<=12;++i)
        if(month[i] == str[1])pos = i;
    if(pos<10)date = str[2]+'-0'+pos.toString()+'-'+str[0];
    else date = str[2]+'-'+pos.toString()+'-'+str[0];
    return date;
}

function outDate(cname,cvalue){
    var d = new Date();
    d.setTime(d.getTime()+(-1*24*60*60*1000));
    var expires = "expires="+d.toGMTString();
    document.cookie = cname+"="+cvalue+"; "+expires;
}

function logout()
{
    outDate('itpm-token','Err');
    outDate('itpm-groupId','Err');
    outDate('itpm-projectId','Err');
    outDate('itpm-missionId','Err');
    outDate('itpm-userId','Err');
    outDate('itpm-userName','Err');
    window.location.href='./login.html';
}