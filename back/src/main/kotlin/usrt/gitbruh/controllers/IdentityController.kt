package usrt.gitbruh.controllers

import org.springframework.web.bind.annotation.*
import usrt.gitbruh.models.dto.identity.CreateUserDto
import usrt.gitbruh.models.dto.identity.CurrentUserDto
import usrt.gitbruh.services.identity.IdentityService

@RequestMapping(value = ["/api/v1/identity"])
@RestController
class IdentityController(val identityService: IdentityService) {
    @PostMapping("/register")
    fun register(@RequestBody request: CreateUserDto) {
        identityService.register(request)
    }
    @GetMapping("/user")
    fun getCurrentUser(): CurrentUserDto {
        val currentUser = identityService.getCurrentUser()
        return CurrentUserDto(
            id = currentUser.id!!,
            firstName = currentUser.firstName,
            lastName = currentUser.lastName,
            email = currentUser.email
        )
    }
}