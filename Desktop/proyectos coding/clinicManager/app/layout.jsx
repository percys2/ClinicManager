export const metadata = {
  title: "Dental SaaS",
  description: "Dental clinic management software",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

