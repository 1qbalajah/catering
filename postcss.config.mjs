const config = {
  plugins: {
    "@tailwindcss/postcss": {},
  },

  webpack: (config) => {
    config.externals = [...(config.externals || []), 'bcryptjs', 'jose']
    return config
  },
};

export default config;
