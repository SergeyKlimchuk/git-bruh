package usrt.gitbruh.models.dto.identity

data class CreateUserDto(
        var firstName: String,
        var lastName: String,
        var email: String,
        var password: String
)
