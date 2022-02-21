package usrt.gitbruh.services.identity

import org.springframework.security.core.context.SecurityContextHolder
import org.springframework.stereotype.Service
import usrt.gitbruh.exceptions.EmailAlreadyExist
import usrt.gitbruh.exceptions.UserNotFoundException
import usrt.gitbruh.models.identity.User
import usrt.gitbruh.models.dto.identity.CreateUserDto
import usrt.gitbruh.repositories.UserRepository

@Service
class IdentityService(val userRepository: UserRepository) {
    fun register(request: CreateUserDto) {

        if (userRepository.existsByEmail(request.email)) {
            throw EmailAlreadyExist()
        }

        val user = User(
                id = null,
                email = request.email,
                firstName = request.firstName,
                lastName = request.lastName,
                password = request.password,
                active = true
        )

        // TODO: add activation by email

        userRepository.save(user)
    }

    fun getCurrentUser(): User {
        val principal = SecurityContextHolder.getContext().authentication.principal
        val usr = (principal as org.springframework.security.core.userdetails.User)
        val email = usr.username
        return userRepository.findByEmail(email)
            ?: throw UserNotFoundException()
    }
}