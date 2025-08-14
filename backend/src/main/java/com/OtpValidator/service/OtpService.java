package com.OtpValidator.service;

import com.OtpValidator.model.OtpRequest;
import com.OtpValidator.repository.OtpRequestRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;
import java.util.Random;

@Service
public class OtpService {
    @Autowired
    private OtpRequestRepository otpRequestRepository;

    public String generateOtp(String mobileNumber) {
        String otp = String.format("%06d", new Random().nextInt(999999));
        OtpRequest request = new OtpRequest();
        request.setMobileNumber(mobileNumber);
        request.setOtp(otp);
        request.setExpiryTime(LocalDateTime.now().plusMinutes(5));
        otpRequestRepository.save(request);

        // Here, integrate with SMS provider to send the OTP on mobileNumber
        System.out.println("OTP for " + mobileNumber + ": " + otp);

        return otp;
    }

    public boolean validateOtp(String mobileNumber, String otp) {
        List<OtpRequest> reqs = otpRequestRepository.findByMobileNumberOrderByExpiryTimeDesc(mobileNumber);
        if (reqs.isEmpty()) return false;
        OtpRequest latest = reqs.get(0); // latest request
        return latest.getOtp().equals(otp) && latest.getExpiryTime().isAfter(LocalDateTime.now());
    }
}