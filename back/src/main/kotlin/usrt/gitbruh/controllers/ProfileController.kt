package usrt.gitbruh.controllers

import org.springframework.web.bind.annotation.*
import usrt.gitbruh.models.dto.profile.ProfileGeneralInfoDto
import usrt.gitbruh.services.user.UserProfileService
import usrt.gitbruh.services.user.UserService

@RequestMapping(value = ["/api/v1/profile"])
@RestController
class ProfileController(val userService: UserService, val userProfileService: UserProfileService) {
    @PutMapping("/general-info")
    fun updateGeneralInfo(@RequestBody request: ProfileGeneralInfoDto) {
        val currentUserId = userService.getCurrentUser().id!!
        userProfileService.updateGeneralInfo(currentUserId, request)
    }

    @GetMapping("/general-info")
    fun getCurrentUserProfileGeneralInfo(): ProfileGeneralInfoDto {
        val currentUserId = userService.getCurrentUser().id!!
        return userProfileService.getGeneralInfo(currentUserId)
    }
}