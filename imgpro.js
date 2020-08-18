// where files are dropped + file selector is opened
var dropRegion = document.getElementById("drop-region"),
    // where images are previewed
imagePreviewRegion = document.getElementById("image-preview");

var fakeInput = document.createElement("input");
fakeInput.type = "file";
fakeInput.accept = "image/*";
fakeInput.multiple = true;
dropRegion.addEventListener('click', function() {
    fakeInput.click();
});

fakeInput.addEventListener("change", function() {
    var files = fakeInput.files;
    handleFiles(files);
});

function preventDefault(e) {
    e.preventDefault();
      e.stopPropagation();
}

dropRegion.addEventListener('dragenter', preventDefault, false);
dropRegion.addEventListener('dragleave', preventDefault, false);
dropRegion.addEventListener('dragover', preventDefault, false);
dropRegion.addEventListener('drop', preventDefault, false);

function handleFiles(files) {
    for (var i = 0, len = files.length; i < len; i++) {
        if (validateImage(files[i]))
            previewAnduploadImage(files[i]);
    }
}

function handleDrop(e) {
    var data = e.dataTransfer,
        files = data.files;
 
    handleFiles(files)      
}
 
dropRegion.addEventListener('drop', handleDrop, false);

