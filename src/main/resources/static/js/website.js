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
    showAlert("Please enter an URL"); // Replaced alert with a customizable alternative
    return;
  }
  url = sanitize(url); // Sanitize the URL to prevent XSS attacks
  $.ajax({
    url: '/test-website',
    method: 'POST',
    contentType: 'application/json',
    data: JSON.stringify({
      'url': url,
      'customHeaderKey': sanitize(document.getElementById('customHeaderKey').value || ''), // Sanitize custom header key
      'customHeaderValue': sanitize(document.getElementById('customHeaderValue').value || '') // Sanitize custom header value
    }),
    success: updateOutput,
    error: handleError
  });
}

}

function showAlert(message) {
  // Custom implementation of alert dialog
  alert(message);
}

function updateOutput(response) {
  if (response.isAuthorized) {
    document.getElementById('output').innerHTML = response.content;
  } else {
    showAlert("Unauthorized access attempt!");
  }
}

function handleError(error) {
  if (error.status === 403) {
    window.location.href = "https://www.example.com/forbidden";
  } else {
    showAlert("An error occurred: " + error.statusText);
  }
}

}

function showAlert(message) {
  // Custom implementation of alert dialog
  alert(message);
}

function updateOutput(response) {
  if (response.isAuthorized) {
    document.getElementById('output').innerHTML = response.content;
  } else {
    showAlert("Unauthorized access attempt!");
  }
}

function handleError(error) {
  if (error.status === 403) {
    window.location.href = "https://www.example.com/forbidden";
  } else {
    showAlert("An error occurred: " + error.statusText);
  }
}

}

function showAlert(message) {
  // Custom implementation of alert dialog
  alert(message);
}

function updateOutput(response) {
  if (response.isAuthorized) {
    document.getElementById('output').innerHTML = response.content;
  } else {
    showAlert("Unauthorized access attempt!");
  }
}

function handleError(error) {
  if (error.status === 403) {
    window.location.href = "https://www.example.com/forbidden";
  } else {
    showAlert("An error occurred: " + error.statusText);
  }
}

}

function showAlert(message) {
  // Custom implementation of alert dialog
  alert(message);
}

function updateOutput(response) {
  if (response.isAuthorized) {
    document.getElementById('output').innerHTML = response.content;
  } else {
    showAlert("Unauthorized access attempt!");
  }
}

function handleError(error) {
  if (error.status === 403) {
    window.location.href = "https://www.example.com/forbidden";
  } else {
    showAlert("An error occurred: " + error.statusText);
  }
}

}

function showAlert(message) {
  // Custom implementation of alert dialog
  alert(message);
}

function updateOutput(response) {
  if (response.isAuthorized) {
    document.getElementById('output').innerHTML = response.content;
  } else {
    showAlert("Unauthorized access attempt!");
  }
}

function handleError(error) {
  if (error.status === 403) {
    window.location.href = "https://www.example.com/forbidden";
  } else {
    showAlert("An error occurred: " + error.statusText);
  }
}

}

function showAlert(message) {
  // Custom implementation of alert dialog
  alert(message);
}

function updateOutput(response) {
  if (response.isAuthorized) {
    document.getElementById('output').innerHTML = response.content;
  } else {
    showAlert("Unauthorized access attempt!");
  }
}

function handleError(error) {
  if (error.status === 403) {
    window.location.href = "https://www.example.com/forbidden";
  } else {
    showAlert("An error occurred: " + error.statusText);
  }
}

}

function showAlert(message) {
  // Custom implementation of alert dialog
  alert(message);
}

function updateOutput(response) {
  if (response.isAuthorized) {
    document.getElementById('output').innerHTML = response.content;
  } else {
    showAlert("Unauthorized access attempt!");
  }
}

function handleError(error) {
  if (error.status === 403) {
    window.location.href = "https://www.example.com/forbidden";
  } else {
    showAlert("An error occurred: " + error.statusText);
  }
}

}

function showAlert(message) {
  // Custom implementation of alert dialog
  alert(message);
}

function updateOutput(response) {
  if (response.isAuthorized) {
    document.getElementById('output').innerHTML = response.content;
  } else {
    showAlert("Unauthorized access attempt!");
  }
}

function handleError(error) {
  if (error.status === 403) {
    window.location.href = "https://www.example.com/forbidden";
  } else {
    showAlert("An error occurred: " + error.statusText);
  }
}

}

function showAlert(message) {
  // Custom implementation of alert dialog
  alert(message);
}

function updateOutput(response) {
  if (response.isAuthorized) {
    document.getElementById('output').innerHTML = response.content;
  } else {
    showAlert("Unauthorized access attempt!");
  }
}

function handleError(error) {
  if (error.status === 403) {
    window.location.href = "https://www.example.com/forbidden";
  } else {
    showAlert("An error occurred: " + error.statusText);
  }
}

}

function showAlert(message) {
  // Custom implementation of alert dialog
  alert(message);
}

function updateOutput(response) {
  if (response.isAuthorized) {
    document.getElementById('output').innerHTML = response.content;
  } else {
    showAlert("Unauthorized access attempt!");
  }
}

function handleError(error) {
  if (error.status === 403) {
    window.location.href = "https://www.example.com/forbidden";
  } else {
    showAlert("An error occurred: " + error.statusText);
  }
}

}

function showAlert(message) {
  // Custom implementation of alert dialog
  alert(message);
}

function updateOutput(response) {
  if (response.isAuthorized) {
    document.getElementById('output').innerHTML = response.content;
  } else {
    showAlert("Unauthorized access attempt!");
  }
}

function handleError(error) {
  if (error.status === 403) {
    window.location.href = "https://www.example.com/forbidden";
  } else {
    showAlert("An error occurred: " + error.statusText);
  }
}

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
