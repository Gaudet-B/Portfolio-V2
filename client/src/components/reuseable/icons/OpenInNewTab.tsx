const SVG = ({ color }: { color: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    version="1.1"
    x="0px"
    y="0px"
    viewBox="0 0 100 125"
    enable-background="new 0 0 100 100"
    xmlSpace="preserve"
  >
    <line
      fill="none"
      stroke={color}
      stroke-width="11"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-miterlimit="10"
      x1="86.639"
      y1="13.996"
      x2="47.897"
      y2="53.203"
    />
    <polyline
      fill="none"
      stroke={color}
      stroke-width="11"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-miterlimit="10"
      points="  63.978,12.674 87.359,12.674 87.359,35.899 "
    />
    <polyline
      fill="none"
      stroke={color}
      stroke-width="11"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-miterlimit="10"
      points="  48.367,23.04 16.242,23.04 16.242,84.881 78.083,84.881 78.082,52.755 "
    />
    <text
      x="0"
      y="115"
      fill="transparent"
      font-size="5px"
      font-weight="bold"
      font-family="'Helvetica Neue', Helvetica, Arial-Unicode, Arial, Sans-serif"
    >
      Created by nesan PIllay
    </text>
    <text
      x="0"
      y="120"
      fill="transparent"
      font-size="5px"
      font-weight="bold"
      font-family="'Helvetica Neue', Helvetica, Arial-Unicode, Arial, Sans-serif"
    >
      from the Noun Project
    </text>
  </svg>
)

export default function OpenInNewTab({
  color,
  size,
}: {
  color: string
  size: number
}) {
  return (
    <div style={{ height: `${size}px`, width: `${size}px` }}>
      <SVG color={color} />
    </div>
  )
}
