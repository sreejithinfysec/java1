var outputContainer = document.getElementById('output-container')
var outputElement = document.getElementById('output')
var errorContainer = document.getElementById('error-container')
var errorElement = document.getElementById('error')

function updateOutput(result) {
  // If there is any error, hide it first
  errorContainer.classList.add('hidden');
  outputElement.innerText = result;
  outputContainer.classList.remove('hidden');
}

function handleError(error) {
  // If there is any successful output, hide it first
  outputContainer.classList.add('hidden');
  errorElement.innerText = error.responseText;
  errorContainer.classList.remove('hidden');
}

function submitRequest() {
  var url = document.getElementById('url').value;
  if (!url) {
    displayMessageUsingModal("Please enter an URL");
    return;
  }
  url = sanitize(url);
  $.ajax({
    url: '/test-website',
    method: 'POST',
    contentType: 'application/json',
    data: JSON.stringify({
      'url': url,
      'customHeaderKey': sanitize(document.getElementById('customHeaderKey').value || ''),
      'customHeaderValue': sanitize(document.getElementById('customHeaderValue').value || '')
    }),
    success: updateOutput,
    error: handleError
  });
}

}

}


}

var form = document.querySelectorAll('form')[0]
form.addEventListener('submit', function(evt) { evt.preventDefault(); submitRequest(); })
