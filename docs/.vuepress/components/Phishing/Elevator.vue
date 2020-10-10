<template>
  <div class="elevator">

    <svg width="640" height="480" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="b" spreadMethod="reflect" x1=".452" x2=".445" y1=".438" y2=".973">
          <stop offset="0" stop-color="#999"/>
          <stop offset="1" stop-color="#666"/>
          <stop offset="1" stop-color="#666"/>
        </linearGradient>
        <linearGradient id="a" spreadMethod="reflect" x1=".511" x2="1" y2="1">
          <stop offset="0" stop-color="#999"/>
          <stop offset="1" stop-color="#666"/>
          <stop offset="1" stop-color="#666"/>
        </linearGradient>
        <clipPath id="doorframe">
          <path d="m135.210114,83.445358l345.378174,0l0,350.420166l-345.378174,0l0,-350.420166z" />
        </clipPath>
      </defs>

      <svg width="40" style="display: none;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 490.667 490.667">
        <path d="M405.333 149.333c-17.673 0-32 14.327-32 32V160c0-17.673-14.327-32-32-32-17.673 0-32 14.327-32 32v-21.333c0-17.673-14.327-32-32-32-17.673 0-32 14.327-32 32V32c0-17.673-14.327-32-32-32s-32 14.327-32 32v266.667l-74.069-37.035A53.341 53.341 0 0 0 83.413 256c-16.613 0-30.08 13.467-30.08 30.08v.128a30.077 30.077 0 0 0 8.811 21.333l137.941 137.941a154.454 154.454 0 0 0 109.248 45.184c70.692 0 128-57.308 128-128V181.333c0-17.673-14.326-32-32-32z" fill="#ffcc80"/>
        <g fill="#ffb74d">
        <path d="M256 114.987v119.68c0 5.891-4.776 10.667-10.667 10.667V138.667A31.297 31.297 0 0 1 256 114.987zM320 136.32v98.347c0 5.891-4.776 10.667-10.667 10.667V160A31.298 31.298 0 0 1 320 136.32zM384 157.653v77.013c0 5.891-4.776 10.667-10.667 10.667v-64A31.3 31.3 0 0 1 384 157.653z"/>
        </g>
      </svg>

      <g class="layer">
        <g style="clip-path: url(#doorframe);">
          <path class="door right" fill="url(#b)" fill-opacity=".75" stroke="#666" stroke-width="2" d="M312.93 75.74h177v358.397h-177z"/>
          <path class="door left" fill="url(#b)" fill-opacity=".75" stroke="#666" stroke-width="2" d="M135.195 75.776h177v358.397h-177z"/>
        </g>
        <g fill-opacity=".31">
          <ellipse cx="524.189" cy="196.826" fill="url(#a)" rx="5.714" ry="5.714"/>
          <text font-family="Monospace" font-size="7" stroke="#666" stroke-dasharray="null" stroke-linecap="null" stroke-linejoin="null" stroke-width="0" text-anchor="middle" x="524.052" y="199.315">
            10
          </text>
        </g>
        <path fill="url(#a)" fill-opacity=".31" d="M511.267 137.35h52.571v95.446h-52.571z"/>
        <path fill="#666" d="M117.5 76.5h18v362h-18z"/>
        <g fill-opacity=".31">
          <ellipse cx="523.555" cy="152.665" fill="url(#a)" rx="5.714" ry="5.714"/>
          <text font-family="Monospace" font-size="7" stroke="#666" stroke-dasharray="null" stroke-linecap="null" stroke-linejoin="null" stroke-width="0" text-anchor="middle" x="523.417" y="155.154">
            1
          </text>
        </g>
        <g fill-opacity=".31">
          <ellipse cx="537.686" cy="152.666" fill="url(#a)" rx="5.714" ry="5.714"/>
          <text font-family="Monospace" font-size="8" stroke="#666" stroke-dasharray="null" stroke-linecap="null" stroke-linejoin="null" stroke-width="0" text-anchor="middle" x="537.549" y="155.154">
            2
          </text>
        </g>
        <path d="M223.386 34.209h183.096v20.788H223.386z"/>
        <g fill-opacity=".31">
          <ellipse cx="551.998" cy="152.665" fill="url(#a)" rx="5.714" ry="5.714"/>
          <text font-family="Monospace" font-size="7" stroke="#666" stroke-dasharray="null" stroke-linecap="null" stroke-linejoin="null" stroke-width="0" text-anchor="middle" x="551.86" y="155.154">
            3
          </text>
        </g>
        <g fill-opacity=".31">
          <ellipse cx="523.827" cy="166.935" fill="url(#a)" rx="5.714" ry="5.714"/>
          <text class="fourth" font-family="Monospace" font-size="7" stroke="#666" stroke-dasharray="null" stroke-linecap="null" stroke-linejoin="null" stroke-width="0" text-anchor="middle" x="523.689" y="169.424">
            4
          </text>
        </g>
        <g fill-opacity=".31">
          <ellipse cx="537.959" cy="166.935" fill="url(#a)" rx="5.714" ry="5.714"/>
          <text font-family="Monospace" font-size="7" stroke="#666" stroke-dasharray="null" stroke-linecap="null" stroke-linejoin="null" stroke-width="0" text-anchor="middle" x="537.821" y="169.424">
            5
          </text>
        </g>
        <g fill-opacity=".31">
          <ellipse cx="552.27" cy="166.935" fill="url(#a)" rx="5.714" ry="5.714"/>
          <text font-family="Monospace" font-size="7" stroke="#666" stroke-dasharray="null" stroke-linecap="null" stroke-linejoin="null" stroke-width="0" text-anchor="middle" x="552.132" y="169.424">
            6
          </text>
        </g>
        <g fill-opacity=".31">
          <ellipse cx="524.189" cy="181.609" fill="url(#a)" rx="5.714" ry="5.714"/>
          <text font-family="Monospace" font-size="7" stroke="#666" stroke-dasharray="null" stroke-linecap="null" stroke-linejoin="null" stroke-width="0" text-anchor="middle" x="524.052" y="184.097">
            7
          </text>
        </g>
        <g fill-opacity=".31">
          <ellipse cx="538.321" cy="181.609" fill="url(#a)" rx="5.714" ry="5.714"/>
          <text font-family="Monospace" font-size="7" stroke="#666" stroke-dasharray="null" stroke-linecap="null" stroke-linejoin="null" stroke-width="0" text-anchor="middle" x="538.183" y="184.097">
            8
          </text>
        </g>
        <g fill-opacity=".31">
          <ellipse cx="552.633" cy="181.609" fill="url(#a)" rx="5.714" ry="5.714"/>
          <text font-family="Monospace" font-size="7" stroke="#666" stroke-dasharray="null" stroke-linecap="null" stroke-linejoin="null" stroke-width="0" text-anchor="middle" x="552.495" y="184.097">
            9
          </text>
        </g>
        <g fill-opacity=".31">
          <ellipse cx="538.321" cy="196.826" fill="url(#a)" rx="5.714" ry="5.714"/>
          <text font-family="Monospace" font-size="7" stroke="#666" stroke-dasharray="null" stroke-linecap="null" stroke-linejoin="null" stroke-width="0" text-anchor="middle" x="538.183" y="199.315">
            11
          </text>
        </g>
        <g fill-opacity=".31">
          <ellipse cx="552.633" cy="196.826" fill="url(#a)" rx="5.714" ry="5.714"/>
          <text font-family="Monospace" font-size="7" stroke="#666" stroke-dasharray="null" stroke-linecap="null" stroke-linejoin="null" stroke-width="0" text-anchor="middle" x="552.495" y="199.315">
            12
          </text>
        </g>
        <g fill="#bf0000" fill-opacity=".31">
          <ellipse cx="524.644" cy="212.678" rx="5.714" ry="5.714"/>
          <text font-family="Monospace" font-size="7" stroke="#666" stroke-dasharray="null" stroke-linecap="null" stroke-linejoin="null" stroke-width="0" text-anchor="middle" x="524.507" y="215.166">
            E
          </text>
        </g>
        <path fill="#666" d="M480.5 76.5h18v362h-18z"/>
        <path fill="#333" d="M480.994 76h5.018v362.304h-5.018zM131.1 76.1h5v362.419h-5z"/>
        <path fill="#666" d="M112.5 62.5h393v21h-393z"/>
        <path fill="#333" d="M131.112 80.938h354.876v3.75H131.112z"/>
        <text fill="#666" font-family="Monospace" font-size="11" stroke-dasharray="null" stroke-linecap="null" stroke-linejoin="null" stroke-width="0" text-anchor="middle" x="315.042" y="47.311">
          1 2 3 4 5 6 7 8 9 10 11 12
        </text>
        <path fill="#CCC" d="M131.112 428.938h354.876v3.75H131.112z"/>
        <path fill="#CCC" d="M131.112 430.938h354.876v3.75H131.112z"/>
        <path fill="#DDD" d="M131.112 432.938h354.876v3.75H131.112z"/>
        <path fill="#DDD" d="M131.112 434.938h354.876v3.75H131.112z"/>
      </g>
    </svg>
  </div>
</template>

<script>
import anime from 'animejs'

export default {
  mounted () {

  }
}
</script>

<style scoped>

.elevator {
  width: 700px;
}

.elevator svg {
  width: 640px;
  margin-left: 40px;
  margin-top: -60px;
}

</style>
