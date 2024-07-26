import styleGuide from '../StyleGuide'

const PlayButton = ({ height, width }: { height: number; width: number }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      viewBox="-5.0 -10.0 110.0 135.0"
      height={height}
      width={width}
    >
      <g fill={styleGuide.colors.LabelGreen}>
        <path d="m50 11.059c21.469 0 38.941 17.469 38.941 38.941 0 21.469-17.469 38.941-38.941 38.941-21.469 0-38.941-17.473-38.941-38.941s17.473-38.941 38.941-38.941m0-5.5586c-24.578 0-44.5 19.922-44.5 44.5s19.922 44.5 44.5 44.5 44.5-19.922 44.5-44.5-19.922-44.5-44.5-44.5z" />
        <path d="m39.172 70.07c-1.0508 0-2.0898-0.28906-3.0312-0.85937-1.7695-1.0703-2.8203-2.9414-2.8203-5.0117v-28.41c0-2.0703 1.0586-3.9414 2.8203-5.0117 1.7695-1.0703 3.9219-1.1406 5.75-0.17969l27.219 14.211c1.9414 1.0195 3.1484 3.0117 3.1484 5.1992 0 2.1914-1.2109 4.1797-3.1484 5.1992l-27.219 14.199c-0.85938 0.44922-1.7891 0.67188-2.7109 0.67188zm0-34.578s-0.10156 0.011718-0.16016 0.050781c-0.14062 0.089843-0.14062 0.19922-0.14062 0.26172v28.41s0 0.17188 0.14062 0.26172c0.14062 0.089844 0.25 0.03125 0.28906 0l27.219-14.199c0.050781-0.03125 0.16016-0.078125 0.16016-0.26172 0-0.17969-0.10938-0.23828-0.16016-0.26172l-27.219-14.211s-0.070312-0.039063-0.14062-0.039063z" />
      </g>
      <text
        x="0.0"
        y="117.5"
        fontSize="5.0"
        fontWeight="bold"
        fontFamily="Arbeit Regular, Helvetica, Arial-Unicode, Arial, Sans-serif"
        fill="#000000"
      >
        Created by Breanna Rice
      </text>
      <text
        x="0.0"
        y="122.5"
        fontSize="5.0"
        fontWeight="bold"
        fontFamily="Arbeit Regular, Helvetica, Arial-Unicode, Arial, Sans-serif"
        fill="#000000"
      >
        from Noun Project
      </text>
    </svg>
  )
}

export default PlayButton
