import { parseISO, format } from 'date-fns'

export const Date = ({ dateString }) => {
    const date = parseISO(dateString)
    return (
        /* timeタグは、html5から登場したタグ、SEOエンジンに時間情報を伝えることができる. */
        <time dateTime={dateString}>
            {format(date, 'LLLL d, yyyy')}
        </time>
    )
}