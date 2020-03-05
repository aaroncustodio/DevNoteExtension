// var iframe;
// var extensionUrl;

// // extensionUrl = browser.runtime.getUrl("panel/index.html");

// chrome.runtime.onMessage.addListener(function(msg, sener){
//     // console.log(chrome.runtime.getUrl("panel/index.html"));
//     iframe = document.getElementById("devnoteplay-sidebar-iframe");
//     // console.log('iframe', msg, iframe);
//     // the iframe will only be created if the extension icon has not been clicked yet
//     if (iframe == null && msg.clicked == false) {
//         // debugger;
//         iframe = document.createElement('iframe');
//         iframe.id = "devnoteplay-sidebar-iframe"
//         iframe.style.background = "blue";
//         iframe.style.height = "100%";
//         iframe.style.width = "0px";
//         iframe.style.position = "fixed";
//         iframe.style.top = "0px";
//         iframe.style.right = "0px";
//         iframe.style.zIndex = "999999";
//         iframe.frameBorder = "none";
//         iframe.src = msg.extensionUrl
//         console.log('this should only run once');
//         document.body.appendChild(iframe);
//     }
    
//     toggle(iframe);
// });

// function toggle(frame) {
//     if (frame == null) return;
//     if (frame.style.width == "0px") {
//         console.log("toggle show");
//         frame.style.width = "400px";
//     }
//     else {
//         console.log("toggle hide");
//         frame.style.width = "0px";
//     }
// }