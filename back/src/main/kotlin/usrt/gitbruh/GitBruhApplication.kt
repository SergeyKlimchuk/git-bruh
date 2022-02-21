package usrt.gitbruh

import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication
import org.springframework.data.jpa.repository.config.EnableJpaAuditing

@SpringBootApplication
@EnableJpaAuditing
class GitBruhApplication

fun main(args: Array<String>) {
	runApplication<GitBruhApplication>(*args)
}
