package pl.sportal.exceptions.config;

import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.http.converter.HttpMessageNotReadableException;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.context.request.WebRequest;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;
import pl.sportal.exceptions.FieldHouseIdentityLocationException;
import pl.sportal.exceptions.FieldHouseNotFoundException;
import pl.sportal.exceptions.config.ApiErrorResponse;

import java.util.List;
import java.util.stream.Collectors;

@ControllerAdvice
@RestController
public class RestExceptionHandler extends ResponseEntityExceptionHandler {

    @ExceptionHandler(value={FieldHouseNotFoundException.class})
    public final ResponseEntity<Object> handleNotFoundException(RuntimeException ex, WebRequest request) {
        return getResponseEntity(ex.getMessage().split("###"),
                                 request.getDescription(false),
                                 HttpStatus.NOT_FOUND);
    }


    @ExceptionHandler(value={FieldHouseIdentityLocationException.class})
    public final ResponseEntity<Object> handleUserNotFoundException(RuntimeException ex, WebRequest request) {
        return getResponseEntity(ex.getMessage().split("###"),
                                 request.getDescription(false),
                                 HttpStatus.METHOD_NOT_ALLOWED);
    }

    @Override
    protected ResponseEntity<Object> handleMethodArgumentNotValid(MethodArgumentNotValidException ex, HttpHeaders headers, HttpStatus status, WebRequest request) {
        List<String> errors = ex.getBindingResult()
                .getFieldErrors()
                .stream()
                .map(x -> x.getDefaultMessage())
                .collect(Collectors.toList());
        return getResponseEntity(errors.toArray(new String[errors.size()]),
                request.getDescription(false),
                HttpStatus.BAD_REQUEST);
    }

    @Override
    protected ResponseEntity<Object> handleHttpMessageNotReadable(HttpMessageNotReadableException ex, HttpHeaders headers, HttpStatus status, WebRequest request) {
        return getResponseEntity(ex.getMessage().split("###"),
                                 request.getDescription(false),
                                 HttpStatus.BAD_REQUEST);
    }

    private ResponseEntity<Object> getResponseEntity(String[] errors, String description, HttpStatus httpStatus) {
        ApiErrorResponse exceptionResponse = new ApiErrorResponse(errors, description, httpStatus);
        return new ResponseEntity(exceptionResponse, httpStatus);
    }

}
