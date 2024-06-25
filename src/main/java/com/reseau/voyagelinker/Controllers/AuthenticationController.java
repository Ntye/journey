package com.reseau.voyagelinker.Controllers;

import com.reseau.voyagelinker.Models.User;
import com.reseau.voyagelinker.Services.JwtUtil;
import com.reseau.voyagelinker.auth.AuthenticationRequest;
import com.reseau.voyagelinker.auth.AuthenticationResponse;
import com.reseau.voyagelinker.auth.RegisterRequest;
import com.reseau.voyagelinker.Services.AuthenticationService;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/v1/auth")
@CrossOrigin(origins = "*")
@RequiredArgsConstructor
public class AuthenticationController {

    private final AuthenticationService service;
    private final JwtUtil jwtUtil;

    @PostMapping("/register")
    public ResponseEntity<AuthenticationResponse> register(
            @RequestBody RegisterRequest request
    ) {
        return ResponseEntity.ok(service.register(request));
    }

    @GetMapping("/confirm-email")
    public ResponseEntity<AuthenticationResponse> confirm(@RequestParam("token") String token, HttpServletResponse response) {
        String jwt = service.confirmToken(token);
        return ResponseEntity.ok(
                AuthenticationResponse.builder()
                .token(jwt)
                .success(Boolean.TRUE)
                .build()
        );
    }

    @PostMapping("/login")
    public ResponseEntity<AuthenticationResponse> authenticate(
            @RequestBody AuthenticationRequest request
    ) {
        System.out.println(request.getEmail()+request.getPassword());
        return ResponseEntity.ok(service.authenticate(request));
    }

    @GetMapping("/verify-token")
    public ResponseEntity<User> verifyToken(HttpServletRequest request) {
        User user = jwtUtil.extractUser(request);
        return ResponseEntity.ok(user);
    }

}
