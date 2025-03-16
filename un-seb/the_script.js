const latest_version = "2";
var checked = false;

// Add event listener for F9 key to open the dialog
document.addEventListener("keydown", (event) => {
  if (event.key === "F9" || (event.ctrlKey && event.key === "k")) {
    checked = false;
    version(latest_version);
    document.getElementById("SEB_Hijack").showModal();
  }
});

function responseFunction(response) {
  checked = true;
  if (response == true) {
    // do nothing
  } else {
    // this doesnt work perfectly yet for some reason
    //alert("You are on an old UnSEB version.\nPlease update to the latest release.");
  }
}

// Create the dialog element
const dialog = document.createElement("dialog");

// Add content to the dialog
dialog.innerHTML = `
    <h2>SEB Hijack v1.2.1</h2>
    <a href="data:text/html;charset=utf-8;base64,PCFET0NUWVBFIGh0bWw+Cgo8aHRtbCBsYW5nPSJlbiI+Cgo8Ym9keT4KICAgIDxzdHlsZT4KICAgICAgICAjY2VudGVyIHsKICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Y5ZjlmOTsKICAgICAgICAgICAgZm9udC1mYW1pbHk6IEFyaWFsLCBzYW5zLXNlcmlmOwogICAgICAgICAgICBtYXgtd2lkdGg6IDQwMHB4OwogICAgICAgICAgICBwYWRkaW5nOiAyMHB4OwogICAgICAgICAgICBib3gtc2hhZG93OiAwIDJweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTsKICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4OwogICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7CiAgICAgICAgICAgIHRvcDogNTAlOwogICAgICAgICAgICBsZWZ0OiA1MCU7CiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpOwogICAgICAgICAgICAvKiBDZW50ZXIgdmVydGljYWxseSBhbmQgaG9yaXpvbnRhbGx5ICovCiAgICAgICAgfQoKICAgICAgICBoMiB7CiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS41ZW07CiAgICAgICAgICAgIGNvbG9yOiAjMzMzOwogICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxNXB4OwogICAgICAgIH0KCiAgICAgICAgI3VybElucHV0IHsKICAgICAgICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIDIycHgpOwogICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjOwogICAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7CiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7CiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7CiAgICAgICAgICAgIC8qIEFkZCBtYXJnaW4gZm9yIHNwYWNpbmcgKi8KICAgICAgICB9CgogICAgICAgIGJ1dHRvbiB7CiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHggMTVweDsKICAgICAgICAgICAgYm9yZGVyOiBub25lOwogICAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7CiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDdiZmY7CiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTsKICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyOwogICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDVweDsKICAgICAgICAgICAgLyogU3BhY2UgYmV0d2VlbiBidXR0b25zICovCiAgICAgICAgICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4zcyBlYXNlOwogICAgICAgIH0KCiAgICAgICAgYnV0dG9uOmhvdmVyIHsKICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwNTZiMzsKICAgICAgICAgICAgLyogRGFya2VyIHNoYWRlIG9uIGhvdmVyICovCiAgICAgICAgfQoKICAgICAgICAuYmV0YSB7CiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM1MDc2OTM7CiAgICAgICAgfQoKICAgICAgICBzdW1tYXJ5IHsKICAgICAgICAgICAgZm9udC1zaXplOiAxLjJlbTsKICAgICAgICAgICAgY29sb3I6ICMzMzM7CiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7CiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjsKICAgICAgICB9CiAgICA8L3N0eWxlPgoKICAgIDxkaXYgaWQ9ImNlbnRlciI+CgogICAgICAgIDxoMT5TRUIgSGlqYWNrIHYxLjIuMTwvaDE+CiAgICAgICAgPGgyPlRyb3VibGVzaG9vdGluZzwvaDI+CiAgICAgICAgPHA+U29tZSBzaXRlcyBkb250IGFsbG93IGNvbW11bmljYXRpb24gd2l0aCB5b3VyIFNFQiBDbGllbnQuCiAgICAgICAgICAgIEx1Y2tpbHksIHRoaXMgY2FuIGJlIGJ5cGFzc2VkIHVzaW5nIHRoaXMgdHJvdWJsZXNob290aW5nIHBhZ2UuCiAgICAgICAgICAgIE5vcm1hbGx5LCBhbGwgZmVhdHVyZXMgd29yayB3aGVuIHRyaWdnZXJlZCBmcm9tIHRoaXMgd2luZG93Ljxicj4KICAgICAgICAgICAgRW5qb3khPGJyPjxicj4KICAgICAgICAgICAgLSB3eG5udnM8L3A+CgogICAgICAgIDxocj4KCiAgICAgICAgPGlucHV0IHR5cGU9J3RleHQnIGlkPSd1cmxJbnB1dCcgcGxhY2Vob2xkZXI9J0VudGVyIFVSTCcgcmVxdWlyZWQ+CiAgICAgICAgPGJ1dHRvbiBpZD0nb3BlblVybEJ1dHRvbic+T3BlbiBVUkw8L2J1dHRvbj4KICAgICAgICA8YnV0dG9uIGlkPSdleGl0U0VCJz5DcmFzaCBTRUI8L2J1dHRvbj4KICAgICAgICA8YnI+CiAgICAgICAgPGJyPgogICAgICAgIDxkZXRhaWxzPgogICAgICAgICAgICA8c3VtbWFyeT5EZXZlbG9wZXIgVG9vbHM8L3N1bW1hcnk+CiAgICAgICAgICAgIDxidXR0b24gaWQ9J2RldkJ1dHRvbicgb25jbGljaz0nZGV2VG9vbHMoKSc+T3BlbiBEZXZUb29sczwvYnV0dG9uPgogICAgICAgICAgICA8YnI+CiAgICAgICAgPC9kZXRhaWxzPgogICAgICAgIDxkZXRhaWxzPgogICAgICAgICAgICA8c3VtbWFyeT5FeHBlcmltZW50YWw8L3N1bW1hcnk+CiAgICAgICAgICAgIDxidXR0b24gaWQ9J3NjcmVlbnNob3RCdXR0b24nIGNsYXNzPSJiZXRhIiBvbmNsaWNrPSdzY3JlZW5zaG90KCknPlNhdmUgcGFnZSBhcyBQREYgKGLodGEpPC9idXR0b24+CiAgICAgICAgICAgIDxicj4KICAgICAgICA8L2RldGFpbHM+CiAgICA8L2Rpdj4KICAgIDxzY3JpcHQ+CiAgICAgICAgCiAgICAgICAgLy8gQWRkIGV2ZW50IGxpc3RlbmVyIHRvIGhhbmRsZSBidXR0b24gY2xpY2sKICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgib3BlblVybEJ1dHRvbiIpLmFkZEV2ZW50TGlzdGVuZXIoImNsaWNrIiwgKCkgPT4gewogICAgICAgICAgICB2YXIgdXJsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoInVybElucHV0IikudmFsdWU7CiAgICAgICAgICAgIC8vIGlmIHVybCBkb2VzIG5vdCBjb250YWluIGh0dHBzCiAgICAgICAgICAgIGlmICghdXJsLnN0YXJ0c1dpdGgoImh0dHBzOi8vIikgJiYgIXVybC5zdGFydHNXaXRoKCJodHRwOi8vIikpIHsKICAgICAgICAgICAgICAgIHVybCA9ICJodHRwczovLyIgKyB1cmw7CiAgICAgICAgICAgIH0KICAgICAgICAgICAgd2luZG93Lm9wZW4odXJsLCAiX2JsYW5rIik7CiAgICAgICAgICAgIGRpYWxvZy5jbG9zZSgpOwogICAgICAgIH0pOwoKICAgICAgICAvLyBBZGQgZXZlbnQgbGlzdGVuZXIgdG8gY3Jhc2ggU0VCCiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoImV4aXRTRUIiKS5vbmNsaWNrID0gZnVuY3Rpb24gKCkgewogICAgICAgICAgICBDZWZTaGFycC5Qb3N0TWVzc2FnZSh7IHR5cGU6ICJleGl0U0VCIiB9KTsKICAgICAgICB9OwoKICAgICAgICBmdW5jdGlvbiBzY3JlZW5zaG90KCkgewogICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgiU0VCX0hpamFjayIpLmNsb3NlKCk7CgogICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHsKICAgICAgICAgICAgICAgIENlZlNoYXJwLlBvc3RNZXNzYWdlKHsgdHlwZTogInNjcmVlbnNob3QiIH0pOwogICAgICAgICAgICB9LCAxMDAwKTsKCiAgICAgICAgICAgIC8vIGNvbnN0IHNjcmVlbnNob3RUYXJnZXQgPSBkb2N1bWVudC5ib2R5OwoKICAgICAgICAgICAgLy8gaHRtbDJjYW52YXMoc2NyZWVuc2hvdFRhcmdldCkudGhlbigoY2FudmFzKSA9PiB7CiAgICAgICAgICAgIC8vICAgY29uc3QgYmFzZTY0aW1hZ2UgPSBjYW52YXMudG9EYXRhVVJMKCJpbWFnZS9wbmciKTsKCiAgICAgICAgICAgIC8vICAgLy8gQ3JlYXRlIGEgbGluayBlbGVtZW50CiAgICAgICAgICAgIC8vICAgY29uc3QgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoImEiKTsKCiAgICAgICAgICAgIC8vICAgLy8gU2V0IHRoZSBkb3dubG9hZCBhdHRyaWJ1dGUgd2l0aCBhIGZpbGVuYW1lCiAgICAgICAgICAgIC8vICAgbGluay5kb3dubG9hZCA9ICJzY3JlZW5zaG90LnBuZyI7CgogICAgICAgICAgICAvLyAgIC8vIFNldCB0aGUgaHJlZiB0byB0aGUgYmFzZTY0IGltYWdlCiAgICAgICAgICAgIC8vICAgbGluay5ocmVmID0gYmFzZTY0aW1hZ2U7CgogICAgICAgICAgICAvLyAgIC8vIEFwcGVuZCB0aGUgbGluayB0byB0aGUgRE9NLCB0cmlnZ2VyIHRoZSBkb3dubG9hZCwgdGhlbiByZW1vdmUgaXQKICAgICAgICAgICAgLy8gICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGxpbmspOwogICAgICAgICAgICAvLyAgIGxpbmsuY2xpY2soKTsKICAgICAgICAgICAgLy8gICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKGxpbmspOwogICAgICAgICAgICAvLyB9KTsKICAgICAgICB9CgogICAgICAgIGZ1bmN0aW9uIGRldlRvb2xzKCkgewogICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgiU0VCX0hpamFjayIpLmNsb3NlKCk7CiAgICAgICAgICAgIENlZlNoYXJwLlBvc3RNZXNzYWdlKHsgdHlwZTogImRldlRvb2xzIiB9KTsKICAgICAgICB9CgogICAgICAgIGZ1bmN0aW9uIHZlcnNpb24odmVyc2lvbikgewogICAgICAgICAgICBDZWZTaGFycC5Qb3N0TWVzc2FnZSh7IHR5cGU6ICJ2ZXJzaW9uIiwgdmVyc2lvbjogdmVyc2lvbiB9KTsKICAgICAgICAgICAgLy8gd2FpdCAyIHNlY29uZHMgYW5kIGNoZWNrIGlmIHRoZSByZXNwb25zZSBpcyByZWNlaXZlZAogICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHsKICAgICAgICAgICAgICAgIGlmICghY2hlY2tlZCkgewogICAgICAgICAgICAgICAgICAgIGFsZXJ0KCJZb3UgYXJlIG9uIGFuIG9sZCBVblNFQiB2ZXJzaW9uLlxuUGxlYXNlIHVwZGF0ZSB0byB0aGUgbGF0ZXN0IHJlbGVhc2UuIik7CiAgICAgICAgICAgICAgICB9CiAgICAgICAgICAgIH0sIDIwMDApOwogICAgICAgIH0KICAgIDwvc2NyaXB0Pgo8YSBocmVmPSJodHRwczovL21hdHRpYXN3LmdpdGh1Yi5pby9zZWxmLWNvbnRhaW5lZC8iIHRhcmdldD0iX2JsYW5rIiBzdHlsZT0iYmFja2dyb3VuZDogcmdiYSgyMCwgOTAsIDE4MCwgLjM1KTtib3R0b206IDA7ZGlzcGxheTogYmxvY2s7Zm9udC1zaXplOiAuOHJlbTtsZWZ0OiAwO29wYWNpdHk6IC41O3BhZGRpbmc6IDRweCA4cHg7cG9zaXRpb246IGZpeGVkOyI+Q3JlYXRlZCB3aXRoIFdlYiBwYWdlIGRhdGEgVVJJIGdlbmVyYXRvci48L2E+PC9ib2R5Pgo8L2h0bWw+" target="_blank">Troubleshoot</a>
    <input type='text' id='urlInput' placeholder='Enter URL' required>
    <button id='openUrlButton'>Open URL</button>
    <button id='exitSEB'>Crash SEB</button>
    <button id='closeButton'>Close</button>
    <hr>
    <details>
        <summary>Developer Tools</summary>
        <br>
        <button id='devButton' onclick='devTools()'>Open DevTools</button>
    </details>
    <details>
        <summary>Experimental</summary>
        <br>
        <button id='screenshotButton' class="beta" onclick='screenshot()'>Save page as PDF (bèta)</button>
    </details>
`;

// Set the dialog ID
dialog.id = "SEB_Hijack";

// Append the dialog to the body
document.body.appendChild(dialog);

// Create and append a style element for styling
const style = document.createElement("style");
style.textContent = `
    dialog {
        background-color: #f9f9f9;
        border: none;
        border-radius: 5px;
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        max-width: 400px;
        width: 100%;
        padding: 20px;
        transition: all 0.3s ease;
    }

    h2 {
        font-size: 1.5em;
        color: #333;
        margin-bottom: 15px;
    }

    #urlInput {
        width: calc(100% - 22px);
        border: 1px solid #ccc;
        border-radius: 4px;
        padding: 10px;
        margin-bottom: 10px; /* Add margin for spacing */
    }

    button {
        padding: 10px 15px;
        border: none;
        border-radius: 4px;
        background-color: #007bff;
        color: white;
        cursor: pointer;
        margin-right: 5px; /* Space between buttons */
    }

    button:hover {
        background-color: #0056b3; /* Darker shade on hover */
    }

    .beta {
        background-color: #507693;
    }

`;
document.head.appendChild(style);

// Add event listener to close the dialog
document.getElementById("closeButton").addEventListener("click", () => {
  document.getElementById("SEB_Hijack").close();
});

// Add event listener to handle button click
document.getElementById("openUrlButton").addEventListener("click", () => {
  var url = document.getElementById("urlInput").value;
  // if url does not contain https
  if (!url.startsWith("https://") && !url.startsWith("http://")) {
    url = "https://" + url;
  }
  window.open(url, "_blank");
  dialog.close();
});

// Add event listener to crash SEB
document.getElementById("exitSEB").onclick = function () {
  CefSharp.PostMessage({ type: "exitSEB" });
};

function screenshot() {
  document.getElementById("SEB_Hijack").close();

  setTimeout(() => {
    CefSharp.PostMessage({ type: "screenshot" });
  }, 1000);

  // const screenshotTarget = document.body;

  // html2canvas(screenshotTarget).then((canvas) => {
  //   const base64image = canvas.toDataURL("image/png");

  //   // Create a link element
  //   const link = document.createElement("a");

  //   // Set the download attribute with a filename
  //   link.download = "screenshot.png";

  //   // Set the href to the base64 image
  //   link.href = base64image;

  //   // Append the link to the DOM, trigger the download, then remove it
  //   document.body.appendChild(link);
  //   link.click();
  //   document.body.removeChild(link);
  // });
}

function devTools() {
  document.getElementById("SEB_Hijack").close();
  CefSharp.PostMessage({ type: "devTools" });
}

function version(version) {
  CefSharp.PostMessage({ version: version });
}
