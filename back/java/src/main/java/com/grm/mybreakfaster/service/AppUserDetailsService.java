package com.grm.mybreakfaster.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Component;

import com.grm.mybreakfaster.domain.Permissao;
import com.grm.mybreakfaster.domain.Usuario;
import com.grm.mybreakfaster.repository.UsuarioRepository;

@Component
public class AppUserDetailsService implements UserDetailsService{
    @Autowired
    private UsuarioRepository userRepository;

    @Override
    public UserDetails loadUserByUsername(String s) throws UsernameNotFoundException {
        
    	Usuario user = userRepository.findByEmail(s);

        if(user == null) {
            throw new UsernameNotFoundException(String.format("The username %s doesn't exist", s));
        }

        List<GrantedAuthority> authorities = new ArrayList<>();
        
        for (Permissao permissao : user.getPermissoes()) {
            authorities.add(new SimpleGrantedAuthority(permissao.getPermissao()));
        	
        }

        UserDetails userDetails = new org.springframework.security.core.userdetails.User(user.getEmail(), user.getSenha(), authorities);

        return userDetails;
    }
}