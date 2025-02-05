// Include html2canvas library
const script = document.createElement('script');
script.src = 'https://html2canvas.hertzen.com/dist/html2canvas.min.js';
document.head.appendChild(script);

// Add event listener for F9 key to open the dialog
document.addEventListener("keydown", (event) => {
  if (event.key === "F9") {
    document.getElementById("SEB_Hijack").showModal();
  }
});

// Create the dialog element
const dialog = document.createElement("dialog");

// Add content to the dialog
dialog.innerHTML = `
    <h2>SEB Hijack v1.O.1</h2>
    <input type='text' id='urlInput' placeholder='Enter URL' required>
    <button id='openUrlButton'>Open URL</button>
    <button id='exitSEB'>Crash SEB</button>
    <button id='closeButton'>Close</button>
    <br>
    <hr>
    <button id='screenshotButton' class="beta" onclick='screenshot()'>Save page as PDF (bèta)</button>
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
  if (!url.startsWith("https://")) {
  } else {
    if (!url.startsWith("http://")) {
      url = "https://" + url;
    }
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
