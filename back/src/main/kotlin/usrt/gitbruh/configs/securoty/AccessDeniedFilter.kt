package usrt.gitbruh.configs.securoty

import org.springframework.http.HttpStatus
import org.springframework.security.access.AccessDeniedException
import org.springframework.security.core.context.SecurityContextHolder
import org.springframework.web.filter.GenericFilterBean
import org.springframework.web.util.NestedServletException
import java.io.IOException
import javax.servlet.FilterChain
import javax.servlet.ServletException
import javax.servlet.ServletRequest
import javax.servlet.ServletResponse
import javax.servlet.http.HttpServletResponse

class AccessDeniedFilter : GenericFilterBean() {
    @Throws(IOException::class, ServletException::class)
    override fun doFilter(
        request: ServletRequest?,
        response: ServletResponse, filterChain: FilterChain
    ) {
        try {
            filterChain.doFilter(request, response)
        } catch (e: Exception) {
            if (e is AccessDeniedException ||
                e is NestedServletException &&
                e.rootCause is AccessDeniedException
            ) {
                val principal = SecurityContextHolder.getContext().authentication.principal
                var status = HttpStatus.FORBIDDEN
                if (principal is String && ("anonymousUser" == principal)) {
                    status = HttpStatus.UNAUTHORIZED
                }
                val rs = response as HttpServletResponse
                rs.sendError(status.value())
            } else {
                throw e
            }
        }
    }
}