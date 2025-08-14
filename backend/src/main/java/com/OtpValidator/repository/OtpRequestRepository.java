package com.OtpValidator.repository;

import com.OtpValidator.model.OtpRequest;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface OtpRequestRepository extends JpaRepository<OtpRequest, Long> {
    List<OtpRequest> findByMobileNumberOrderByExpiryTimeDesc(String mobileNumber);
}