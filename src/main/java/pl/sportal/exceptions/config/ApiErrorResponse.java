package pl.sportal.exceptions.config;

import org.springframework.http.HttpStatus;

import java.util.Date;

public class ApiErrorResponse {
    private Date timestamp;
    private int status;
    private String message;
    private String errors[];
    private String details;

    public ApiErrorResponse(String message[], String details, HttpStatus httpStatus) {
        super();
        this.status = httpStatus.value();
        this.message = httpStatus.name();
        this.timestamp = new Date();
        this.errors = message;
        this.details = details;
    }

    public Date getTimestamp() {
        return timestamp;
    }

    public String[] getErrors() {
        return errors;
    }

    public String getDetails() {
        return details;
    }

    public int getStatus() {
        return status;
    }

    public String getMessage() {
        return message;
    }
}
