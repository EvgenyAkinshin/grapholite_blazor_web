// This file is to show how a library package may provide JavaScript interop features
// wrapped in a .NET API

window.aphalinaUtils = {
    captureMouse: function (targetElement, pointerId) {
        targetElement.setPointerCapture(pointerId);
    },

    releaseMouse: function (targetElement, pointerId) {
        targetElement.releasePointerCapture(pointerId);
    },

    getWindowSize: function ()
    {
        return { width: window.innerWidth, height: window.innerHeight, devicePixelRatio: window.devicePixelRatio };
    },

    //measureText: function (textHtmls)
    //    var resultList = [];
    //    if (!this.measureElement)
    //    {
    //        this.measureElement = document.getElementById('measureElement');
    //    }

    //    for (var textHtml in textHtmls)
    //    {
    //        this.measureElement.innerHTML = textHtml;
    //        resultList.push({
    //            width: this.measureElement.clientWidth,
    //            height: this.measureElement.clientHeight
    //        });
    //    }

    //    return resultList;
    //}

};

function reportWindowSizeChanged() {

    DotNet.invokeMethodAsync('Aphalina.Drawing.Blazor', 'ReportWindowSizeChanged', { width: window.innerWidth, height: window.innerHeight, devicePixelRatio: window.devicePixelRatio });
}

window.onresize = reportWindowSizeChanged;

const handleWheel = function (e) {
    if (e.ctrlKey || e.metaKey)
        e.preventDefault();
};

window.addEventListener("wheel", handleWheel, { passive: false });


//function ()
//targetElement.setPointerCapture(pointerId);

//window.exampleJsFunctions = {
//  showPrompt: function (message) {
//    return prompt(message, 'Type anything here');
//  }
//};
