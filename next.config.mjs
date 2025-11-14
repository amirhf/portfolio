import createMDX from '@next/mdx'
const withMDX = createMDX({
  extension: /\.mdx?$/
})
const nextConfig = {
  experimental: { mdxRs: true },
  pageExtensions: ['tsx', 'ts', 'mdx']
}
export default withMDX(nextConfig)
