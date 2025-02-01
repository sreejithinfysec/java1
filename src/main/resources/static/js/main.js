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
  var domainName = document.getElementById('domain').value;
  if (!domainName) {
    // Use a modal dialog for customizable and integrated alerts
    alert("Please enter a domain name");
    return;
  }
  // Sanitize input to prevent log forging
  var sanitizedDomainName = DOMPurify.sanitize(domainName);
  
  $.ajax({
    url: '/test-domain',
    method: 'POST',
    contentType: 'application/json',
    data: JSON.stringify({
      'domainName': sanitizedDomainName 
    }),
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

}

}

}

}

}

}

}

}

}

}

}

}

}

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

}

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

    success: updateOutput,
    error: handleError
  });
}

    success: updateOutput,
    error: handleError
  });
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

var form = document.querySelectorAll('form')[0]
form.addEventListener('submit', function(evt) { evt.preventDefault(); submitRequest(); })
