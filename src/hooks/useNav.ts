import CloseIcon from '@mui/icons-material/Close'
import MenuIcon from '@mui/icons-material/Menu'
import { useMemo, useState } from 'react'

export default function useNav() {
    const [open, setOpen] = useState(false)

    const Icon = useMemo(() => {
        if (open) return CloseIcon

        return MenuIcon
    }, [open])

    const openMenu = () => { setOpen(true) }
    const closeMenu = () => {
        console.log('It is working...')
        setOpen(false)
    }

    return {
        isOpen: open,
        Icon,
        openMenu,
        closeMenu
    }
}
