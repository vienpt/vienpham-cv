import postcssJitProps from 'postcss-jit-props'
import OpenProps from 'open-props'

// vite register postcss automatically
// https://vitejs.dev/guide/features.html#postcss
const config = {
  // only vars used are in build output
  plugins: [postcssJitProps(OpenProps)],
}

export default config;