package com.OtpValidator.controller;

import com.OtpValidator.service.OtpService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = "*")
public class OtpController {

    @Autowired
    private OtpService otpService;

    @PostMapping("/request-otp")
    public String requestOtp(@RequestParam String mobileNumber) {
        otpService.generateOtp(mobileNumber);
        return "OTP sent to " + mobileNumber;
    }

    @PostMapping("/validate-otp")
    public String validateOtp(@RequestParam String mobileNumber, @RequestParam String otp) {
        boolean valid = otpService.validateOtp(mobileNumber, otp);
        return valid ? "OTP Validated!" : "Invalid or expired OTP!";
    }
}