package com.grm.mybreakfaster.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class SecurityController {
	
	@RequestMapping("/login")
	public String login() {
		return "hello world!";
	}
}
