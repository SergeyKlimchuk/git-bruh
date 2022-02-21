package usrt.gitbruh.models.identity

import javax.persistence.*

@Entity(name = "users")
data class User(
        @Id
        @GeneratedValue
        var id: Long?,

        @Column(name = "firstName", nullable = false)
        var firstName: String,

        @Column(name = "lastName", nullable = false)
        var lastName: String,

        @Column(name = "email", nullable = false)
        var email: String,

        @Column(name = "password", nullable = false)
        var password: String,

        @Column(name = "active", nullable = false)
        var active: Boolean,

        @ElementCollection(targetClass = Role::class, fetch = FetchType.EAGER)
        @JoinTable(name = "user_roles", joinColumns = [JoinColumn(name = "user_id")])
        @Enumerated(EnumType.STRING)
        var roles: Set<Role> = setOf(Role.USER)
)