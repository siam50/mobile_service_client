import { useEffect } from "react"

const useTitle = title => {
    useEffect(() => {
        document.title = `${title} - Mobile Service`;
    }, [title])
}

export default useTitle;