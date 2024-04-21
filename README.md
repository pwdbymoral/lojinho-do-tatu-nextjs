# Lojinho do Tatu

![Progress](https://progress-bar.dev/70/?title=Progress&color=fca5a5&width=100)

This is a website for a fictional store named "Lojinho do Tatu".
Products are currently retrieved from a JSON file but will eventually be stored in a database.

## Getting Started

To run the development server, follow these steps:

```bash
# Clone the repository
git clone https://github.com/pwdbymoral/lojinho-do-tatu-nextjs.git

# Install the dependencies
npm install

# Start the server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Technologies

- Next.js
- React
- Tailwind CSS
- Node.js
- npm

## Project Directory Structure

- [src/pages](src/pages) - Contains the React components for the web pages.
  - Home - Landing page displaying popular and sale products.
  - Products - Page showing all products with filtering by category.
  - Contact - Under development, will include a contact form.
- [src/components](src/components) - Likely contains reusable React components used throughout the pages.
- [src/pages/api](src/pages/api) - Contains API routes for fetching data (likely product data).
- [data/](data/) - Contains the JSON with products.

## License

This project is licensed under the MIT License.
