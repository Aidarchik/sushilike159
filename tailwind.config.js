/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&h=666&q=80')",
        'reactflow': "url('/src/assets/bg1.jpg')",
      },
      fontFamily: {
        'arsenal': ['"Arsenal"', 'regular'],
        'bad-script': ['"Bad Script"', 'regular'],
        'balsamiq': ['"Balsamiq Sans"', 'regular'],
        'cormorant': ['"Cormorant Infant"', 'regular'],
        'forum': ['"Forum"', 'regular'],
        'pattaya': ['"Pattaya"', 'regular'],
        'roboto': ['"Roboto Flex"', 'regular'],
        'stix': ['"STIX Two Text"', 'regular'],
        'vk': ['-apple-system', 'BlinkMacSystemFont'],
      },
      boxShadow: {
        'vk': '0 0 0 0.5px',
      },
    },
  },
  plugins: [],
}