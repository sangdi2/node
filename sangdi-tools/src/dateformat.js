function dateFormat(datestr){
    const dt =new Date(datestr)
    const y =padzero(dt.getFullYear())
    const mm =padzero(dt.getMonth())
    const d =padzero(dt.getDay())
    const h =padzero(dt.getHours())
    const m =padzero(dt.getMinutes())
    const s =padzero(dt.getSeconds())
    return y+'-'+mm+'-'+d+' '+h+':'+m+':'+s
 }
 function padzero(n){
    return n>9?n:'0'+n
 }
 module.exports={
    dateFormat
    
}