/*
   Pop up Image Viewer
   Adapted from JavaScript Kit (http://javascriptkit.com)
   Over 400+ free scripts here!
   */
function popimage(imagesrc, winwidth, winheight) {
    var winsize='width='+winwidth+',height='+winheight+','
        
        popwin=window.open("","",winsize)
        popwin.document.open()
        var corpo=
        '<table width="100%" height="100%" align="center">' +
        '<tr><td align="center">' +
        '<img src="'+imagesrc+'" width="'+winwidth+'" height="'+winheight+'" />' +
        '</td></tr>' +
        '</table>'
        popwin.document.write('<title>Ampliado</title><body>' + corpo + '</body>')
        popwin.document.close()
}


function popcd(cdhtml) {
    var winsize='width=500,height=220,'
     
        window.open(cdhtml,"",winsize)
}




function genHeader() {
    rnd=Math.round(Math.random()*(3));
    document.writeln('<div class="header" style="background: #222 url(images/p'+rnd+'.jpg) no-repeat;" >');
    document.writeln('    <div class="nome">Avelino Faria Fernandes</div>');
    document.writeln('    <div class="title">');
    document.writeln('        <span class="mote"><a href="index.html">Vida</a></span>');
    document.writeln('        <div class="tag">Palavra, Unção, Amor, Exemplo</div>');
    document.writeln('    </div>');
    document.writeln('</div>');
}

