import CloseIcon from '@mui/icons-material/Close'
import MenuIcon from '@mui/icons-material/Menu'
import { useMemo, useState } from 'react'

export default function useNav() {
    const [open, setOpen] = useState(false)

    const openMenu = () => { setOpen(true) }
    const closeMenu = () => {
        setOpen(false)
    }

    const Icon = useMemo(() => {
        if (open) return CloseIcon

        return MenuIcon
    }, [open])

    return {
        isOpen: open,
        Icon,
        openMenu,
        closeMenu
    }
}
