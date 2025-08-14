package com.OtpValidator.model;


import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

import java.time.LocalDateTime;

@Entity
public class OtpRequest {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    public Long getId() {
        return id;
    }

    public OtpRequest() {
    }

    public OtpRequest(Long id, String mobileNumber, String otp, LocalDateTime expiryTime) {
        this.id = id;
        this.mobileNumber = mobileNumber;
        this.otp = otp;
        this.expiryTime = expiryTime;
    }

    public OtpRequest setId(Long id) {
        this.id = id;
        return this;
    }

    public String getMobileNumber() {
        return mobileNumber;
    }

    public OtpRequest setMobileNumber(String mobileNumber) {
        this.mobileNumber = mobileNumber;
        return this;
    }

    public String getOtp() {
        return otp;
    }

    public OtpRequest setOtp(String otp) {
        this.otp = otp;
        return this;
    }

    public LocalDateTime getExpiryTime() {
        return expiryTime;
    }

    public OtpRequest setExpiryTime(LocalDateTime expiryTime) {
        this.expiryTime = expiryTime;
        return this;
    }

    private String mobileNumber;
    private String otp;
    private LocalDateTime expiryTime;

    // getters and setters
}
