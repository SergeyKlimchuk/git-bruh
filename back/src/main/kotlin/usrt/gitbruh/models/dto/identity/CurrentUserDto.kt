package usrt.gitbruh.models.dto.identity

data class CurrentUserDto(
        var id: Long,
        var firstName: String,
        var lastName: String,
        var email: String
)
