package usrt.gitbruh.repositories

import org.springframework.data.jpa.repository.JpaRepository
import usrt.gitbruh.models.identity.User


interface UserRepository : JpaRepository<User, Long> {
    fun findByEmail(email: String): User?
    fun existsByEmail(email: String): Boolean
}
