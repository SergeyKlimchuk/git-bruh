package usrt.gitbruh.services.identity

import org.springframework.security.core.userdetails.UserDetails
import org.springframework.security.core.userdetails.UserDetailsService
import org.springframework.security.core.userdetails.UsernameNotFoundException
import usrt.gitbruh.models.identity.CustomUserDetails
import usrt.gitbruh.repositories.UserRepository

class CustomUserDetailService(var userRepository: UserRepository) : UserDetailsService {

    override fun loadUserByUsername(email: String): UserDetails {

        val user = userRepository.findByEmail(email)

        if (null == user) {
            throw UsernameNotFoundException("No author present with username: $email")
        }
        return CustomUserDetails(user)
    }
}