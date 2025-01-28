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
    alert("Please enter an URL");
    return;
  }
  url = sanitize(url);
  var customHeaderKey = sanitize(document.getElementById('customHeaderKey').value || '');
  var customHeaderValue = sanitize(document.getElementById('customHeaderValue').value || '');
  $.ajax({
    url: '/test-website',
    method: 'POST',
    contentType: 'application/json',
    data: JSON.stringify({
      'url': url,
      'customHeaderKey': customHeaderKey,
      'customHeaderValue': customHeaderValue
    }),
    success: updateOutput,
    error: handleError
  });
}

    success: updateOutput,
    error: handleError
  });
}

}

}

}

}

}

}

function showAlert(message) {
  let sanitizedMessage = sanitize(message);
  let div = document.createElement("div");
  div.innerHTML = sanitizedMessage;
  let sanitizedHTML = div.textContent || div.innerText || "";
  // Custom alert system implementation here
}

}

function showAlert(message) {
  let sanitizedMessage = sanitize(message);
  let div = document.createElement("div");
  div.innerHTML = sanitizedMessage;
  let sanitizedHTML = div.textContent || div.innerText || "";
  // Custom alert system implementation here
}

}

}

}

}

}

}


}

var form = document.querySelectorAll('form')[0]
form.addEventListener('submit', function(evt) { evt.preventDefault(); submitRequest(); })
