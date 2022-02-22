package usrt.gitbruh.services.user

import org.springframework.security.core.context.SecurityContextHolder
import org.springframework.stereotype.Service
import usrt.gitbruh.exceptions.UserNotFoundException
import usrt.gitbruh.models.identity.User
import usrt.gitbruh.repositories.UserRepository

@Service
class UserService(val userRepository: UserRepository) {
    fun getCurrentUser(): User {
        val principal = SecurityContextHolder.getContext().authentication.principal
        val usr = (principal as org.springframework.security.core.userdetails.User)
        val email = usr.username
        return userRepository.findByEmail(email)
            ?: throw UserNotFoundException()
    }
}