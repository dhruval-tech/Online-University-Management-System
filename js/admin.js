function print(){

    var cname=document.getElementById("cname").value;
    var total=document.getElementById("total_place").value;
    var pkg = document.getElementById("pkg").value;

    document.getElementById("t1").innerHTML="Company Name:";
    document.getElementById("t1Val").innerHTML=cname;
    document.getElementById("t2").innerHTML="Total Placed Students:";
    document.getElementById("t2Val").innerHTML=total;
    document.getElementById("t3").innerHTML="Highest Package:";
    document.getElementById("t3Val").innerHTML=pkg;

    // setTimeout(() => { console.log("World!"); }, 2000000000);

}