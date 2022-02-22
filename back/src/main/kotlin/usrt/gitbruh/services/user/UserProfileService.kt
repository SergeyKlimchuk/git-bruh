package usrt.gitbruh.services.user

import org.springframework.stereotype.Service
import usrt.gitbruh.exceptions.user.UserNotFoundException
import usrt.gitbruh.models.dto.profile.ProfileGeneralInfoDto
import usrt.gitbruh.repositories.UserRepository

@Service
class UserProfileService(val userRepository: UserRepository) {
    fun updateGeneralInfo(userId: Long, info: ProfileGeneralInfoDto) {
        val user = userRepository.findById(userId)
            .orElseThrow { UserNotFoundException() }

        user.firstName = info.firstName
        user.lastName = info.lastName
        user.bio = info.bio

        userRepository.save(user)
    }

    fun getGeneralInfo(userId: Long): ProfileGeneralInfoDto {
        val user = userRepository.findById(userId)
            .orElseThrow { UserNotFoundException() }

        return ProfileGeneralInfoDto(
            firstName = user.firstName,
            lastName = user.lastName,
            bio = user.bio
        )
    }
}