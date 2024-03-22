import { type NavLinkProps, NavLink as NavLinkRouter } from 'react-router-dom'

export default function NavLink({ children, to, activeClassName, className, ...props }: NavLinkProps & { activeClassName?: string }) {
    const handleClassName = ({ isActive }: { isActive: boolean }) => {
        const list = [className]

        if (isActive) list.push(activeClassName)

        return list.join(' ')
    }

    return (
        <NavLinkRouter
            to={to}
            className={handleClassName}
            {...props}>
            {children}
        </NavLinkRouter>
    )
}
