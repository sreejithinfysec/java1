package com.datadoghq.workshops.samplevulnerablejavaapp.controller;

import com.datadoghq.workshops.samplevulnerablejavaapp.exception.FileForbiddenFileException;
import com.datadoghq.workshops.samplevulnerablejavaapp.exception.FileReadException;
import com.datadoghq.workshops.samplevulnerablejavaapp.exception.InvalidDomainException;
import com.datadoghq.workshops.samplevulnerablejavaapp.exception.UnableToTestDomainException;
import com.datadoghq.workshops.samplevulnerablejavaapp.http.DomainTestRequest;
import com.datadoghq.workshops.samplevulnerablejavaapp.http.ViewFileRequest;
import com.datadoghq.workshops.samplevulnerablejavaapp.http.WebsiteTestRequest;
import com.datadoghq.workshops.samplevulnerablejavaapp.service.DomainTestService;
import com.datadoghq.workshops.samplevulnerablejavaapp.service.FileService;
import com.datadoghq.workshops.samplevulnerablejavaapp.service.WebsiteTestService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
public class MainController {

  public Logger log = LoggerFactory.getLogger(MainController.class);

  @Autowired
  private DomainTestService domainTestService;

  @Autowired
  private WebsiteTestService websiteTestService;

  @Autowired
  private FileService fileService;

@RequestMapping(method=RequestMethod.POST, value="/test-domain", consumes="application/json")
public ResponseEntity<String> testDomain(@RequestBody DomainTestRequest request) {
    log.info("Testing domain " + request.getDomainName());
    try {
        String result = domainTestService.testDomain(request.getDomainName());
        return new ResponseEntity<>(result, HttpStatus.OK);
    } catch(InvalidDomainException e) {
        return new ResponseEntity<>(e.getMessage(), HttpStatus.BAD_REQUEST);
    } catch (UnableToTestDomainException e) {
        return new ResponseEntity<>(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
    } catch(Exception e) {
        log.error("An error occurred while testing domain", e);
        return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
    }
}

@RestController
@RequestMapping("/api")
public class MainController {

    private final DomainTestService domainTestService;

    public MainController(DomainTestService domainTestService) {
        this.domainTestService = domainTestService;
    }

    @RequestMapping(method = RequestMethod.POST, value = "/test-domain", consumes = "application/json")
    public ResponseEntity<String> testDomain(@RequestBody DomainTestRequest request) {
        log.info("Testing domain {}", request.getDomainName());
        try {
            String result = domainTestService.testDomain(request.getDomainName());
            return new ResponseEntity<>(result, HttpStatus.OK);
        } catch (InvalidDomainException e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.BAD_REQUEST);
        } catch (UnableToTestDomainException e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        } catch (Exception e) {
            log.error("Unexpected error occurred", e);
            return new ResponseEntity<>("An unexpected error occurred", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}

}

}

  }

  @RequestMapping(method=RequestMethod.POST, value="/test-website", consumes="application/json")
  public ResponseEntity<String> testWebsite(@RequestBody WebsiteTestRequest request) {
    log.info("Testing website " + request.url);
    String result = websiteTestService.testWebsite(request);
    return new ResponseEntity<>(result, HttpStatus.OK);
  }

@RequestMapping(method=RequestMethod.POST, value="/view-file", consumes="application/json")
public ResponseEntity<String> viewFile(@RequestBody ViewFileRequest request) {
    try {
        // Validate the request
        if (request == null || request.path == null || request.path.isEmpty()) {
            throw new IllegalArgumentException("Invalid request");
        }

        // Check if the file exists
        String result = fileService.readFile(request.path);
        return new ResponseEntity<>(result, HttpStatus.OK);
    } catch (IllegalArgumentException e) {
        return new ResponseEntity<>(e.getMessage(), HttpStatus.BAD_REQUEST);
    } catch (FileNotFoundException e) {
        return new ResponseEntity<>(e.getMessage(), HttpStatus.NOT_FOUND);
    } catch (FileForbiddenFileException e) {
        return new ResponseEntity<>(e.getMessage(), HttpStatus.FORBIDDEN);
    } catch (FileReadException e) {
        return new ResponseEntity<>(e.getMessage(), HttpStatus.BAD_REQUEST);
    } catch (Exception e) {
        // Log the error and return a generic server error
        log.error("An error occurred while reading the file", e);
        return new ResponseEntity<>("An error occurred while reading the file", HttpStatus.INTERNAL_SERVER_ERROR);
    }
}

        String result = fileService.readFile(request.getPath());
        return new ResponseEntity<>(result, HttpStatus.OK);
    } catch (FileForbiddenFileException e) {
        return new ResponseEntity<>(e.getMessage(), HttpStatus.FORBIDDEN);
    } catch (FileReadException e) {
        return new ResponseEntity<>(e.getMessage(), HttpStatus.BAD_REQUEST);
    }
}

        // Validate the request
        if (request == null || request.path == null || request.path.isEmpty()) {
            throw new IllegalArgumentException("Invalid request");
        }

        // Check if the file exists
        String result = fileService.readFile(request.path);
        return new ResponseEntity<>(result, HttpStatus.OK);
    } catch (IllegalArgumentException e) {
        return new ResponseEntity<>(e.getMessage(), HttpStatus.BAD_REQUEST);
    } catch (FileNotFoundException e) {
        return new ResponseEntity<>(e.getMessage(), HttpStatus.NOT_FOUND);
    } catch (FileForbiddenFileException e) {
        return new ResponseEntity<>(e.getMessage(), HttpStatus.FORBIDDEN);
    } catch (FileReadException e) {
        return new ResponseEntity<>(e.getMessage(), HttpStatus.BAD_REQUEST);
    } catch (Exception e) {
        // Log the error and return a generic server error
        log.error("An error occurred while reading the file", e);
        return new ResponseEntity<>("An error occurred while reading the file", HttpStatus.INTERNAL_SERVER_ERROR);
    }
}

      String result = fileService.readFile(request.path);
      return new ResponseEntity<>(result, HttpStatus.OK);
    } catch (FileForbiddenFileException e) {
      return new ResponseEntity<>(e.getMessage(), HttpStatus.FORBIDDEN);
    } catch (FileReadException e) {
      return new ResponseEntity<>(e.getMessage(), HttpStatus.BAD_REQUEST);
    }
  }

}
