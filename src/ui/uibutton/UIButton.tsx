import { Link } from "react-router-dom"
export default function UIButton({
  href,
  id,
  label,
  onClick,
  style,
  type,
  className,
  target,
}: {
  id?: any
  href?: any
  label?: any
  onClick?: any
  style?: any
  type?: any
  className?: any
  target?: any
}) {
  return href ? (
    <Link
      to={"/"}
      id={id}
      className={`btn btn-${type ? type : "link"}`}
      style={style}
      target={target}
    >
      {label}
    </Link>
  ) : (
    <button
      id={id}
      className={`btn btn-${type ? type : "plain"} ${className ? className : ""
        }`}
      style={style}
      onClick={onClick}
    >
      {label}
    </button>
  )
}
