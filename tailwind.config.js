/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          daintree: "#04222C",   // Pantone 5463 C
          elm: "#0F7C83",        // Pantone 2237 C
          orange: "#FF5037",     // Pantone 171 C
          dandelion: "#FCDD65",  // Pantone 120 C
          gum: "#B3D6C2",        // Pantone 2246 C
        }
      },
      boxShadow: {
        soft: "0 12px 30px rgba(4,34,44,0.10)",
        glass: "0 18px 60px rgba(4,34,44,0.18)"
      },
      borderRadius: {
        xl2: "1.25rem"
      }
    }
  },
  plugins: []
};
