var vars = "";
for (var m in this.c){
    vars += this.c[m].src + "\n";
var a = document.createElement('a');
a.href = this.c[m].src;
a.download = a.href.substr(a.href.lastIndexOf('/') + 1);
document.body.appendChild(a);
a.click();
document.body.removeChild(a);
}