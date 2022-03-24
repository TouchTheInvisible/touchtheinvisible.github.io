function modelSelector(str) {
    let link = "https://3dviewer.net/embed.html#model=";
    link += str;

    let front = ' <iframe id="modelViewer" style="display:block; margin-top: 3em;" src="';

    let back = '" width="640" height="480" style="border:1px solid #000;" ></iframe>';

    /*
    document.getElementById("modelViewer").src = link;
    document.getElementById("modelViewer").style.display = "block";
    */
    document.getElementById("viewerFrame").innerHTML = front + link + back;

    window.location.href = "#modelViewer";
}
