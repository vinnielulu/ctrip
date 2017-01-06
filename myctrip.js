/**
 * Created by wanglulu on 17/1/3.
 */
function opensearch(evt,searchtype) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(searchtype).style.display = "block";
    evt.currentTarget.className += " active";
}
document.getElementById("hotelA").click();