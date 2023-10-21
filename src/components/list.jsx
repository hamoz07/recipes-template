
export default function list({listText,to}) {
  return (
    <li>
        <a href={to}>
            {listText}
        </a>
    </li>
  )
}
