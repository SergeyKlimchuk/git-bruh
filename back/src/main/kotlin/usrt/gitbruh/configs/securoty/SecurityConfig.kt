package usrt.gitbruh.configs.securoty

import org.springframework.context.annotation.ComponentScan
import org.springframework.context.annotation.Configuration
import org.springframework.http.HttpStatus
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder
import org.springframework.security.config.annotation.web.builders.HttpSecurity
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter
import org.springframework.security.crypto.password.NoOpPasswordEncoder
import org.springframework.security.web.access.intercept.FilterSecurityInterceptor
import org.springframework.security.web.authentication.logout.HttpStatusReturningLogoutSuccessHandler
import usrt.gitbruh.services.identity.CustomUserDetailService
import javax.sql.DataSource

@Configuration
@EnableWebSecurity
@ComponentScan(basePackageClasses = [CustomUserDetailService::class])
class SecurityConfig(var dataSource: DataSource) : WebSecurityConfigurerAdapter() {
    private val anonymousPaths = arrayOf(
        "/api/v1/identity/login",
        "/api/v1/identity/logout",
        "/api/v1/identity/register",
    )

    override fun configure(http: HttpSecurity) {
        http
                .authorizeRequests()
                .antMatchers(*anonymousPaths).permitAll()
                .anyRequest().authenticated()
                .and()
                .formLogin()
                .loginProcessingUrl("/api/v1/identity/login")
                .usernameParameter("email")
                .passwordParameter("password")
                .successHandler { _, _, _ -> }
                .failureHandler { _, response, _ -> response.status = HttpStatus.UNAUTHORIZED.value() }
                .and()
                .logout()
                .logoutUrl("/api/v1/identity/logout")
                .logoutSuccessHandler(HttpStatusReturningLogoutSuccessHandler(HttpStatus.OK))
                .and()
                .httpBasic()
                .and().addFilterBefore(AccessDeniedFilter(),  FilterSecurityInterceptor::class.java)
                .csrf()
                .disable()
    }

    override fun configure(auth: AuthenticationManagerBuilder) {
        auth.jdbcAuthentication()
                .dataSource(dataSource)
                .passwordEncoder(NoOpPasswordEncoder.getInstance()) //SCryptPasswordEncoder()
                .usersByUsernameQuery("SELECT email, password, active FROM users WHERE email=?")
                .authoritiesByUsernameQuery("SELECT u.email, ur.roles FROM users u INNER JOIN user_roles ur ON ur.user_id=u.id WHERE u.email=?")
    }
}