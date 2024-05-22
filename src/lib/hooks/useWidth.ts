import { useMediaQuery } from "usehooks-ts"

/*
    sm	640px	@media (min-width: 640px) { ... }
    md	768px	@media (min-width: 768px) { ... }
    lg	1024px	@media (min-width: 1024px) { ... }
    xl	1280px	@media (min-width: 1280px) { ... }
    2xl	1536px	@media (min-width: 1536px) { ... }
*/

export default function useWidth() {
    const sm = useMediaQuery('(min-width: 640px)')
    const md = useMediaQuery('(min-width: 768px)')
    const lg = useMediaQuery('(min-width: 1024px)')
    const xl = useMediaQuery('(min-width: 1280px)')
    const isMobile = !lg

    return { sm, md, lg, xl, isMobile };
}
